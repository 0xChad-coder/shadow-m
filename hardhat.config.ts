import "@nomicfoundation/hardhat-toolbox";
import "@nomiclabs/hardhat-etherscan";
import '@nomiclabs/hardhat-waffle';
import * as dotenv from 'dotenv';
import { HardhatUserConfig } from "hardhat/config";
dotenv.config();

import './tasks/deploy';

const PRIVATE_KEY = process.env.PRIVATE_KEY;

const config: HardhatUserConfig = {
  solidity: {
    version: "0.8.18",
    settings: {
      optimizer: {
        enabled: false,
        //runs: 200
      }
    }
  },
  networks: {
    modeMainnet: {
      url: `https://mainnet.mode.network/`,
      chainId: 34443,
      accounts: [`0x${PRIVATE_KEY}`]
    },
    modeTestnet: {
      url: `https://sepolia.mode.network`,
      chainId: 919,
      accounts: [`0x${PRIVATE_KEY}`]
    },
    coverage: {
      url: 'http://localhost:8555'
    },
    localhost: {
      url: `http://127.0.0.1:8545`,
      chainId: 1337
    },
    hardhat: {
      chainId: 1337,
      gas: "auto",
      gasPrice: "auto",
      initialBaseFeePerGas: 0,
      mining: {
        interval: 1000
      }
    }
  },
  gasReporter: {
    enabled: process.env.REPORT_GAS !== undefined,
    currency: 'USD'
  },
};

export default config;
