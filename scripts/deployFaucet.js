const hre = require("hardhat");

async function main() {
  const Faucet = await hre.ethers.getContractFactory("Faucet")
  const faucet = await Faucet.deploy("0x89915dDcbBC4366bbfcB2A92C7eE746dcBBd708c")

  await faucet.deployed();

  console.log("Faucet Contract deployed:", faucet.address);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
