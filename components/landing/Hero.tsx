"use client";

import Image from "next/image";
import dynamic from 'next/dynamic';
import { 
  ArrowRight, 
  Repeat, 
  Play,
  Sparkles,
  Wallet,
  Shield,
  Coins,
  Zap,
  Globe,
  Layers
} from "lucide-react";
import { Button } from "@/components/ui/button";

const MotionDiv = dynamic(
  () => import('framer-motion').then((mod) => mod.motion.div),
  { ssr: false }
);

export function Hero() {
  return (
    <div className="relative w-full min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-purple-50 via-white to-purple-50 dark:from-purple-950/20 dark:via-[#12091a] dark:to-purple-950/20 pt-20 pb-16 md:pt-24 md:pb-20">
      <div className="absolute h-full min-h-[90vh] inset-0 overflow-hidden py-10 md:py-16">
        {/* Floating elements */}
        <MotionDiv
          animate={{ 
            y: [0, -20, 0],
            rotate: [0, 5, 0]
          }}
          transition={{ 
            duration: 6, 
            repeat: Infinity, 
            ease: "easeInOut" 
          }}
          className="absolute top-20 left-[5%] md:left-20 w-10 h-10 md:w-16 md:h-16 text-purple-500 dark:text-purple-400 opacity-70"
        >
          <Coins className="w-full h-full drop-shadow-lg" />
        </MotionDiv>

        <MotionDiv
          animate={{ 
            y: [0, 20, 0],
            rotate: [0, -5, 0]
          }}
          transition={{ 
            duration: 8, 
            repeat: Infinity, 
            ease: "easeInOut",
            delay: 2
          }}
          className="absolute top-20 right-[5%] md:right-32 w-8 h-8 md:w-14 md:h-14 text-purple-500 dark:text-purple-400 opacity-70"
        >
          <Globe className="w-full h-full drop-shadow-lg" />
        </MotionDiv>

        <MotionDiv
          animate={{ 
            y: [0, -15, 0],
            rotate: [0, 10, 0]
          }}
          transition={{ 
            duration: 7, 
            repeat: Infinity, 
            ease: "easeInOut",
            delay: 1
          }}
          className="absolute bottom-40 right-[15%] md:right-40 w-8 h-8 md:w-14 md:h-14 text-purple-500 dark:text-purple-400 opacity-70"
        >
          <Wallet className="w-full h-full drop-shadow-lg" />
        </MotionDiv>

        <MotionDiv
          animate={{ 
            y: [0, 15, 0],
            rotate: [0, -8, 0]
          }}
          transition={{ 
            duration: 9, 
            repeat: Infinity, 
            ease: "easeInOut",
            delay: 0.5
          }}
          className="absolute top-[35%] left-[50%] w-8 h-8 md:w-12 md:h-12 text-purple-500 dark:text-purple-400 opacity-70"
        >
          <Sparkles className="w-full h-full drop-shadow-lg" />
        </MotionDiv>

        <MotionDiv
          animate={{ 
            y: [0, -10, 0],
            rotate: [0, 5, 0]
          }}
          transition={{ 
            duration: 6, 
            repeat: Infinity, 
            ease: "easeInOut",
            delay: 3
          }}
          className="absolute bottom-[20%] left-[4%] w-8 h-8 md:w-12 md:h-12 text-purple-500 dark:text-purple-400 opacity-70"
        >
          <Layers className="w-full h-full drop-shadow-lg" />
        </MotionDiv>

        {/* Glowing background elements */}
        <MotionDiv
          animate={{ 
            scale: [1, 1.2, 1],
            opacity: [0.4, 0.7, 0.4]
          }}
          transition={{ 
            duration: 4, 
            repeat: Infinity, 
            ease: "easeInOut" 
          }}
          className="absolute bottom-32 left-1/4 w-16 h-16 md:w-20 md:h-20 bg-gradient-to-br from-purple-300 to-purple-500 dark:from-purple-700 dark:to-purple-500 rounded-full blur-xl"
        />

        <MotionDiv
          animate={{ 
            scale: [1, 1.1, 1],
            opacity: [0.3, 0.6, 0.3]
          }}
          transition={{ 
            duration: 5, 
            repeat: Infinity, 
            ease: "easeInOut",
            delay: 1
          }}
          className="absolute top-1/2 right-1/4 w-20 h-20 md:w-24 md:h-24 bg-gradient-to-br from-purple-300 to-purple-500 dark:from-purple-700 dark:to-purple-500 rounded-full blur-xl"
        />

        <MotionDiv
          animate={{ 
            scale: [1, 1.15, 1],
            opacity: [0.3, 0.5, 0.3]
          }}
          transition={{ 
            duration: 6, 
            repeat: Infinity, 
            ease: "easeInOut",
            delay: 2
          }}
          className="absolute top-1/3 left-1/3 w-24 h-24 md:w-28 md:h-28 bg-gradient-to-br from-purple-300 to-purple-500 dark:from-purple-700 dark:to-purple-500 rounded-full blur-xl"
        />
      </div>
      <div className="relative z-10 w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-16 items-center">
          {/* Left Content */}
          <MotionDiv
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="space-y-6 md:space-y-8 order-2 lg:order-1"
          >
            {/* Main Title */}
            <MotionDiv
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 dark:text-gray-100 leading-tight"
            >
              <span className="text-gray-800 dark:text-gray-100">Universal</span>
              <br />
              <span className="bg-gradient-to-r from-purple-500 to-purple-600 dark:from-purple-400 dark:to-purple-500 bg-clip-text text-transparent drop-shadow-sm">
                Checkout
              </span>
            </MotionDiv>

            {/* Subtitle */}
            <MotionDiv
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="text-lg sm:text-xl md:text-2xl text-gray-600 dark:text-gray-300 leading-relaxed"
            >
              The seamless cross-chain cryptocurrency checkout solution for your digital transactions.
              <span className="font-semibold text-purple-600 dark:text-purple-400"> Fast, secure, and effortless.</span>
            </MotionDiv>

            {/* Key Features */}
            <MotionDiv
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="grid grid-cols-1 sm:grid-cols-2 gap-5 md:gap-6 pt-2"
            >
              {[
                { icon: Sparkles, text: "Cross-Chain Swaps", color: "from-purple-400 to-purple-600", iconColor: "text-white" },
                { icon: Repeat, text: "Bridge Any Token", color: "from-purple-400 to-purple-600", iconColor: "text-white" },
                { icon: Zap, text: "Lightning Fast", color: "from-purple-400 to-purple-600", iconColor: "text-white" },
                { icon: Shield, text: "Secure Transactions", color: "from-purple-400 to-purple-600", iconColor: "text-white" }
              ].map((feature, index) => (
                <MotionDiv
                  key={feature.text}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 1.0 + index * 0.1 }}
                  className="flex items-center gap-3 md:gap-4 text-gray-700 dark:text-gray-200 group"
                >
                  <div className={`w-10 h-10 md:w-12 md:h-12 rounded-xl bg-gradient-to-br ${feature.color} flex items-center justify-center shadow-md group-hover:shadow-lg group-hover:scale-110 transition-all`}>
                    <feature.icon className={`w-5 h-5 md:w-6 md:h-6 ${feature.iconColor}`} />
                  </div>
                  <span className="font-medium text-sm md:text-base lg:text-lg">{feature.text}</span>
                </MotionDiv>
              ))}
            </MotionDiv>

            {/* CTA Buttons */}
            <MotionDiv
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.2 }}
              className="flex flex-col sm:flex-row gap-4 pt-4 md:pt-6"
            >
              <Button 
                size="lg" 
                className="ios-button text-base md:text-lg px-6 py-5 md:px-8 md:py-6 bg-gradient-to-r from-purple-400 to-purple-500 hover:from-purple-500 hover:to-purple-600 dark:from-purple-500 dark:to-purple-600 dark:hover:from-purple-600 dark:hover:to-purple-700 shadow-lg transform hover:scale-105 transition-transform duration-300 text-white"
              >
                <Play className="w-4 h-4 md:w-5 md:h-5 mr-2" />
                Try Demo
                <ArrowRight className="w-4 h-4 md:w-5 md:h-5 ml-2" />
              </Button>
              <Button 
                size="lg" 
                className="ios-button-secondary text-base md:text-lg px-6 py-5 md:px-8 md:py-6 text-purple-700 dark:text-purple-300 bg-white/30 dark:bg-white/10 backdrop-blur-lg border border-purple-200 dark:border-purple-800 shadow-lg transform hover:scale-105 transition-transform duration-300"
              >
                <Wallet className="w-4 h-4 md:w-5 md:h-5 mr-2" />
                Connect Wallet
              </Button>
            </MotionDiv>
          </MotionDiv>

          {/* Right Content - Coin Showcase */}
          <MotionDiv
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="relative min-h-[300px] md:min-h-[400px] lg:min-h-[500px] flex items-center justify-center order-1 lg:order-2"
          >
            {/* Coin image */}
            <div className="relative w-full h-full flex items-center justify-center">
              <MotionDiv
                animate={{ 
                  rotate: [0, 360],
                  y: [0, -15, 0]
                }}
                transition={{ 
                  rotate: { duration: 20, repeat: Infinity, ease: "linear" },
                  y: { duration: 6, repeat: Infinity, ease: "easeInOut" }
                }}
                className="w-full h-full max-w-[70%] md:max-w-[80%] relative z-10"
              >
                <Image 
                  src="/coin.png" 
                  alt="COINK Coin" 
                  width={500}
                  height={500}
                  priority
                  className="object-contain w-full h-full drop-shadow-2xl"
                />
              </MotionDiv>
            </div>

            {/* Coin Glow Effect */}
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[90%] h-[90%] bg-gradient-to-r from-purple-400/30 to-purple-600/30 dark:from-purple-500/40 dark:to-purple-700/40 filter blur-2xl opacity-80 -z-10 animate-pulse"></div>
          </MotionDiv>
        </div>
      </div>
    </div>
  );
} 