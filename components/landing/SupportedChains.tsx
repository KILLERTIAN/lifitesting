'use client';

import { motion } from 'framer-motion';
import { Globe } from 'lucide-react';
import { Marquee } from "@/components/magicui/marquee";

// Chain logos represented by simple colored circles with abbreviations
const chains = [
  { name: "Ethereum", color: "#627EEA", abbr: "ETH" },
  { name: "Polygon", color: "#8247E5", abbr: "MATIC" },
  { name: "Arbitrum", color: "#28A0F0", abbr: "ARB" },
  { name: "Optimism", color: "#FF0420", abbr: "OP" },
  { name: "Binance Smart Chain", color: "#F3BA2F", abbr: "BSC" },
  { name: "Avalanche", color: "#E84142", abbr: "AVAX" },
  { name: "Base", color: "#0052FF", abbr: "BASE" },
  { name: "zkSync Era", color: "#8C8DFC", abbr: "ZK" },
  { name: "Linea", color: "#121212", abbr: "LINEA" },
  { name: "Polygon zkEVM", color: "#7B3FE4", abbr: "zkEVM" },
  { name: "Fantom", color: "#1969FF", abbr: "FTM" },
  { name: "Gnosis", color: "#3e6957", abbr: "GNO" },
];

export const SupportedChains = () => {
  return (
    <section id="supported-chains" className="py-16 md:py-20 relative">
      {/* Section divider */}
      <div className="section-divider"></div>
      
      {/* Background elements */}
      <div className="absolute top-1/4 left-0 w-80 h-80 bg-primary/5 rounded-full blur-3xl -z-10"></div>
      <div className="absolute bottom-1/4 right-0 w-80 h-80 bg-secondary/5 rounded-full blur-3xl -z-10"></div>
      
      <div className="container mx-auto px-6">
        <div className="text-center mb-12 md:mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="flex items-center justify-center gap-2 mb-4"
          >
            <Globe className="text-primary h-5 w-5" />
            <span className="text-primary font-medium">Multi-Chain Support</span>
            <Globe className="text-primary h-5 w-5" />
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold mb-6"
          >
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Supported Chains
            </span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="text-muted-foreground max-w-2xl mx-auto"
          >
            COINK supports a wide range of blockchain networks, allowing you to seamlessly transact across the entire crypto ecosystem.
          </motion.p>
        </div>

        {/* First row of chains with marquee */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-8"
        >
          <Marquee className="py-4" pauseOnHover>
            {chains.slice(0, 6).map((chain, index) => (
              <div 
                key={`chain-1-${index}`}
                className="mx-4 flex flex-col items-center justify-center p-4 bg-white/50 dark:bg-[#12091a]/50 backdrop-blur-sm rounded-2xl border border-white/20 dark:border-white/10 shadow-lg cursor-pointer hover:shadow-xl transition-all hover:-translate-y-1 duration-300"
              >
                <div 
                  className="w-16 h-16 rounded-full flex items-center justify-center text-white font-bold text-lg mb-3 shadow-md"
                  style={{ backgroundColor: chain.color }}
                >
                  {chain.abbr}
                </div>
                <h3 className="text-center font-medium">{chain.name}</h3>
              </div>
            ))}
          </Marquee>
        </motion.div>

        {/* Second row of chains with marquee in opposite direction */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="mb-8"
        >
          <Marquee className="py-4" reverse pauseOnHover>
            {chains.slice(6).map((chain, index) => (
              <div 
                key={`chain-2-${index}`}
                className="mx-4 flex flex-col items-center justify-center p-4 bg-white/50 dark:bg-[#12091a]/50 backdrop-blur-sm rounded-2xl border border-white/20 dark:border-white/10 shadow-lg cursor-pointer hover:shadow-xl transition-all hover:-translate-y-1 duration-300"
              >
                <div 
                  className="w-16 h-16 rounded-full flex items-center justify-center text-white font-bold text-lg mb-3 shadow-md"
                  style={{ backgroundColor: chain.color }}
                >
                  {chain.abbr}
                </div>
                <h3 className="text-center font-medium">{chain.name}</h3>
              </div>
            ))}
          </Marquee>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <p className="text-muted-foreground">
            More chains are being added regularly to expand our ecosystem.
          </p>
          
          {/* Decorative element */}
          <div className="flex justify-center mt-8">
            <motion.div 
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="w-20 h-1 bg-gradient-to-r from-primary/50 to-secondary/50 rounded-full"
            ></motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}; 