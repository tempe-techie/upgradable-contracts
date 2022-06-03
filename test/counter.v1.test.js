// npx hardhat test test/counter.v1.test.js
const { expect } = require('chai');
 
describe('Counter V1', function () {
  let contract;

  beforeEach(async function () {
    const CounterV1 = await ethers.getContractFactory("CounterV1");
    contract = await CounterV1.deploy();
  });
  
  it('increments the counter value', async function () {
    const counterBefore = await contract.getCounter();
    expect(Number(counterBefore)).to.equal(0); // the value set in initializer is ignored

    await contract.increment();

    const counterAfter = await contract.getCounter();
    expect(Number(counterAfter)).to.equal(1);
  });
});