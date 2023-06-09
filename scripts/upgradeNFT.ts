import { ethers, upgrades } from "hardhat";

async function main() {
  const MyNFTContractV2 = await ethers.getContractFactory("MyNFTContractV2");
  
  console.log("Upgrading MyNFTContract!!!");
  
  await upgrades.upgradeProxy(
    "0x0DCd1Bf9A1b36cE34237eEaFef220932846BCD82", // deployed proxy address (e.g.: V1)
    MyNFTContractV2
  );

  console.log("MyNFTContractV2 upgraded Successfully");
}

main();