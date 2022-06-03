// SPDX-License-Identifier: GPL-3.0-or-later
pragma solidity ^0.8.4;

import "@openzeppelin/contracts-upgradeable/proxy/utils/Initializable.sol";

contract CounterV1 is Initializable {
  uint256 private counter;

  function initialize() public initializer {
    counter = 1;
  }

  function getCounter() external view returns(uint256) {
    return counter;
  }

  function increment() external {
    ++counter;
  }
}