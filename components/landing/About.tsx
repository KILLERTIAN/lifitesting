'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { ArrowRight, Info } from 'lucide-react';
import Link from 'next/link';

export const About = () => {
  return (
    <section id="about" className="py-10 md:py-12 relative">
      {/* Section divider */}
      {/* <div className="section-divider"></div> */}
      
      {/* Background elements */}
      <div className="absolute top-1/3 left-0 w-80 h-80 bg-primary/5 rounded-full blur-3xl -z-10"></div>
      <div className="absolute bottom-1/3 right-0 w-80 h-80 bg-secondary/5 rounded-full blur-3xl -z-10"></div>
      
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left column - Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="relative order-2 lg:order-1"
          >
            <div className="relative z-10 rounded-2xl overflow-hidden">
              <Image 
                src="/hero.png" 
                alt="COINK Platform" 
                width={300} 
                height={300}
                className="w-full h-auto object-contain"
              />
            </div>
            
            {/* Floating elements */}
            <motion.div
              className="absolute -top-8 -right-8 bg-white dark:bg-[#12091a]/90 rounded-xl p-4 shadow-lg backdrop-blur-sm border border-white/20 dark:border-white/10 floating-element-slow"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3, duration: 0.5 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center gap-3">
                <div className="w-3 h-3 rounded-full bg-primary"></div>
                <span className="text-sm font-medium">Trusted by thousands</span>
              </div>
            </motion.div>
            
            <motion.div
              className="absolute -bottom-8 -left-8 bg-white dark:bg-[#12091a]/90 rounded-xl p-4 shadow-lg backdrop-blur-sm border border-white/20 dark:border-white/10 floating-element"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.5, duration: 0.5 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center gap-3">
                <div className="w-3 h-3 rounded-full bg-secondary"></div>
                <span className="text-sm font-medium">Simple & Secure</span>
              </div>
            </motion.div>
          </motion.div>
          
          {/* Right column - Text content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="flex flex-col gap-7 order-1 lg:order-2"
          >
            <div className="flex items-center gap-2 mb-2">
              <Info className="text-primary h-5 w-5" />
              <span className="text-primary font-medium">About Our Platform</span>
            </div>
            
            <h2 className="text-3xl md:text-4xl font-bold">
              <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                About COINK
              </span>
            </h2>
            
            <p className="text-lg text-muted-foreground">
              COINK was created to solve the complexity of cross-chain transactions in the cryptocurrency world. 
              Our mission is to make crypto accessible to everyone, regardless of their technical knowledge.
            </p>
            
            <div className="space-y-6 mt-2">
              <motion.div 
                className="flex items-start gap-4"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                viewport={{ once: true }}
              >
                <div className="bg-gradient-to-br from-primary to-secondary w-10 h-10 flex items-center justify-center rounded-full mt-1 flex-shrink-0">
                  <span className="text-white font-bold">1</span>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Simplified User Experience</h3>
                  <p className="text-muted-foreground">
                    We&apos;ve removed all the technical jargon and complex processes, making crypto transactions as simple as traditional online payments.
                  </p>
                </div>
              </motion.div>
              
              <motion.div 
                className="flex items-start gap-4"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <div className="bg-gradient-to-br from-primary to-secondary w-10 h-10 flex items-center justify-center rounded-full mt-1 flex-shrink-0">
                  <span className="text-white font-bold">2</span>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Automatic Routing</h3>
                  <p className="text-muted-foreground">
                    Our smart routing technology automatically finds the best path for your transaction across multiple chains and exchanges.
                  </p>
                </div>
              </motion.div>
              
              <motion.div 
                className="flex items-start gap-4"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                viewport={{ once: true }}
              >
                <div className="bg-gradient-to-br from-primary to-secondary w-10 h-10 flex items-center justify-center rounded-full mt-1 flex-shrink-0">
                  <span className="text-white font-bold">3</span>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Transparent Fees</h3>
                  <p className="text-muted-foreground">
                    We believe in full transparency. All fees are clearly displayed before you confirm any transaction.
                  </p>
                </div>
              </motion.div>
            </div>
            
            <div className="mt-6">
              <Link href="/checkout">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="purple-glow bg-gradient-to-r from-primary to-secondary text-white font-medium py-3.5 px-7 rounded-lg flex items-center gap-2"
                >
                  Try COINK Now <ArrowRight size={16} />
                </motion.button>
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}; 