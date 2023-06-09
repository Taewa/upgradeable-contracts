import { ethers, upgrades } from "hardhat";

async function main() {
  const MyNFTContractV2 = await ethers.getContractFactory("MyNFTContractV2");
  
  console.log("Upgrading MyNFTContract!!!");
  
  await upgrades.upgradeProxy(
    "0x9804c7883Aa5bc1C3AEC842D1006406982d43636", // deployed proxy address (e.g.: V1)
    MyNFTContractV2
  );

  console.log("MyNFTContractV2 upgraded Successfully");
}

main();