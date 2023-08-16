/* Autogenerated file. Do not edit manually. */

import { TableId } from "@latticexyz/utils";
import { defineComponent, Type as RecsType, World } from "@latticexyz/recs";

export function defineContractComponents(world: World) {
  return {
    Counter: (() => {
      const tableId = new TableId("", "Counter");
      return defineComponent(
        world,
        {
          value: RecsType.Number,
        },
        {
          metadata: {
            contractId: tableId.toHexString(),
            tableId: tableId.toString(),
          },
        }
      );
    })(),
    Config: (() => {
      const tableId = new TableId("", "Config");
      return defineComponent(
        world,
        {
          maxHackathonId: RecsType.String,
        },
        {
          metadata: {
            contractId: tableId.toHexString(),
            tableId: tableId.toString(),
          },
        }
      );
    })(),
    Hackathon: (() => {
      const tableId = new TableId("", "Hackathon");
      return defineComponent(
        world,
        {
          owner: RecsType.String,
          prizeToken: RecsType.String,
          phase: RecsType.Number,
          startTimestamp: RecsType.BigInt,
          submitPeriod: RecsType.BigInt,
          votingPeriod: RecsType.BigInt,
          withdrawalPeriod: RecsType.BigInt,
          winnerCount: RecsType.Number,
          name: RecsType.String,
          uri: RecsType.String,
          imageUri: RecsType.String,
        },
        {
          metadata: {
            contractId: tableId.toHexString(),
            tableId: tableId.toString(),
          },
        }
      );
    })(),
    HackathonPrize: (() => {
      const tableId = new TableId("", "HackathonPrize");
      return defineComponent(
        world,
        {
          deposit: RecsType.BigInt,
          submitters: RecsType.StringArray,
          voteNft: RecsType.String,
          voteNftSnapshot: RecsType.BigInt,
        },
        {
          metadata: {
            contractId: tableId.toHexString(),
            tableId: tableId.toString(),
          },
        }
      );
    })(),
    Submission: (() => {
      const tableId = new TableId("", "Submission");
      return defineComponent(
        world,
        {
          votes: RecsType.BigInt,
          withdrawalPrize: RecsType.BigInt,
          name: RecsType.String,
          description: RecsType.String,
          uri: RecsType.String,
          imageUri: RecsType.String,
        },
        {
          metadata: {
            contractId: tableId.toHexString(),
            tableId: tableId.toString(),
          },
        }
      );
    })(),
    Vote: (() => {
      const tableId = new TableId("", "Vote");
      return defineComponent(
        world,
        {
          count: RecsType.BigInt,
        },
        {
          metadata: {
            contractId: tableId.toHexString(),
            tableId: tableId.toString(),
          },
        }
      );
    })(),
  };
}
