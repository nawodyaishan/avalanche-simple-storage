// import { HardhatUserConfig } from 'hardhat/config';
// import '@nomiclabs/hardhat-waffle';
// import '@nomiclabs/hardhat-ethers';
// import 'dotenv/config';
//
// const config: HardhatUserConfig = {
//   solidity: '0.8.0',
//   networks: {
//     hardhat: {
//       chainId: 31337,
//     },
//   },
//   mocha: {
//     timeout: 20000,
//   },
// };
//
// export default config;

import {HardhatUserConfig} from 'hardhat/config';
import '@nomiclabs/hardhat-waffle';
import '@nomiclabs/hardhat-ethers'; // Add this line
import 'dotenv/config';

const config: HardhatUserConfig = {
    solidity: '0.8.0',
    networks: {
        hardhat: {
            chainId: 31337,
        },
        fuji: {
            url: "https://api.avax-test.network/ext/bc/C/rpc",
            chainId: 43113,
            gasPrice: 225000000000,
            accounts: [process.env.PRIVATE_KEY || ""],
        },
    },
    mocha: {
        timeout: 20000,
    },
};

export default config;