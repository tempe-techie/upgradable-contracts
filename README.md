# Upgradable contracts with Open Zeppelin

Instructions for deploying upgradable smart contracts using Open Zeppelin tools.

## Initial deployment

1. As the name suggest, the initial deployment is only done once.
2. Only have the `initialize()` function in V1, not in later versions (upgrades).
3. After deploying, verify the implementation contract.
4. On Etherscan go through this process for the Proxy contract: **Contract > Code > More Options > Is this a proxy?** (only needed for the initial deployment.)

## A) Upgrades (without Gnosis Safe)

1. Do not include `initialize()` function in the upgrade contracts!
2. For each new contract version create a new `X_upgrade.js` script.
3. After deploying, verify the implementation contract.

## B) Upgrades (with Gnosis Safe)

1. Find the ProxyAdmin contract address. This is NOT the same as the Proxy address! Open the `.openzeppelin` folder, find the correct JSON file (should have the correct chain ID at the end), and then find **admin address**. This is the ProxyAdmin address.
2. Go to block explorer and enter the ProxyAdmin address, to verify you have the correct address.
3. Now you can manually set the new owner of the ProxyAdmin contract: **Contract > Write Contract > transferOwnership()**. 
    - An alternative would be to run this command in a JS script: `await upgrades.admin.transferProxyAdminOwnership(gnosisSafeAddr);`
4. As always, do not include `initialize()` function in the upgrade contracts!
5. For each new contract version create a new `X_upgrade_with_gnosis_safe.js` script. After deploying the implementation contract, verify it.
6. This script will only deploy the implementation contract, but will not point the Proxy contract to it. You will need to do that manually through your Gnosis Safe.
    - Go to your **Gnosis Safe** and add the `ProxyAdmin` address in the **Address Book** (if it's not there already).
    - Then click on the **New Transaction** button and then **Contract interaction**.
    - Pick ProxyAdmin address as the Contract address and wait for the ABI to load.
    - Then find and select the `upgrade` function. 
    - Enter proxy address and the new implementation address and submit the transaction. The upgrade is now completed.

## Tutorials

For additional help see these tutorials:

- (Open Zeppelin Upgradeable Contracts: YouTube video)[https://www.youtube.com/watch?v=JgSj7IiE4jA]
- (OpenZeppelin Upgrades: Step by Step Tutorial for Hardhat)[https://forum.openzeppelin.com/t/openzeppelin-upgrades-step-by-step-tutorial-for-hardhat/3580]