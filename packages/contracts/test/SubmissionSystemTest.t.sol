// SPDX-License-Identifier: MIT
pragma solidity >=0.8.0;

import "forge-std/Test.sol";
import { MudV2Test } from "@latticexyz/std-contracts/src/test/MudV2Test.t.sol";
import { getKeysWithValue } from "@latticexyz/world/src/modules/keyswithvalue/getKeysWithValue.sol";

import { IWorld } from "../src/codegen/world/IWorld.sol";
import { Config,HackathonPrize,Submission } from "../src/codegen/Tables.sol";
import { MockERC20} from "./HackathonSystemTest.t.sol";

contract SubmissionSystemTest is MudV2Test {
  IWorld public world;
  MockERC20 mock;

  function setUp() public override {
    super.setUp();
    world = IWorld(worldAddress);

    //set prize token
    mock = new MockERC20("Mock", "Mock", 6);
    deal(address(mock), address(this), 100000e6);
  }

  function testSubmit() public {
    world.createHackathon(address(mock),block.timestamp + 1,2,3,4,1,"test1","uri1");

    vm.expectRevert(bytes("Hackathon is not in SUBMISSION phase."));
    world.submit(bytes32(uint256(1)), "submit1", "submitUri1");

    //fix
    mock.approve(address(world), 100000e6);    
    world.depositPrize(bytes32(uint256(1)), 100);
    world.fixHackathon(bytes32(uint256(1)));

    //proceed HACKING
    skip(2);
    world.proceedPhase(bytes32(uint256(1)));

    // submit
    world.submit(bytes32(uint256(1)), "submit1", "submitUri1");
    address[] memory _submitters = HackathonPrize.getSubmitters(world, bytes32(uint256(1)));
    assertEq(_submitters[0], address(this));
    assertEq(Submission.getName(world, bytes32(uint256(1)), address(this)), "submit1");
    assertEq(Submission.getUri(world, bytes32(uint256(1)), address(this)), "submitUri1");

    // submit twice
    vm.prank(address(1));
    world.submit(bytes32(uint256(1)), "submit2", "submitUri2");
    _submitters = HackathonPrize.getSubmitters(world, bytes32(uint256(1)));
    assertEq(_submitters[1], address(1));
    assertEq(Submission.getName(world, bytes32(uint256(1)), address(1)), "submit2");
    assertEq(Submission.getUri(world, bytes32(uint256(1)), address(1)), "submitUri2");

    // update submit
    world.submit(bytes32(uint256(1)), "submit3", "submitUri3");
    _submitters = HackathonPrize.getSubmitters(world, bytes32(uint256(1)));
    assertEq(_submitters.length, 2);
    assertEq(Submission.getName(world, bytes32(uint256(1)), address(this)), "submit3");
    assertEq(Submission.getUri(world, bytes32(uint256(1)), address(this)), "submitUri3");
  }

  function testVoteRevert() public {
    world.createHackathon(address(mock),block.timestamp + 1,2,3,4,1,"test1","uri1");

    vm.expectRevert(bytes("Hackathon is not in VOTING phase."));
    world.vote(bytes32(uint256(1)), address(this));

    //fix
    mock.approve(address(world), 100000e6);    
    world.depositPrize(bytes32(uint256(1)), 100);
    world.fixHackathon(bytes32(uint256(1)));

    //proceed HACKING
    skip(2);
    world.proceedPhase(bytes32(uint256(1)));

    //proceed VOTING
    skip(2);
    world.proceedPhase(bytes32(uint256(1)));

    vm.expectRevert(bytes("Submission does not exist."));
    world.vote(bytes32(uint256(1)), address(this));
  }

  function testVoteSuccess() public {
    world.createHackathon(address(mock),block.timestamp + 1,2,3,4,1,"test1","uri1");

    //fix
    mock.approve(address(world), 100000e6);    
    world.depositPrize(bytes32(uint256(1)), 100);
    world.fixHackathon(bytes32(uint256(1)));

    //proceed HACKING
    skip(2);
    world.proceedPhase(bytes32(uint256(1)));
    world.submit(bytes32(uint256(1)), "submit1", "submitUri1");

    //proceed VOTING
    skip(2);
    world.proceedPhase(bytes32(uint256(1)));

    world.vote(bytes32(uint256(1)), address(this));
    vm.prank(address(1));
    world.vote(bytes32(uint256(1)), address(this));
    assertEq(Submission.getVotes(world, bytes32(uint256(1)), address(this)), 2);
  }

  function testWithdrawPrize() public {
    world.createHackathon(address(mock),block.timestamp + 1,2,3,4,1,"test1","uri1");

    //fix
    mock.approve(address(world), 100000e6);    
    world.depositPrize(bytes32(uint256(1)), 100);
    world.fixHackathon(bytes32(uint256(1)));

    //proceed HACKING
    skip(2);
    world.proceedPhase(bytes32(uint256(1)));
    world.submit(bytes32(uint256(1)), "submit1", "submitUri1");

    //proceed VOTING
    skip(2);
    world.proceedPhase(bytes32(uint256(1)));
    world.vote(bytes32(uint256(1)), address(this));

    //proceed WITHDRAWING
    skip(3);
    world.proceedPhase(bytes32(uint256(1)));

    //withdraw
    world.withdrawPrize(bytes32(uint256(1)));
    assertEq(mock.balanceOf(address(world)), 0);
    assertEq(mock.balanceOf(address(this)), 100000e6);
  }
}