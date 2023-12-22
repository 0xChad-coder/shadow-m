import { Chain } from 'wagmi'

export const modeTestnet = {
  id: 919,
  name: 'Mode Sepolia',
  network: 'mode-sepolia-testnet',
  nativeCurrency: {
    decimals: 18,
    name: 'Ethereum',
    symbol: 'ETH',
  },
  rpcUrls: {
    default: { http: ['https://sepolia.mode.network'] },
    public: { http: ['https://sepolia.mode.network'] },
  },
  blockExplorers: {
    default: {
      name: 'Mode Sepolia Testnet Explorer',
      url: 'https://sepolia.explorer.mode.network',
    },
  },
} as const satisfies Chain