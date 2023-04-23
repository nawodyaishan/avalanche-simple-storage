import {HardhatUserConfig} from 'hardhat/config';
import '@nomiclabs/hardhat-waffle';
import '@nomiclabs/hardhat-ethers';
import 'dotenv/config';

const config: HardhatUserConfig = {
  solidity: '0.8.0',
  networks: {
    hardhat: {
      chainId: 31337,
    },
  },
  mocha: {
    timeout: 20000,
  },
};

export default config;
