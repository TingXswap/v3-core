import 'hardhat-typechain'
import '@nomiclabs/hardhat-ethers'
import '@nomiclabs/hardhat-waffle'
import '@nomiclabs/hardhat-etherscan'
// @ts-ignore
import * as dotenv from 'dotenv'
dotenv.config()
export default {
  networks: {
    hardhat: {
      allowUnlimitedContractSize: false,
    },
    hale: {
      url: `https://testnet-rpc.helachain.com/`,
      accounts: [`${process.env.PRIVATE_KEY}`],
    },
    hela: {
      url: `https://mainnet-rpc.helachain.com/`,
      accounts: [`${process.env.PRIVATE_KEY}`],
    },
    bnb: {
      url: `https://bsc-dataseed.binance.org/`,
    },
  },
  etherscan: {
    // Your API key for Etherscan
    // Obtain one at https://etherscan.io/
    apiKey: process.env.ETHERSCAN_API_KEY,
  },
  solidity: {
    version: '0.7.6',
    settings: {
      optimizer: {
        enabled: true,
        runs: 800,
      },
      metadata: {
        // do not include the metadata hash, since this is machine dependent
        // and we want all generated code to be deterministic
        // https://docs.soliditylang.org/en/v0.7.6/metadata.html
        bytecodeHash: 'none',
      },
    },
  },
}
