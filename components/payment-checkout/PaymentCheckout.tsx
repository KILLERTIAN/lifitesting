'use client';

import { useState, useRef, useEffect } from 'react';
import Image from 'next/image';
import { LiFiWidget, WidgetDrawer } from '@lifi/widget';
import { useTheme } from 'next-themes';
import { ArrowRight, CreditCard, Wallet } from 'lucide-react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

// Simplified version without type declarations for window.ethereum
// We'll use type assertions instead to avoid conflicts

export const PaymentCheckout = () => {
  const router = useRouter();
  const { theme, systemTheme } = useTheme();
  const currentTheme = theme === 'system' ? systemTheme : theme;
  const isDarkTheme = currentTheme === 'dark';
  
  const [selectedMethod, setSelectedMethod] = useState<'card' | 'crypto' | null>(null);
  const [isLifiOpen, setIsLifiOpen] = useState(false);
  const drawerRef = useRef<WidgetDrawer>(null);
  const [walletAddress, setWalletAddress] = useState<string | null>(null);
  const [isConnecting, setIsConnecting] = useState(false);
  
  // Check if window.ethereum is available (MetaMask is installed)
  const isMetaMaskInstalled = () => {
    return typeof window !== 'undefined' && typeof window.ethereum !== 'undefined';
  };

  // Connect to MetaMask wallet
  const connectWallet = async () => {
    if (!isMetaMaskInstalled()) {
      window.open('https://metamask.io/download/', '_blank');
      return;
    }

    setIsConnecting(true);
    try {
      // Request account access
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const ethereum = window.ethereum as any;
      const accounts = await ethereum.request({ 
        method: 'eth_requestAccounts' 
      }) as string[];
      
      if (accounts && accounts.length > 0) {
        setWalletAddress(accounts[0]);
      }
    } catch (error) {
      console.error('Error connecting to MetaMask:', error);
    } finally {
      setIsConnecting(false);
    }
  };

  // Listen for account changes
  useEffect(() => {
    if (isMetaMaskInstalled()) {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const ethereum = window.ethereum as any;
      
      const handleAccountsChanged = (accounts: string[]) => {
        if (accounts.length === 0) {
          // User disconnected their wallet
          setWalletAddress(null);
        } else {
          setWalletAddress(accounts[0]);
        }
      };

      ethereum.on('accountsChanged', handleAccountsChanged);

      // Check if already connected
      ethereum.request({ method: 'eth_accounts' })
        .then((accounts: unknown) => {
          const addressArray = accounts as string[];
          if (addressArray.length > 0) {
            setWalletAddress(addressArray[0]);
          }
        })
        .catch(console.error);

      return () => {
        ethereum.removeListener('accountsChanged', handleAccountsChanged);
      };
    }
  }, []);
  
  const toggleLifiWidget = () => {
    drawerRef.current?.toggleDrawer();
    setIsLifiOpen(!isLifiOpen);
  };

  const handleContinuePayment = () => {
    if (selectedMethod === 'crypto') {
      toggleLifiWidget();
    } else if (selectedMethod === 'card') {
      router.push('/card-payment');
    }
  };

  // Format wallet address for display
  const formatWalletAddress = (address: string) => {
    return `${address.slice(0, 6)}...${address.slice(-4)}`;
  };

  return (
    <div className="min-h-screen flex flex-col">
      {/* Header with back button and logo */}
      <header className="border-b border-border/40 backdrop-blur-sm bg-background/50 fixed top-0 left-0 right-0 z-50">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors">
            <ArrowRight size={16} className="rotate-180" />
            <span>Back to Home</span>
          </Link>
          
          <div className="flex items-center gap-2">
            <Image 
              src="/coin.png" 
              alt="COINK" 
              width={24} 
              height={24}
            />
            <span className="font-medium">COINK Checkout</span>
          </div>
          
          <button 
            onClick={connectWallet}
            disabled={isConnecting}
            className={`text-sm font-medium ${walletAddress ? 'bg-primary/10 text-primary px-3 py-1 rounded-full' : 'text-primary hover:text-primary/80'} transition-colors`}
          >
            {isConnecting ? 'Connecting...' : walletAddress ? formatWalletAddress(walletAddress) : 'Connect Wallet'}
          </button>
        </div>
      </header>

      <main className="flex-1 pt-24 pb-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
            {/* Left side - Payment options */}
            <div className="md:col-span-3">
              <div className="bg-card/50 backdrop-blur-sm rounded-xl p-6 border border-border/40 shadow-sm">
                <h1 className="text-xl font-semibold mb-6">Select payment method</h1>
                
                {/* Payment methods */}
                <div className="space-y-4">
                  {/* Card Payment */}
                  <div 
                    className={`p-4 rounded-lg border cursor-pointer transition-all ${
                      selectedMethod === 'card' 
                        ? 'border-primary bg-primary/5' 
                        : 'border-border hover:border-primary/30'
                    }`}
                    onClick={() => setSelectedMethod('card')}
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                        <CreditCard size={20} className="text-primary" />
                      </div>
                      <div>
                        <h3 className="font-medium">Pay with Card</h3>
                        <p className="text-sm text-muted-foreground">Fast and secure card payment</p>
                      </div>
                      <div className="ml-auto">
                        <div className={`w-5 h-5 rounded-full border-2 ${
                          selectedMethod === 'card' 
                            ? 'border-primary bg-primary' 
                            : 'border-muted-foreground'
                        }`}></div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Crypto Payment */}
                  <div 
                    className={`p-4 rounded-lg border cursor-pointer transition-all ${
                      selectedMethod === 'crypto' 
                        ? 'border-primary bg-primary/5' 
                        : 'border-border hover:border-primary/30'
                    }`}
                    onClick={() => setSelectedMethod('crypto')}
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                        <Wallet size={20} className="text-primary" />
                      </div>
                      <div>
                        <h3 className="font-medium">Pay with Crypto</h3>
                        <p className="text-sm text-muted-foreground">Swap and bridge from any token</p>
                      </div>
                      <div className="ml-auto">
                        <div className={`w-5 h-5 rounded-full border-2 ${
                          selectedMethod === 'crypto' 
                            ? 'border-primary bg-primary' 
                            : 'border-muted-foreground'
                        }`}></div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Payment action button */}
                <div className="mt-8">
                  <button 
                    onClick={handleContinuePayment}
                    disabled={!selectedMethod}
                    className={`w-full py-3 px-4 rounded-lg font-medium transition-all ${
                      selectedMethod 
                        ? 'bg-primary text-white hover:bg-primary/90' 
                        : 'bg-muted text-muted-foreground cursor-not-allowed'
                    }`}
                  >
                    {selectedMethod === 'card' ? 'Continue to Card Payment' : 
                     selectedMethod === 'crypto' ? 'Open LiFi Widget' : 'Select a Payment Method'}
                  </button>
                </div>
              </div>
            </div>
            
            {/* Right side - Order summary */}
            <div className="md:col-span-2">
              <div className="bg-card/50 backdrop-blur-sm rounded-xl p-6 border border-border/40 shadow-sm sticky top-24">
                <h2 className="text-lg font-semibold mb-4">Order Summary</h2>
                
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Subtotal</span>
                    <span>$99.00</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Gas fees</span>
                    <span>$1.50</span>
                  </div>
                  <div className="border-t border-border pt-3 flex justify-between font-medium">
                    <span>Total</span>
                    <span>$100.50</span>
                  </div>
                </div>
                
                <div className="mt-6 bg-muted/30 p-4 rounded-lg">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-12 h-12 bg-background rounded-md flex items-center justify-center">
                      <Image 
                        src="/coin.png" 
                        alt="Product" 
                        width={32} 
                        height={32}
                      />
                    </div>
                    <div>
                      <h3 className="font-medium">COINK Premium</h3>
                      <p className="text-xs text-muted-foreground">Annual Subscription</p>
                    </div>
                  </div>
                  <div className="text-xs text-muted-foreground">
                    Access to premium features and priority support
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      
      {/* LiFi Widget Drawer */}
      <LiFiWidget
        ref={drawerRef}
        integrator="COINK"
        config={{
          variant: 'drawer',
          appearance: isDarkTheme ? 'dark' : 'light',
          theme: {
            palette: {
              primary: isDarkTheme 
                ? { main: 'hsl(270, 80%, 65%)' } 
                : { main: 'hsl(270, 70%, 60%)' },
              secondary: isDarkTheme 
                ? { main: 'hsl(280, 85%, 55%)' } 
                : { main: 'hsl(280, 75%, 45%)' },
            },
            shape: {
              borderRadius: 16,
              borderRadiusSecondary: 12,
            },
            typography: {
              fontFamily: 'inherit',
            },
          },
          chains: {
            allow: [
              1, 137, 42161, 10, 56, 43114, 250, 100, 8453, 
              324, 59144, 1101
            ],
          },
          walletConfig: {
            onConnect: connectWallet
          },
          routePriority: "RECOMMENDED",
          slippage: 1,
        }}
      />
    </div>
  );
}; 