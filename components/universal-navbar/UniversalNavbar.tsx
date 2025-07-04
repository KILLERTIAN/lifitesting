"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { ThemeSwitcher } from '@/components/universal-checkout/ThemeSwitcher';
import { Menu, X, ChevronDown, Wallet } from 'lucide-react';

interface NavItem {
  label: string;
  href: string;
  children?: NavItem[];
}

interface UniversalNavbarProps {
  logo?: {
    src: string;
    alt: string;
    width?: number;
    height?: number;
  };
  title?: string;
  subtitle?: string;
  navItems?: NavItem[];
  ctaButton?: {
    label: string;
    href?: string;
    onClick?: () => void;
  };
  showThemeToggle?: boolean;
  transparent?: boolean;
  className?: string;
}

export const UniversalNavbar = ({
  logo = { src: "/coin.png", alt: "COINK", width: 40, height: 40 },
  title = "COINK",
  navItems = [
    { label: "Features", href: "#features" },
    { label: "About", href: "#about" },
    { label: "Chains", href: "#supported-chains" },
  ],
  ctaButton = { label: "Launch App", href: "/checkout" },
  showThemeToggle = true,
  transparent = true,
  className = "",
}: UniversalNavbarProps) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [walletAddress, setWalletAddress] = useState<string | null>(null);
  const [isConnecting, setIsConnecting] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [scrolled]);

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

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  const toggleDropdown = (label: string) => {
    setActiveDropdown(activeDropdown === label ? null : label);
  };

  // Format wallet address for display
  const formatWalletAddress = (address: string) => {
    return `${address.slice(0, 6)}...${address.slice(-4)}`;
  };

  // Update CTA button based on wallet connection status
  const getCtaButton = () => {
    if (ctaButton.onClick) {
      // If onClick is provided, use that (for LiFi widget)
      return ctaButton;
    }

    // For the main navbar, show wallet connection
    if (isConnecting) {
      return {
        label: "Connecting...",
        onClick: () => {},
      };
    } else if (walletAddress) {
      return {
        label: formatWalletAddress(walletAddress),
        onClick: () => {},
      };
    } else {
      return {
        label: "Connect Wallet",
        onClick: connectWallet,
      };
    }
  };

  const updatedCtaButton = getCtaButton();

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled || mobileMenuOpen || !transparent
          ? 'bg-white/90 dark:bg-[#12091a]/90 backdrop-blur-md shadow-md' 
          : 'bg-transparent'
      } ${className}`}
    >
      <div className="container mx-auto px-4 sm:px-6 h-16 md:h-20 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3 group z-50">
          <div className="relative w-8 h-8 md:w-10 md:h-10">
            <Image 
              src={logo.src} 
              alt={logo.alt} 
              width={logo.width} 
              height={logo.height}
              className="object-contain group-hover:scale-105 transition-transform duration-300"
            />
            <motion.div 
              className="absolute -inset-2 rounded-full bg-primary/20 dark:bg-primary/30 blur-md"
              animate={{ 
                scale: [1, 1.2, 1],
                opacity: [0.5, 0.8, 0.5]
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                repeatType: "reverse"
              }}
            />
          </div>
          {title && (
            <div className="flex flex-col">
              <span className="text-xl md:text-2xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                {title}
              </span>
              
            </div>
          )}
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-6 lg:gap-8">
          <nav className="flex items-center gap-5 lg:gap-8">
            {navItems.map((item) => (
              <div key={item.label} className="relative group">
                {item.children ? (
                  <button 
                    onClick={() => toggleDropdown(item.label)}
                    className="flex items-center gap-1 text-foreground/80 hover:text-primary transition-colors py-2"
                  >
                    <span>{item.label}</span>
                    <ChevronDown className="h-4 w-4" />
                  </button>
                ) : (
                  <Link 
                    href={item.href} 
                    className="text-foreground/80 hover:text-primary transition-colors relative group py-2"
                  >
                    <span>{item.label}</span>
                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300"></span>
                  </Link>
                )}

                {/* Dropdown menu */}
                {item.children && (
                  <AnimatePresence>
                    {activeDropdown === item.label && (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 10 }}
                        transition={{ duration: 0.2 }}
                        className="absolute top-full left-0 mt-1 bg-white dark:bg-[#12091a] shadow-lg rounded-lg overflow-hidden min-w-[180px] border border-border"
                      >
                        {item.children.map((child) => (
                          <Link
                            key={child.label}
                            href={child.href}
                            onClick={() => setActiveDropdown(null)}
                            className="block px-4 py-2 hover:bg-muted/50 text-foreground/80 hover:text-primary transition-colors"
                          >
                            {child.label}
                          </Link>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                )}
              </div>
            ))}
          </nav>
          
          {showThemeToggle && <ThemeSwitcher />}
          
          {updatedCtaButton && (
            updatedCtaButton.href ? (
              <Link href={updatedCtaButton.href}>
                <motion.button 
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="purple-glow bg-gradient-to-r from-primary to-secondary text-white font-medium py-2 px-4 md:py-2.5 md:px-6 rounded-lg text-sm md:text-base flex items-center gap-2"
                >
                  {walletAddress && <Wallet className="h-4 w-4" />}
                  {updatedCtaButton.label}
                </motion.button>
              </Link>
            ) : (
              <motion.button 
                onClick={updatedCtaButton.onClick}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`purple-glow ${walletAddress 
                  ? 'bg-primary/10 text-primary border border-primary/30' 
                  : 'bg-gradient-to-r from-primary to-secondary text-white'} 
                  font-medium py-2 px-4 md:py-2.5 md:px-6 rounded-lg text-sm md:text-base flex items-center gap-2`}
                disabled={isConnecting}
              >
                {walletAddress && <Wallet className="h-4 w-4" />}
                {updatedCtaButton.label}
              </motion.button>
            )
          )}
        </div>

        {/* Mobile Menu Button */}
        <div className="flex items-center gap-4 md:hidden z-50">
          {showThemeToggle && <ThemeSwitcher />}
          <button 
            onClick={toggleMobileMenu}
            className="p-2 rounded-lg bg-white/20 dark:bg-[#12091a]/20 backdrop-blur-md border border-white/10 dark:border-white/5"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? (
              <X className="h-5 w-5 text-foreground" />
            ) : (
              <Menu className="h-5 w-5 text-foreground" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div 
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 top-16 z-40 bg-white/95 dark:bg-[#12091a]/95 backdrop-blur-md"
            >
              <div className="container mx-auto px-6 py-8 flex flex-col items-center gap-6">
                <nav className="flex flex-col items-center gap-6 text-lg w-full">
                  {navItems.map((item) => (
                    <div key={item.label} className="w-full text-center">
                      {item.children ? (
                        <>
                          <button 
                            onClick={() => toggleDropdown(item.label)}
                            className="flex items-center justify-center gap-1 text-foreground hover:text-primary transition-colors py-2 mx-auto"
                          >
                            <span>{item.label}</span>
                            <ChevronDown className="h-4 w-4" />
                          </button>
                          
                          <AnimatePresence>
                            {activeDropdown === item.label && (
                              <motion.div
                                initial={{ opacity: 0, height: 0 }}
                                animate={{ opacity: 1, height: 'auto' }}
                                exit={{ opacity: 0, height: 0 }}
                                transition={{ duration: 0.2 }}
                                className="flex flex-col items-center mt-2 space-y-2"
                              >
                                {item.children.map((child) => (
                                  <Link
                                    key={child.label}
                                    href={child.href}
                                    onClick={closeMobileMenu}
                                    className="text-foreground/70 hover:text-primary transition-colors py-1"
                                  >
                                    {child.label}
                                  </Link>
                                ))}
                              </motion.div>
                            )}
                          </AnimatePresence>
                        </>
                      ) : (
                        <Link 
                          href={item.href} 
                          onClick={closeMobileMenu}
                          className="text-foreground hover:text-primary transition-colors py-2 block"
                        >
                          {item.label}
                        </Link>
                      )}
                    </div>
                  ))}
                </nav>
                
                {updatedCtaButton && (
                  updatedCtaButton.href ? (
                    <Link href={updatedCtaButton.href} onClick={closeMobileMenu} className="w-full">
                      <motion.button 
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="purple-glow bg-gradient-to-r from-primary to-secondary text-white font-medium py-3 px-8 rounded-lg text-lg w-full flex items-center justify-center gap-2"
                      >
                        {walletAddress && <Wallet className="h-5 w-5" />}
                        {updatedCtaButton.label}
                      </motion.button>
                    </Link>
                  ) : (
                    <motion.button 
                      onClick={() => {
                        if (updatedCtaButton.onClick) updatedCtaButton.onClick();
                        closeMobileMenu();
                      }}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className={`purple-glow ${walletAddress 
                        ? 'bg-primary/10 text-primary border border-primary/30' 
                        : 'bg-gradient-to-r from-primary to-secondary text-white'} 
                        font-medium py-3 px-8 rounded-lg text-lg w-full flex items-center justify-center gap-2`}
                      disabled={isConnecting}
                    >
                      {walletAddress && <Wallet className="h-5 w-5" />}
                      {updatedCtaButton.label}
                    </motion.button>
                  )
                )}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.header>
  );
}; 