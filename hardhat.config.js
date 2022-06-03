require("@nomiclabs/hardhat-ethers");
require('@openzeppelin/hardhat-upgrades');
require("@nomiclabs/hardhat-etherscan");
require('dotenv').config();

/**
 * @type import('hardhat/config').HardhatUserConfig
 */
module.exports = {
  //solidity: "0.8.4"

  defaultNetwork: 'hardhat',

  networks: {
    localhost: {
      url: 'http://127.0.0.1:8545/',
      chainId: 31337
    },
    polygonMumbai: {
      url: 'https://polygon-mumbai.g.alchemy.com/v2/' + process.env.ALCHEMY_API_KEY_MUMBAI,
      chainId: 80001,
      accounts: [process.env.DEPLOYER_PRIVATE_KEY],
      gas: "auto", // gas limit
      gasPrice: 3000000000, // 3 gwei
    },
  },

  etherscan: {
    apiKey: {
      polygonMumbai: process.env.POLYGONSCAN_API_KEY,
      polygon: process.env.POLYGONSCAN_API_KEY,
      optimisticKovan: process.env.OPTIMISTIC_ETHERSCAN_API_KEY,
      optimisticEthereum: process.env.OPTIMISTIC_ETHERSCAN_API_KEY,
      arbitrumTestnet: process.env.ARBISCAN_API_KEY,
      arbitrumOne: process.env.ARBISCAN_API_KEY,
      sokol: "randomstring",
      xdai: "randomstring"
    }
  },

  solidity: {
    version: "0.8.4",
    settings: {
      optimizer: {
        enabled: true,
        runs: 200
      }
    }
  }
};
