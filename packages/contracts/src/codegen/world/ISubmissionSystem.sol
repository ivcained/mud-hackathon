// SPDX-License-Identifier: MIT
pragma solidity >=0.8.0;

/* Autogenerated file. Do not edit manually. */

interface ISubmissionSystem {
  function submit(
    bytes32 _hackathonId,
    string memory _name,
    string memory _description,
    string memory _uri,
    string memory _imageUri
  ) external;

  function vote(bytes32 _hackathonId, address[] memory submissionAddresses) external;

  function addSpecialVoter(bytes32 _hackathonId, address _voter, uint32 voteSum) external;

  function withdrawPrize(bytes32 _hackathonId) external payable;
}
