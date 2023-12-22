import modeLogo from '../svg/mode-logo.png';
import { AddrMapType, MapType } from './types';

export const networkIcons: MapType = {
  919: modeLogo,
  34443: modeLogo
}

export const stealthAddress: AddrMapType = {
  0: '0x0',
  // Deployed StealthAddress Contract on Mode Sepolia Testnet
  919: '0xaeA34592a4cCE8059F2C600f4A6CF4774ffCb6BE',
  34443: '0xaeA34592a4cCE8059F2C600f4A6CF4774ffCb6BE'
}

export const explorer: MapType = {
  919: 'sepolia.explorer.mode.network',
  34443: 'explorer.mode.network/'
}