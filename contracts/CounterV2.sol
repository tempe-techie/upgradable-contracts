// SPDX-License-Identifier: GPL-3.0-or-later
pragma solidity ^0.8.4;

import "@openzeppelin/contracts-upgradeable/proxy/utils/Initializable.sol";

contract CounterV2 is Initializable {
  uint256 private counter;
  uint256 private someNum;

  /*
  function initialize() public initializer {
    counter = 1;
  }*/

  function getCounter() external view returns(uint256) {
    return counter;
  }

  function getNum() external view returns(uint256) {
    return someNum;
  }

  function increment() external {
    ++counter;
  }

  function add(uint256 _num) external {
    someNum += _num;
    counter += _num;
  }
}