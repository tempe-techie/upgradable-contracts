// npx hardhat test test/counter.v1.test.js
const { expect } = require('chai');
 
describe('Counter V2', function () {
  let contract;

  beforeEach(async function () {
    const CounterV2 = await ethers.getContractFactory("CounterV2");
    contract = await CounterV2.deploy();
  });
  
  it('increments the counter value', async function () {
    const counterBefore = await contract.getCounter();
    expect(Number(counterBefore)).to.equal(0); // the value set in initializer is ignored

    await contract.increment();

    const counterAfter = await contract.getCounter();
    expect(Number(counterAfter)).to.equal(1);
  });

  it('adds a number to counter and someNum', async function () {
    const counterBefore = await contract.getCounter();
    expect(Number(counterBefore)).to.equal(0); // the value set in initializer is ignored
    
    const numBefore = await contract.getNum();
    expect(Number(numBefore)).to.equal(0);

    await contract.add(77);

    const counterAfter = await contract.getCounter();
    expect(Number(counterAfter)).to.equal(77);

    const numAfter = await contract.getNum();
    expect(Number(numAfter)).to.equal(77);
  });
});