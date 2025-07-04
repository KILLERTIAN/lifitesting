import { createConfig, http, cookieStorage, createStorage } from "wagmi";
import {
  mainnet, 
  polygon, 
  optimism, 
  arbitrum, 
  base, 
  bsc,
  avalanche,
  linea,
  zkSync,
  polygonZkEvm,
  lineaSepolia
} from "wagmi/chains";
import { metaMask } from "wagmi/connectors";

export function getConfig() {
  return createConfig({
    chains: [
      mainnet, 
      polygon, 
      optimism, 
      arbitrum, 
      base, 
      bsc, 
      avalanche, 
      linea, 
      zkSync, 
      polygonZkEvm,
      lineaSepolia
    ],
    connectors: [metaMask()],
    ssr: true,
    storage: createStorage({
      storage: cookieStorage,
    }),
    transports: {
      [mainnet.id]: http(),
      [polygon.id]: http(),
      [optimism.id]: http(),
      [arbitrum.id]: http(),
      [base.id]: http(),
      [bsc.id]: http(),
      [avalanche.id]: http(),
      [linea.id]: http(),
      [zkSync.id]: http(),
      [polygonZkEvm.id]: http(),
      [lineaSepolia.id]: http(),
    },
  });
}
