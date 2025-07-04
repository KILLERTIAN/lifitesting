"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { ThemeSwitcher } from '@/components/universal-checkout/ThemeSwitcher';
import { Menu, X } from 'lucide-react';

export const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

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

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled || mobileMenuOpen
          ? 'bg-white/90 dark:bg-[#12091a]/90 backdrop-blur-md shadow-md' 
          : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 py-4 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3 group z-50">
          <div className="relative w-10 h-10">
      <Image
              src="/coin.png" 
              alt="COINK" 
              width={40} 
              height={40}
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
          <div className="flex flex-col">
            <span className="text-2xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              COINK
            </span>
            <span className="text-xs text-muted-foreground -mt-1">Checkout</span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          <nav className="flex items-center gap-8">
            <Link 
              href="#features" 
              className="text-foreground/80 hover:text-primary transition-colors relative group"
            >
              <span>Features</span>
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300"></span>
            </Link>
            <Link 
              href="#about" 
              className="text-foreground/80 hover:text-primary transition-colors relative group"
            >
              <span>About</span>
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300"></span>
            </Link>
            <Link 
              href="#supported-chains" 
              className="text-foreground/80 hover:text-primary transition-colors relative group"
            >
              <span>Chains</span>
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300"></span>
            </Link>
          </nav>
          
          <ThemeSwitcher />
          
          <Link href="/checkout">
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="purple-glow bg-gradient-to-r from-primary to-secondary text-white font-medium py-2.5 px-6 rounded-lg"
              >
              Launch App
            </motion.button>
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <div className="flex items-center gap-4 md:hidden z-50">
          <ThemeSwitcher />
          <button 
            onClick={toggleMobileMenu}
            className="p-2 rounded-lg bg-white/20 dark:bg-[#12091a]/20 backdrop-blur-md border border-white/10 dark:border-white/5"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? (
              <X className="h-6 w-6 text-foreground" />
            ) : (
              <Menu className="h-6 w-6 text-foreground" />
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
              className="fixed inset-0 top-0 z-40 bg-white/95 dark:bg-[#12091a]/95 backdrop-blur-md pt-20"
            >
              <div className="container mx-auto px-6 py-8 flex flex-col items-center gap-8">
                <nav className="flex flex-col items-center gap-8 text-lg">
                  <Link 
                    href="#features" 
                    onClick={closeMobileMenu}
                    className="text-foreground hover:text-primary transition-colors py-2"
                  >
                    Features
                  </Link>
                  <Link 
                    href="#about" 
                    onClick={closeMobileMenu}
                    className="text-foreground hover:text-primary transition-colors py-2"
                  >
                    About
                  </Link>
                  <Link 
                    href="#supported-chains" 
                    onClick={closeMobileMenu}
                    className="text-foreground hover:text-primary transition-colors py-2"
                  >
                    Chains
                  </Link>
                </nav>
                
                <Link href="/checkout" onClick={closeMobileMenu}>
                  <motion.button 
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="purple-glow bg-gradient-to-r from-primary to-secondary text-white font-medium py-3 px-8 rounded-lg text-lg"
                  >
                    Launch App
                  </motion.button>
                </Link>
              </div>
            </motion.div>
      )}
        </AnimatePresence>
      </div>
    </motion.header>
  );
};
