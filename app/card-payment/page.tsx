"use client";

import { LiFiWidget, WidgetDrawer } from '@lifi/widget';
import { useRef } from 'react';
import { useTheme } from 'next-themes';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowLeft } from 'lucide-react';
import Link from 'next/link';

export default function CardPaymentPage() {
  const drawerRef = useRef<WidgetDrawer>(null);
  const { theme, systemTheme } = useTheme();
  const currentTheme = theme === 'system' ? systemTheme : theme;
  const isDarkTheme = currentTheme === 'dark';

  const toggleWidget = () => {
    drawerRef.current?.toggleDrawer();
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-background/90">
      {/* Header */}
      <header className="border-b border-border/40 backdrop-blur-sm bg-background/50 fixed top-0 left-0 right-0 z-50">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
          <Link href="/checkout" className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors">
            <ArrowLeft size={16} />
            <span>Back to Checkout</span>
          </Link>
          <div className="flex items-center gap-2">
            <span className="font-medium">LiFi Drawer Test</span>
          </div>
          <div className="w-24"></div> {/* Spacer for centering */}
        </div>
      </header>

      <main className="pt-24 pb-16 container mx-auto px-4">
        <div className="max-w-2xl mx-auto">
          <Card className="mb-8">
            <CardHeader>
              <CardTitle>LiFi Widget Drawer Testing</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="flex flex-col items-center gap-4">
                <Button 
                  onClick={toggleWidget}
                  className="w-full max-w-xs"
                >
                  Open LiFi Widget Drawer
                </Button>
                
                <p className="text-sm text-muted-foreground text-center max-w-md">
                  Click the button above to open the LiFi widget in a drawer format. 
                  The widget will handle wallet connection automatically.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
      
      <LiFiWidget
        ref={drawerRef}
        integrator="COINK"
        config={{
          variant: 'drawer',
          appearance: isDarkTheme ? 'dark' : 'light',
          theme: {
            palette: {
              primary: isDarkTheme 
                ? { main: 'hsl(270, 80%, 65%)' } 
                : { main: 'hsl(270, 70%, 60%)' },
              secondary: isDarkTheme 
                ? { main: 'hsl(280, 85%, 55%)' } 
                : { main: 'hsl(280, 75%, 45%)' },
            },
            shape: {
              borderRadius: 16,
              borderRadiusSecondary: 12,
            },
            typography: {
              fontFamily: 'inherit',
            },
          },
          chains: {
            allow: [
              1, 137, 42161, 10, 56, 43114, 250, 100, 8453, 
              324, 59144, 1101
            ],
          },
        }}
      />
    </div>
  );
}