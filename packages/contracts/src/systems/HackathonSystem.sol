// SPDX-License-Identifier: MIT
pragma solidity >=0.8.0;

import { System } from "@latticexyz/world/src/System.sol";
import { Hackathon,Config,Owner,HackathonData,HackathonPrize,Submission } from "../codegen/Tables.sol";
import { SafeERC20, IERC20} from "@openzeppelin/contracts/token/ERC20/utils/SafeERC20.sol";

enum Phase {
  PREPARE_PRIZE,
  FIXED_PRIZE,
  HACKING,
  VOTING,
  WITHDRAWING,
  END
}

contract HackathonSystem is System {
  using SafeERC20 for IERC20;

  modifier onlyOwner() {
    //TODO
    // require(Owner.get(msg.sender), "Only owner can call this function.");
    _;
  }

  modifier onlyPhasePrepare(bytes32 _hackathonId) {
    HackathonData memory _hackathonData = Hackathon.get(_hackathonId);
    require(_hackathonData.phase == uint8(Phase.PREPARE_PRIZE), "Hackathon is not in PREPARE_PRIZE phase.");
    _;    
  }

  function _incrementHackathonId() internal returns(bytes32 newHackathonId_){
    newHackathonId_ = bytes32(uint256(Config.getMaxHackathonId()) + 1);
    Config.setMaxHackathonId(newHackathonId_);
  }

  function createHackathon(
    uint256 _startTimestamp,
    uint256 _submitPeriod,
    uint256 _votingPeriod,
    uint256 _withdrawalPeriod,
    uint8 _prizeRank,
    string memory _name,
    string memory _uri
  ) public onlyOwner {
    Hackathon.set(_incrementHackathonId(),HackathonData(
      uint8(Phase.PREPARE_PRIZE),
      _startTimestamp,
      _submitPeriod,
      _votingPeriod,
      _withdrawalPeriod,
      _prizeRank,
      _name,
      _uri
    ));
  }
  
  function updateHackathon(
    bytes32 _hackathonId,
    uint256 _startTimestamp,
    uint256 _submitPeriod,
    uint256 _votingPeriod,
    uint256 _withdrawalPeriod,
    string memory _name,
    string memory _uri,
    uint8 _prizeRank
  ) public onlyOwner onlyPhasePrepare(_hackathonId) {
    Hackathon.set(_hackathonId,HackathonData(
      uint8(Phase.PREPARE_PRIZE),
      _startTimestamp,
      _submitPeriod,
      _votingPeriod,
      _withdrawalPeriod,
      _prizeRank,
      _name,
      _uri
    ));
  }

  function setStartTimestamp(bytes32 _hackathonId, uint256 _startTimestamp) public onlyOwner onlyPhasePrepare(_hackathonId) {
    Hackathon.setStartTimestamp(_hackathonId,_startTimestamp);
  }

  function setSubmitPeriod(bytes32 _hackathonId, uint256 _submitPeriod) public onlyOwner onlyPhasePrepare(_hackathonId) {
    Hackathon.setSubmitPeriod(_hackathonId,_submitPeriod);
  }

  function setVotingPeriod(bytes32 _hackathonId, uint256 _votingPeriod) public onlyOwner onlyPhasePrepare(_hackathonId) {
    Hackathon.setVotingPeriod(_hackathonId,_votingPeriod);
  }

  function setWithdrawalPeriod(bytes32 _hackathonId, uint256 _withdrawalPeriod) public onlyOwner onlyPhasePrepare(_hackathonId) {
    Hackathon.setWithdrawalPeriod(_hackathonId,_withdrawalPeriod);
  }

  function setPrizeRank(bytes32 _hackathonId, uint8 _prizeRank) public onlyOwner onlyPhasePrepare(_hackathonId) {
    Hackathon.setPrizeRank(_hackathonId,_prizeRank);
  }

  function setName(bytes32 _hackathonId, string memory _name) public onlyOwner onlyPhasePrepare(_hackathonId) {
    Hackathon.setName(_hackathonId,_name);
  }

  function setUri(bytes32 _hackathonId, string memory _uri) public onlyOwner onlyPhasePrepare(_hackathonId) {
    Hackathon.setUri(_hackathonId,_uri);
  }

  function fixHackathon(bytes32 _hackathonId) public onlyOwner onlyPhasePrepare(_hackathonId){
    uint256 _deposit = HackathonPrize.getDeposit(_hackathonId);
    require(_deposit > 0, "Deposit amount must be greater than 0.");
    Hackathon.setPhase(_hackathonId,uint8(Phase.FIXED_PRIZE));
  }

  function proceedPhase(bytes32 _hackathonId) public {
    HackathonData memory _hackathonData = Hackathon.get(_hackathonId);
    if(_hackathonData.phase == uint8(Phase.FIXED_PRIZE)){
      require(_hackathonData.startTimestamp < block.timestamp, "StartTimestamp is not passed.");
      Hackathon.setPhase(_hackathonId,uint8(Phase.HACKING));

    }else if(_hackathonData.phase == uint8(Phase.HACKING)){
      // startTimestamp + submitPeriod is past
      require(_hackathonData.startTimestamp + _hackathonData.submitPeriod < block.timestamp, "SubmitPeriod is not passed.");
      Hackathon.setPhase(_hackathonId,uint8(Phase.VOTING));

    // }else if(_hackathonData.phase == uint8(Phase.VOTING)){
    //   // startTimestamp + submitPeriod + votingPeriod is past
    //   require(_hackathonData.startTimestamp + _hackathonData.submitPeriod + _hackathonData.votingPeriod < block.timestamp, "VotingPeriod is not passed.");
    //   Hackathon.setPhase(_hackathonId,uint8(Phase.WITHDRAWING));

    }else if(_hackathonData.phase == uint8(Phase.WITHDRAWING)){
      // startTimestamp + submitPeriod + votingPeriod + withdrawalPeriod is past
      require(_hackathonData.startTimestamp + _hackathonData.submitPeriod + _hackathonData.votingPeriod + _hackathonData.withdrawalPeriod < block.timestamp, "WithdrawalPeriod is not passed.");
      Hackathon.setPhase(_hackathonId,uint8(Phase.END));

    }else{
      revert("Cannot proceed phase.");
    }
  }

  struct SubmitterWithVote{
    address submitter;
    uint256 votes;
  }

  function finishVoting(bytes32 _hackathonId) public {
    HackathonData memory _hackathonData = Hackathon.get(_hackathonId);
    require(_hackathonData.phase == uint8(Phase.VOTING), "Hackathon is not in VOTING phase.");
    require(_hackathonData.startTimestamp + _hackathonData.submitPeriod + _hackathonData.votingPeriod < block.timestamp, "VotingPeriod is not passed.");
    Hackathon.setPhase(_hackathonId,uint8(Phase.WITHDRAWING));

    //judge and set winners by votes, the number of winners is _hackathonData.prizeRank
    address[] memory _submitters = HackathonPrize.getSubmitters(_hackathonId);
    uint8 _submittersLength = uint8(_submitters.length);
    SubmitterWithVote[] memory _submittersWithVotes = new SubmitterWithVote[](_submittersLength);

    //sort by votes
    for(uint8 i =0; i < _submittersLength; i++){
      _submittersWithVotes[i] = SubmitterWithVote(_submitters[i], Submission.getVotes(_hackathonId,_submitters[i]));
    }
    for(uint8 i =0; i < uint8(_submittersLength); i++){
      for(uint8 j =0; j < uint8(_submittersLength) - i - 1; j++){
        if(_submittersWithVotes[j].votes < _submittersWithVotes[j+1].votes){
          SubmitterWithVote memory temp = _submittersWithVotes[j];
          _submittersWithVotes[j] = _submittersWithVotes[j+1];
          _submittersWithVotes[j+1] = temp;
        }
      }
    }

    //set winners
    uint8 _winnerCount = _hackathonData.prizeRank;
    for(uint8 i = _winnerCount; i < _submittersLength; i++){
      if(_submittersWithVotes[i - 1].votes == _submittersWithVotes[i].votes){
        _winnerCount++;
      }else{
        break;
      }
    }

    //set winners
    uint256 _prize = HackathonPrize.getDeposit(_hackathonId) / _winnerCount;
    for(uint8 i = 0; i < _winnerCount; i++){
      Submission.setWithdrawalPrize(_hackathonId,_submittersWithVotes[i].submitter, _prize);
    }
  }

  function withdrawByOwner(bytes32 _hackathonId) public onlyOwner {
    HackathonData memory _hackathonData = Hackathon.get(_hackathonId);
    require(_hackathonData.phase == uint8(Phase.END), "Hackathon is not in END phase.");

    //if deposit is left, withdraw to owner
    uint256 _deposit = HackathonPrize.getDeposit(_hackathonId);
    if(_deposit > 0){
      HackathonPrize.setDeposit(_hackathonId,0);
      address _prizeToken = Config.getPrizeToken();
      IERC20(_prizeToken).safeTransfer(msg.sender, _deposit);
    }

  }

}
