'use client';

import { motion } from 'framer-motion';
import { Header } from './Header';
import { CheckoutWidget } from './CheckoutWidget';
import { UniversalNavbar } from '../universal-navbar/UniversalNavbar';

export const UniversalCheckout = () => {
  const handleConnectWallet = () => {
    alert('Connecting wallet... In a real implementation, this would open your wallet connection modal.');
    // This function would be passed to both the navbar and the LiFi widget
  };

  return (
    <div className="relative min-h-screen w-full overflow-hidden">
      {/* Background gradient */}
      <div className="fixed inset-0 gradient-bg -z-10"></div>
      {/* Noise overlay */}
      <div className="fixed inset-0 noise-bg -z-10"></div>
      
      {/* Animated background elements */}
      <div className="fixed top-0 left-0 w-96 h-96 bg-primary/10 rounded-full blur-[100px] -z-5 animate-pulse"></div>
      <div className="fixed bottom-0 right-0 w-96 h-96 bg-secondary/10 rounded-full blur-[100px] -z-5 animate-pulse" style={{ animationDelay: '1s' }}></div>
      
      {/* Animated particles */}
      <div className="fixed inset-0 -z-5">
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 rounded-full bg-primary/30"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: i * 0.5,
            }}
          />
        ))}
      </div>

      {/* Universal Navbar */}
      <UniversalNavbar 
        transparent={false}
        navItems={[
          { label: "Home", href: "/" },
          { label: "Documentation", href: "#" },
          { label: "Support", href: "#" },
        ]}
        ctaButton={{ 
          label: "Connect Wallet", 
          onClick: handleConnectWallet 
        }}
      />

      <div className="container mx-auto px-4 sm:px-6 pt-24 pb-12">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col items-center"
        >
          <Header />
          
          {/* Always use max-w-3xl for wide variant */}
          <div className="w-full mx-auto max-w-3xl">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="glass-morphism p-1 rounded-3xl overflow-hidden shadow-xl purple-glow"
            >
              <CheckoutWidget />
            </motion.div>
          </div>
          
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 0.5 }}
            className="mt-10 text-center max-w-md mx-auto"
          >
            <h3 className="text-lg font-medium mb-3">How It Works</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="bg-white/30 dark:bg-[#12091a]/30 backdrop-blur-sm p-4 rounded-xl">
                <div className="w-8 h-8 bg-primary/20 rounded-full flex items-center justify-center mb-2 mx-auto">
                  <span className="font-bold">1</span>
                </div>
                <p className="text-sm text-center">Connect your wallet</p>
              </div>
              <div className="bg-white/30 dark:bg-[#12091a]/30 backdrop-blur-sm p-4 rounded-xl">
                <div className="w-8 h-8 bg-primary/20 rounded-full flex items-center justify-center mb-2 mx-auto">
                  <span className="font-bold">2</span>
                </div>
                <p className="text-sm text-center">Select tokens to swap</p>
              </div>
              <div className="bg-white/30 dark:bg-[#12091a]/30 backdrop-blur-sm p-4 rounded-xl">
                <div className="w-8 h-8 bg-primary/20 rounded-full flex items-center justify-center mb-2 mx-auto">
                  <span className="font-bold">3</span>
                </div>
                <p className="text-sm text-center">Confirm transaction</p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}; 