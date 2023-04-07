const hre = require("hardhat");

async function main() {
  const LuluToken = await hre.ethers.getContractFactory("LuluToken")
  const luluToken = await LuluToken.deploy(1000000,50)

  await luluToken.deployed();

  console.log("LuluToken deployed:", luluToken.address);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
