'use client';

import { LiFiWidget, WidgetDrawer } from '@lifi/widget';
import { useRef } from 'react';
import { useTheme } from 'next-themes';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowLeft, Wallet, ArrowRight } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

export default function TestPage() {
  const drawerRef = useRef<WidgetDrawer>(null);
  const { theme, systemTheme } = useTheme();
  const currentTheme = theme === 'system' ? systemTheme : theme;
  const isDarkTheme = currentTheme === 'dark';

  const toggleWidget = () => {
    drawerRef.current?.toggleDrawer();
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-background/90">
      {/* Header */}
      <header className="border-b border-border/40 backdrop-blur-sm bg-background/50 fixed top-0 left-0 right-0 z-50">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors">
            <ArrowLeft size={16} />
            <span>Back to Home</span>
          </Link>
          
          <div className="flex items-center gap-2">
            <Image 
              src="/coin.png" 
              alt="COINK" 
              width={24} 
              height={24}
            />
            <span className="font-medium">LiFi Widget Test</span>
          </div>
          
          <div className="w-24"></div> {/* Spacer for centering */}
        </div>
      </header>

      <main className="pt-24 pb-16 container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Hero Section */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Test LiFi Widget
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Experience seamless cross-chain bridging and swapping with our integrated LiFi widget
            </p>
          </div>

          {/* Main Content Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Left Column - Info */}
            <div className="space-y-6">
              <Card className="bg-card/50 backdrop-blur-sm border-border/40">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Wallet className="text-primary" size={20} />
                    Widget Features
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-3">
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-primary rounded-full"></div>
                      <span className="text-sm">Cross-chain token bridging</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-primary rounded-full"></div>
                      <span className="text-sm">Multi-chain token swapping</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-primary rounded-full"></div>
                      <span className="text-sm">Real-time route optimization</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-primary rounded-full"></div>
                      <span className="text-sm">Secure wallet integration</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-card/50 backdrop-blur-sm border-border/40">
                <CardHeader>
                  <CardTitle>Supported Chains</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-2 gap-2 text-sm">
                    <span className="text-muted-foreground">• Ethereum</span>
                    <span className="text-muted-foreground">• Polygon</span>
                    <span className="text-muted-foreground">• Arbitrum</span>
                    <span className="text-muted-foreground">• Optimism</span>
                    <span className="text-muted-foreground">• Base</span>
                    <span className="text-muted-foreground">• BSC</span>
                    <span className="text-muted-foreground">• Avalanche</span>
                    <span className="text-muted-foreground">• And more...</span>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Right Column - Widget */}
            <div className="space-y-6">
              <Card className="bg-card/50 backdrop-blur-sm border-border/40">
                <CardHeader>
                  <CardTitle>LiFi Widget</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="text-center space-y-4">
                    <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                      <Wallet className="text-primary" size={24} />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-2">Ready to Test</h3>
                      <p className="text-sm text-muted-foreground">
                        Click the button below to open the LiFi widget in drawer mode. 
                        The widget will handle wallet connection automatically.
                      </p>
                    </div>
                    <Button 
                      onClick={toggleWidget}
                      className="w-full bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90"
                    >
                      <span>Open LiFi Widget</span>
                      <ArrowRight size={16} />
                    </Button>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-card/50 backdrop-blur-sm border-border/40">
                <CardHeader>
                  <CardTitle>How It Works</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <div className="w-6 h-6 bg-primary/20 rounded-full flex items-center justify-center text-xs font-bold text-primary">
                        1
                      </div>
                      <div>
                        <h4 className="font-medium text-sm">Connect Wallet</h4>
                        <p className="text-xs text-muted-foreground">Connect your MetaMask or other supported wallet</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-6 h-6 bg-primary/20 rounded-full flex items-center justify-center text-xs font-bold text-primary">
                        2
                      </div>
                      <div>
                        <h4 className="font-medium text-sm">Select Tokens</h4>
                        <p className="text-xs text-muted-foreground">Choose source and destination tokens and chains</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-6 h-6 bg-primary/20 rounded-full flex items-center justify-center text-xs font-bold text-primary">
                        3
                      </div>
                      <div>
                        <h4 className="font-medium text-sm">Confirm Transaction</h4>
                        <p className="text-xs text-muted-foreground">Review and confirm your cross-chain transaction</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </main>
      
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
        }}
      />
    </div>
  );
}