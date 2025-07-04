'use client';

import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Github, Twitter, Linkedin, Instagram } from 'lucide-react';

export const Footer = () => {
  return (
    <footer className="pt-20 pb-10 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 -z-10 gradient-bg opacity-30"></div>
      <div className="absolute inset-0 -z-10 noise-bg"></div>
      
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-16">
          <div className="space-y-6">
            <Link href="/" className="flex items-center gap-3 group">
              <div className="relative w-10 h-10">
                <Image 
                  src="/coin.png" 
                  alt="COINK" 
                  width={40} 
                  height={40}
                  className="object-contain"
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
              <span className="text-2xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                COINK
              </span>
            </Link>
            <p className="text-muted-foreground">
              Simplifying cross-chain cryptocurrency transactions with a seamless, user-friendly interface.
            </p>
            <div className="flex items-center gap-4">
              <motion.a 
                href="https://github.com" 
                target="_blank" 
                rel="noopener noreferrer"
                whileHover={{ y: -3 }}
                className="p-2 bg-white dark:bg-[#12091a]/90 rounded-full shadow-md hover:shadow-lg transition-all"
              >
                <Github size={18} className="text-primary" />
              </motion.a>
              <motion.a 
                href="https://twitter.com" 
                target="_blank" 
                rel="noopener noreferrer"
                whileHover={{ y: -3 }}
                className="p-2 bg-white dark:bg-[#12091a]/90 rounded-full shadow-md hover:shadow-lg transition-all"
              >
                <Twitter size={18} className="text-primary" />
              </motion.a>
              <motion.a 
                href="https://linkedin.com" 
                target="_blank" 
                rel="noopener noreferrer"
                whileHover={{ y: -3 }}
                className="p-2 bg-white dark:bg-[#12091a]/90 rounded-full shadow-md hover:shadow-lg transition-all"
              >
                <Linkedin size={18} className="text-primary" />
              </motion.a>
              <motion.a 
                href="https://instagram.com" 
                target="_blank" 
                rel="noopener noreferrer"
                whileHover={{ y: -3 }}
                className="p-2 bg-white dark:bg-[#12091a]/90 rounded-full shadow-md hover:shadow-lg transition-all"
              >
                <Instagram size={18} className="text-primary" />
              </motion.a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-6">Quick Links</h3>
            <ul className="space-y-4">
              <li>
                <Link href="/" className="text-muted-foreground hover:text-primary transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="#features" className="text-muted-foreground hover:text-primary transition-colors">
                  Features
                </Link>
              </li>
              <li>
                <Link href="#about" className="text-muted-foreground hover:text-primary transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link href="#supported-chains" className="text-muted-foreground hover:text-primary transition-colors">
                  Supported Chains
                </Link>
              </li>
              <li>
                <Link href="/checkout" className="text-muted-foreground hover:text-primary transition-colors">
                  Launch App
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-6">Resources</h3>
            <ul className="space-y-4">
              <li>
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                  Documentation
                </a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                  API Reference
                </a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                  Developer Guide
                </a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                  Blog
                </a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                  FAQ
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-6">Contact</h3>
            <ul className="space-y-4">
              <li className="text-muted-foreground">
                Email: info@coink.com
              </li>
              <li className="text-muted-foreground">
                Support: support@coink.com
              </li>
              <li className="text-muted-foreground">
                Business: business@coink.com
              </li>
              <li className="text-muted-foreground">
                Address: Crypto Valley, Zug, Switzerland
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-border pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} COINK. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <Link href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">
              Privacy Policy
            </Link>
            <Link href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">
              Terms of Service
            </Link>
            <Link href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">
              Cookie Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}; 