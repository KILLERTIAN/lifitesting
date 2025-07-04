'use client';

import { useEffect, useState } from 'react';
import { LiFiWidget, WidgetConfig } from '@lifi/widget';
import { motion } from 'framer-motion';
import { useTheme } from 'next-themes';

interface CheckoutWidgetProps {
  className?: string;
}

export const CheckoutWidget = ({ className }: CheckoutWidgetProps) => {
  // Detect system theme
  const { theme, systemTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  
  // Wait for component to mount to avoid hydration mismatch
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const currentTheme = theme === 'system' ? systemTheme : theme;
  const isDarkTheme = currentTheme === 'dark';

  const widgetConfig: WidgetConfig = {
    // It can be either compact, wide, or drawer
    variant: 'wide',
    integrator: 'COINK',
    chains: {
      allow: [
        1, 137, 42161, 10, 56, 43114, 250, 100, 8453, 
        324, 59144, 1101
      ],
    },
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className={`relative w-full max-w-md mx-auto ${className || ''}`}
    >
      <div className="glass-morphism rounded-3xl overflow-hidden">
        <LiFiWidget
          integrator="COINK"
          config={{
            ...widgetConfig,
            appearance: isDarkTheme ? 'dark' : 'light',
            // Use purple theme colors
            theme: {
              palette: {
                primary: isDarkTheme 
                  ? { main: 'hsl(270, 80%, 65%)' } // Brighter purple for dark mode
                  : { main: 'hsl(270, 70%, 60%)' }, // Main purple for light mode
                secondary: isDarkTheme 
                  ? { main: 'hsl(280, 85%, 55%)' } // Brighter secondary for dark mode
                  : { main: 'hsl(280, 75%, 45%)' }, // Secondary purple for light mode
              },
              shape: {
                borderRadius: 16,
                borderRadiusSecondary: 12,
              },
              typography: {
                fontFamily: 'inherit',
              },
              container: {
                boxShadow: 'none',
                border: 'none',
              },
              components: {
                MuiButton: {
                  styleOverrides: {
                    root: {
                      borderRadius: 12,
                      padding: '10px 16px',
                      fontWeight: 600,
                      textTransform: 'none',
                      boxShadow: isDarkTheme 
                        ? '0 4px 12px rgba(142, 81, 234, 0.3)'
                        : '0 4px 12px rgba(142, 81, 234, 0.2)',
                    },
                  },
                },
                MuiCard: {
                  styleOverrides: {
                    root: {
                      borderRadius: 16,
                      background: isDarkTheme 
                        ? 'rgba(18, 9, 26, 0.8)'
                        : 'rgba(255, 255, 255, 0.8)',
                      backdropFilter: 'blur(10px)',
                      border: isDarkTheme 
                        ? '1px solid rgba(255, 255, 255, 0.1)'
                        : '1px solid rgba(255, 255, 255, 0.3)',
                    },
                  },
                },
              },
            },
            // Add more chains for better experience
            chains: {
              allow: [
                1, 137, 42161, 10, 56, 43114, 250, 100, 8453, 
                324, 59144, 1101
              ],
            },
            // Set route priority
            routePriority: "RECOMMENDED",
            // Set default slippage
            slippage: 1,
          }}
        />
      </div>
      
      {/* Decorative elements */}
      <div className="absolute -z-10 -top-10 -right-10 w-40 h-40 bg-primary/10 rounded-full blur-3xl"></div>
      <div className="absolute -z-10 -bottom-10 -left-10 w-40 h-40 bg-secondary/10 rounded-full blur-3xl"></div>
    </motion.div>
  );
}; 