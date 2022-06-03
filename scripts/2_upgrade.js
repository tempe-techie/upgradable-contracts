// npx hardhat run scripts/2_upgrade.js --network polygonMumbai

const contractName = "CounterV2";
const proxyAddress = "0x96b56f8df1068D823E3f1B9C9d9207Aa5C49CC6d";

async function main() {
  const [deployer] = await ethers.getSigners();

  console.log("Deploying contracts with the account:", deployer.address);
  console.log("Account balance:", (await deployer.getBalance()).toString());

  const contract = await ethers.getContractFactory(contractName);
  const instance = await upgrades.upgradeProxy(proxyAddress, contract);
  await instance.deployed();

  console.log("Proxy address:", instance.address);

  const impAddress = await hre.upgrades.erc1967.getImplementationAddress(instance.address);

  console.log("Implementation address:", impAddress);

  console.log("Wait a minute and then run this command to verify contract on the block explorer:");
  console.log("npx hardhat verify --network " + network.name + " " + impAddress);
}

main()
.then(() => process.exit(0))
.catch(error => {
  console.error(error);
  process.exit(1);
});