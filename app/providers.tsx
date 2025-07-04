"use client";

import { ThemeProvider } from "@/app/theme-provider";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { createConfig, WagmiProvider } from 'wagmi';
import { mainnet, polygon, arbitrum, optimism, bsc, avalanche, fantom, gnosis, base } from 'wagmi/chains';
import { createClient, http } from 'viem';
import { injected } from '@wagmi/connectors';
import { ReactNode, useState } from "react";

// Configure chains and providers
const config = createConfig({
  chains: [mainnet, polygon, arbitrum, optimism, bsc, avalanche, fantom, gnosis, base],
  connectors: [injected()],
  client({ chain }) {
    return createClient({ chain, transport: http() });
  },
  ssr: true,
});

export function Providers({ children }: { children: ReactNode }) {
  const [queryClient] = useState(() => new QueryClient());

  return (
    <WagmiProvider config={config} reconnectOnMount={false}>
      <QueryClientProvider client={queryClient}>
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </QueryClientProvider>
    </WagmiProvider>
  );
}
