'use client';

import { motion } from 'framer-motion';
import { ArrowRight, Sparkles } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

export const CTA = () => {
  return (
    <section className="py-10 md:py-12 relative">
      {/* Section divider */}
      <div className="section-divider"></div>
      
      <div className="container mx-auto px-6">
        <div className="relative bg-gradient-to-r from-primary/10 to-secondary/10 rounded-3xl p-10 md:p-16 overflow-hidden">
          {/* Background glow effects */}
          <div className="absolute top-0 left-0 w-80 h-80 bg-primary/20 rounded-full blur-[100px] -z-10 animate-pulse"></div>
          <div className="absolute bottom-0 right-0 w-80 h-80 bg-secondary/20 rounded-full blur-[100px] -z-10 animate-pulse" style={{ animationDelay: '1s' }}></div>
          
          {/* Floating coins */}
          <motion.div 
            className="absolute top-10 right-10 w-12 h-12 opacity-20 floating-element-slow hidden md:block"
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.2 }}
            transition={{ delay: 0.5, duration: 1 }}
          >
            <Image 
              src="/coin.png" 
              alt="Floating coin" 
              width={48} 
              height={48} 
              className="w-full h-full object-contain"
            />
          </motion.div>
          
          <motion.div 
            className="absolute bottom-10 left-10 w-8 h-8 opacity-20 floating-element hidden md:block"
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.2 }}
            transition={{ delay: 0.8, duration: 1 }}
          >
            <Image 
              src="/coin.png" 
              alt="Floating coin" 
              width={32} 
              height={32} 
              className="w-full h-full object-contain"
            />
          </motion.div>
          
          <div className="max-w-3xl mx-auto text-center relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="flex items-center justify-center gap-2 mb-6"
            >
              <Sparkles className="text-primary h-5 w-5" />
              <span className="text-primary font-medium">Get Started Today</span>
              <Sparkles className="text-primary h-5 w-5" />
            </motion.div>
            
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="text-3xl md:text-4xl font-bold mb-6"
            >
              Ready to Experience Seamless
              <br />
              <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                Cross-Chain Transactions?
              </span>
            </motion.h2>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-lg text-muted-foreground mb-10"
            >
              Join thousands of users who are already enjoying the simplicity and efficiency of COINK. 
              No more complex bridging processes or confusing interfaces.
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
              className="flex flex-col sm:flex-row gap-5 justify-center"
            >
              <Link href="/checkout">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="purple-glow bg-gradient-to-r from-primary to-secondary text-white font-medium py-3.5 px-8 rounded-lg flex items-center justify-center gap-2"
                >
                  Launch App <ArrowRight size={16} />
                </motion.button>
              </Link>
              
              <Link href="#features">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-white dark:bg-[#12091a]/90 border border-primary/30 text-foreground font-medium py-3.5 px-8 rounded-lg shadow-lg hover:bg-primary/5 transition-colors flex items-center justify-center gap-2"
                >
                  Learn More
                </motion.button>
              </Link>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}; 