import { ethers, upgrades } from "hardhat";

async function main() {
  // const lockedAmount = ethers.utils.parseEther("0.001");

  const [deployer] = await ethers.getSigners();

  console.log("1. Deploying contracts with the account:", deployer.address);
  console.log("2. Account balance:", (await deployer.getBalance()).toString());

  // Sepolia::MyERC20Contract:: 0xf0E86d8b435Dbd636e7f260928Cec4E31DC2aC75

  const MyERC20Contract = await ethers.getContractFactory("MyERC20Contract");
  const myERC20Contract = await upgrades.deployProxy(
    MyERC20Contract, 
    [99], 
    {
      initializer: "initialize",
      kind: "transparent",
    }
  );

  await myERC20Contract.deployed();

  console.log(
    `myERC20Contract : ${myERC20Contract.address}`
  );
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
