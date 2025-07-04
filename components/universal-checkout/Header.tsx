'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { Globe, Coins, ArrowRightLeft } from 'lucide-react';
import Link from 'next/link';

export const Header = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="text-center mb-10"
    >
      <Link href="/" className="inline-block mb-2 text-muted-foreground hover:text-primary transition-colors">
        ← Back to Home
      </Link>
      
      <div className="relative mb-6 inline-block">
        <motion.div
          animate={{ 
            rotate: [0, 5, 0, -5, 0],
          }}
          transition={{ 
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          <Image 
            src="/coin.png" 
            alt="COINK" 
            width={90} 
            height={90}
            className="mx-auto"
          />
        </motion.div>
        
        <motion.div 
          className="absolute -right-2 -top-2 bg-gradient-to-r from-primary to-secondary rounded-full p-2 shadow-lg"
          animate={{ 
            scale: [1, 1.2, 1],
            rotate: [0, 360],
          }}
          transition={{ 
            scale: {
              duration: 2,
              repeat: Infinity,
              repeatType: "reverse"
            },
            rotate: {
              duration: 10,
              repeat: Infinity,
              ease: "linear"
            }
          }}
        >
          <Globe size={18} className="text-white" />
        </motion.div>
      </div>
      
      <h1 className="text-3xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent mb-3">
        COINK Universal Checkout
      </h1>
      
      <div className="flex items-center justify-center gap-3 mt-2 bg-white/30 dark:bg-[#12091a]/30 backdrop-blur-sm py-2 px-4 rounded-full w-fit mx-auto">
        <Coins size={18} className="text-primary" />
        <p className="text-foreground/80 text-sm font-medium">
          Swap and bridge assets across multiple chains
        </p>
        <ArrowRightLeft size={18} className="text-secondary" />
      </div>
    </motion.div>
  );
}; 