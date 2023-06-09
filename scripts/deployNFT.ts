import { ethers, upgrades } from "hardhat";

async function main() {
  // const lockedAmount = ethers.utils.parseEther("0.001");

  const MyNFTContract = await ethers.getContractFactory("MyNFTContract");
  const contract = await upgrades.deployProxy(
    MyNFTContract, 
    [99], 
    {
      initializer: "initialize",
      kind: "transparent",
    }
  );

  await contract.deployed();

  console.log(
    `MyNFTContract : ${contract.address}`
  );
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
