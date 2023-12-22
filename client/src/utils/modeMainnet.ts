import { Chain } from 'wagmi'

export const modeMainnet = {
  id: 34443,
  name: 'Mode Mainnet',
  network: 'mode-mainnet',
  nativeCurrency: {
    decimals: 18,
    name: 'Ethereum',
    symbol: 'ETH',
  },
  rpcUrls: {
    default: { http: ['https://mainnet.mode.network/'] },
    public: { http: ['https://mainnet.mode.network/'] },
  },
  blockExplorers: {
    default: {
      name: 'Mode Mainnet Explorer',
      url: 'https://explorer.mode.network/',
    },
  },
} as const satisfies Chain