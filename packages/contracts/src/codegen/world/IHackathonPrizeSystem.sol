// SPDX-License-Identifier: MIT
pragma solidity >=0.8.0;

/* Autogenerated file. Do not edit manually. */

interface IHackathonPrizeSystem {
  function depositPrize(bytes32 _hackathonId, uint256 _amount) external;

  function depositPrizeEth(bytes32 _hackathonId, uint256 _amount) external payable;
}
