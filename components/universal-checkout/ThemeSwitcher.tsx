'use client';

import { useTheme } from 'next-themes';
import { Sun, Moon } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

export const ThemeSwitcher = () => {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // Wait for component to mount to access theme
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };

  return (
    <Button 
      onClick={toggleTheme}
      variant="ghost" 
      size="icon" 
      className="h-10 w-10 rounded-full bg-white/80 dark:bg-[#12091a]/80 backdrop-blur-sm border border-white/20 dark:border-white/10 shadow-md hover:bg-primary/20 dark:hover:bg-primary/30"
    >
      <motion.div
        animate={{
          scale: 1
        }}
        transition={{ duration: 0.3 }}
        className="relative w-full h-full flex items-center justify-center"
      >
        <Sun className="h-[1.3rem] w-[1.3rem] text-primary absolute transition-all dark:opacity-0" />
        <Moon className="h-[1.3rem] w-[1.3rem] text-primary absolute opacity-0 transition-all dark:opacity-100" />
      </motion.div>
      <span className="sr-only">Toggle theme</span>
    </Button>
  );
}; 