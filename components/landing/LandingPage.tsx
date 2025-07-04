'use client';

import { Hero } from './Hero';
import { Features } from './Features';
import { About } from './About';
import { SupportedChains } from './SupportedChains';
import { CTA } from './CTA';
import { Footer } from './Footer';
import { UniversalNavbar } from '../universal-navbar/UniversalNavbar';

export const LandingPage = () => {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-hidden">
      <UniversalNavbar 
        navItems={[
          { label: "Features", href: "#features" },
          { label: "About", href: "#about" },
          { label: "Chains", href: "#supported-chains" },
        ]}
        ctaButton={{ label: "Launch App", href: "/checkout" }}
      />
      <main className="flex flex-col">
        <Hero />
        <div id="features">
          <Features />
        </div>
        <div id="about">
          <About />
        </div>
        <SupportedChains />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}; 