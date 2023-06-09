import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";
import "@openzeppelin/hardhat-upgrades";

const fs = require('fs');
const mnemonic = fs.readFileSync(".secret").toString().trim();
const infuraProjectID = fs.readFileSync(".infura").toString().trim();

const config: HardhatUserConfig = {
  solidity: "0.8.18",
  networks: {
    sepolia: {
      url: `https://sepolia.infura.io/v3/${infuraProjectID}`,
      accounts: {
        mnemonic,
        path: "m/44'/60'/0'/0", // BIP44 specification. await ethers.utils.getAccountPath(0).
        initialIndex: 2,  // <- account index from metamask
        count: 20,
      },
    },
  }
};

export default config;
