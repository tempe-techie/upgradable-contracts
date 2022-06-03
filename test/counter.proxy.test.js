// npx hardhat test test/counter.v1.test.js
const { expect } = require('chai');
 
describe('Counter Proxy', function () {
  let contract;

  beforeEach(async function () {
    const CounterV1 = await ethers.getContractFactory("CounterV1");
    contract = await upgrades.deployProxy(CounterV1); // alternative: upgrades.deployProxy(CounterV1, {initializer: 'initialize'});
  
    const CounterV2 = await ethers.getContractFactory("CounterV2");
    contract = await upgrades.upgradeProxy(contract.address, CounterV2);
  });
  
  it('increments the counter value', async function () {
    const counterBefore = await contract.getCounter();
    expect(Number(counterBefore)).to.equal(1); // the value set in initializer is 1

    await contract.increment();

    const counterAfter = await contract.getCounter();
    expect(Number(counterAfter)).to.equal(2);
  });

  it('adds a number to counter and someNum', async function () {
    const counterBefore = await contract.getCounter();
    expect(Number(counterBefore)).to.equal(1); // the value set in initializer is 1
    
    const numBefore = await contract.getNum();
    expect(Number(numBefore)).to.equal(0);

    await contract.add(77);

    const counterAfter = await contract.getCounter();
    expect(Number(counterAfter)).to.equal(78);

    const numAfter = await contract.getNum();
    expect(Number(numAfter)).to.equal(77);
  });
});