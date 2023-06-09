import { ethers, upgrades } from "hardhat";

async function main() {
  const MyERC20ContractV2 = await ethers.getContractFactory("MyERC20ContractV2");
  
  console.log("Upgrading MyERC20 V2 Contract!!!");
  
  await upgrades.upgradeProxy(
    "0xf0E86d8b435Dbd636e7f260928Cec4E31DC2aC75", // deployed proxy address (e.g.: V1)
    MyERC20ContractV2
  );

  console.log("MyERC20ContractV2 upgraded Successfully");
}

main();