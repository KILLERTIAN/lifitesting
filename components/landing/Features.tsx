'use client';

import { motion } from 'framer-motion';
import { 
  Shuffle, 
  Wallet, 
  Globe, 
  Shield, 
  Zap, 
  RefreshCw,
  Sparkles 
} from 'lucide-react';

const features = [
  {
    icon: <Shuffle className="h-6 w-6 text-white" />,
    title: "Seamless Cross-Chain Swaps",
    description: "Exchange assets across different blockchains without understanding the complex bridging mechanics."
  },
  {
    icon: <Wallet className="h-6 w-6 text-white" />,
    title: "Universal Wallet Support",
    description: "Connect with your favorite wallet and start trading immediately with our intuitive interface."
  },
  {
    icon: <Globe className="h-6 w-6 text-white" />,
    title: "Multi-Chain Ecosystem",
    description: "Access assets from Ethereum, Polygon, Arbitrum, Optimism, BSC, and many more networks."
  },
  {
    icon: <Shield className="h-6 w-6 text-white" />,
    title: "Secure Transactions",
    description: "All transactions are secure with industry-standard security protocols and smart contract audits."
  },
  {
    icon: <Zap className="h-6 w-6 text-white" />,
    title: "Lightning Fast Execution",
    description: "Experience rapid transaction processing with optimized routing algorithms."
  },
  {
    icon: <RefreshCw className="h-6 w-6 text-white" />,
    title: "Best Exchange Rates",
    description: "Automatically find the most efficient routes with the best rates across multiple DEXes."
  }
];

export const Features = () => {
  return (
    <section id="features" className="py-10 md:py-12 relative">
      {/* Section divider */}
      <div className="section-divider"></div>
      
      {/* Background elements */}
      <div className="absolute top-0 right-0 w-72 h-72 bg-primary/5 rounded-full blur-3xl -z-10"></div>
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-secondary/5 rounded-full blur-3xl -z-10"></div>
      
      <div className="container mx-auto px-6">
        <div className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="flex items-center justify-center gap-2 mb-4"
          >
            <Sparkles className="text-primary h-5 w-5" />
            <span className="text-primary font-medium">Why Choose COINK</span>
            <Sparkles className="text-primary h-5 w-5" />
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold mb-6"
          >
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Powerful Features
            </span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="text-muted-foreground max-w-2xl mx-auto"
          >
            COINK simplifies crypto transactions with these innovative features designed for both beginners and experts.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
              className="bg-white/50 dark:bg-[#12091a]/50 backdrop-blur-lg rounded-2xl p-8 border border-white/20 dark:border-white/10 shadow-lg hover:shadow-xl transition-all group"
            >
              <div className="bg-gradient-to-br from-primary to-secondary p-4 rounded-xl w-fit mb-6 group-hover:scale-110 transition-transform duration-300">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </motion.div>
          ))}
        </div>
        
        {/* Decorative element */}
        <div className="flex justify-center mt-16">
          <motion.div 
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="w-20 h-1 bg-gradient-to-r from-primary/50 to-secondary/50 rounded-full"
          ></motion.div>
        </div>
      </div>
    </section>
  );
}; 