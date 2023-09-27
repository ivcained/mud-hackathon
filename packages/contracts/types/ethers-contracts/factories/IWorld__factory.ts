/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer, utils } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type { IWorld, IWorldInterface } from "../IWorld";

const _abi = [
  {
    inputs: [
      {
        internalType: "string",
        name: "resource",
        type: "string",
      },
      {
        internalType: "address",
        name: "caller",
        type: "address",
      },
    ],
    name: "AccessDenied",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "bytes4",
        name: "functionSelector",
        type: "bytes4",
      },
    ],
    name: "FunctionSelectorExists",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "bytes4",
        name: "functionSelector",
        type: "bytes4",
      },
    ],
    name: "FunctionSelectorNotFound",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "string",
        name: "resource",
        type: "string",
      },
    ],
    name: "InvalidSelector",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "string",
        name: "module",
        type: "string",
      },
    ],
    name: "ModuleAlreadyInstalled",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "string",
        name: "resource",
        type: "string",
      },
    ],
    name: "ResourceExists",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "string",
        name: "resource",
        type: "string",
      },
    ],
    name: "ResourceNotFound",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "length",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "received",
        type: "uint256",
      },
    ],
    name: "StoreCore_DataIndexOverflow",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "expected",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "received",
        type: "uint256",
      },
    ],
    name: "StoreCore_InvalidDataLength",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "expected",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "received",
        type: "uint256",
      },
    ],
    name: "StoreCore_InvalidFieldNamesLength",
    type: "error",
  },
  {
    inputs: [],
    name: "StoreCore_NotDynamicField",
    type: "error",
  },
  {
    inputs: [],
    name: "StoreCore_NotImplemented",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "tableId",
        type: "bytes32",
      },
      {
        internalType: "string",
        name: "tableIdString",
        type: "string",
      },
    ],
    name: "StoreCore_TableAlreadyExists",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "tableId",
        type: "bytes32",
      },
      {
        internalType: "string",
        name: "tableIdString",
        type: "string",
      },
    ],
    name: "StoreCore_TableNotFound",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "system",
        type: "address",
      },
    ],
    name: "SystemExists",
    type: "error",
  },
  {
    anonymous: false,
    inputs: [],
    name: "HelloWorld",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "bytes32",
        name: "table",
        type: "bytes32",
      },
      {
        indexed: false,
        internalType: "bytes32[]",
        name: "key",
        type: "bytes32[]",
      },
    ],
    name: "StoreDeleteRecord",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "bytes32",
        name: "table",
        type: "bytes32",
      },
      {
        indexed: false,
        internalType: "bytes32[]",
        name: "key",
        type: "bytes32[]",
      },
      {
        indexed: false,
        internalType: "bytes",
        name: "data",
        type: "bytes",
      },
    ],
    name: "StoreEphemeralRecord",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "bytes32",
        name: "table",
        type: "bytes32",
      },
      {
        indexed: false,
        internalType: "bytes32[]",
        name: "key",
        type: "bytes32[]",
      },
      {
        indexed: false,
        internalType: "uint8",
        name: "schemaIndex",
        type: "uint8",
      },
      {
        indexed: false,
        internalType: "bytes",
        name: "data",
        type: "bytes",
      },
    ],
    name: "StoreSetField",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "bytes32",
        name: "table",
        type: "bytes32",
      },
      {
        indexed: false,
        internalType: "bytes32[]",
        name: "key",
        type: "bytes32[]",
      },
      {
        indexed: false,
        internalType: "bytes",
        name: "data",
        type: "bytes",
      },
    ],
    name: "StoreSetRecord",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "_hackathonId",
        type: "bytes32",
      },
      {
        internalType: "address",
        name: "_voter",
        type: "address",
      },
      {
        internalType: "uint32",
        name: "voteSum",
        type: "uint32",
      },
    ],
    name: "addSpecialVoter",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes16",
        name: "namespace",
        type: "bytes16",
      },
      {
        internalType: "bytes16",
        name: "name",
        type: "bytes16",
      },
      {
        internalType: "bytes",
        name: "funcSelectorAndArgs",
        type: "bytes",
      },
    ],
    name: "call",
    outputs: [
      {
        internalType: "bytes",
        name: "",
        type: "bytes",
      },
    ],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_newAdmin",
        type: "address",
      },
    ],
    name: "changeAdmin",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_prizeToken",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_startTimestamp",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_submitPeriod",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_votingPeriod",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_withdrawalPeriod",
        type: "uint256",
      },
      {
        internalType: "uint8",
        name: "_winnerCount",
        type: "uint8",
      },
      {
        components: [
          {
            internalType: "string",
            name: "name",
            type: "string",
          },
          {
            internalType: "string",
            name: "uri",
            type: "string",
          },
          {
            internalType: "string",
            name: "imageUri",
            type: "string",
          },
          {
            internalType: "string",
            name: "description",
            type: "string",
          },
        ],
        internalType: "struct HackathonInfoData",
        name: "_hackathonInfo",
        type: "tuple",
      },
      {
        internalType: "address",
        name: "_voteNft",
        type: "address",
      },
    ],
    name: "createHackathon",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "_hackathonId",
        type: "bytes32",
      },
    ],
    name: "deleteHackathon",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "_hackathonId",
        type: "bytes32",
      },
    ],
    name: "deleteHackathonByAdmin",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "table",
        type: "bytes32",
      },
      {
        internalType: "bytes32[]",
        name: "key",
        type: "bytes32[]",
      },
    ],
    name: "deleteRecord",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes16",
        name: "namespace",
        type: "bytes16",
      },
      {
        internalType: "bytes16",
        name: "name",
        type: "bytes16",
      },
      {
        internalType: "bytes32[]",
        name: "key",
        type: "bytes32[]",
      },
    ],
    name: "deleteRecord",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "_hackathonId",
        type: "bytes32",
      },
      {
        internalType: "uint256",
        name: "_amount",
        type: "uint256",
      },
    ],
    name: "depositPrize",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "_hackathonId",
        type: "bytes32",
      },
      {
        internalType: "uint256",
        name: "_amount",
        type: "uint256",
      },
    ],
    name: "depositPrizeEth",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes16",
        name: "namespace",
        type: "bytes16",
      },
      {
        internalType: "bytes16",
        name: "name",
        type: "bytes16",
      },
      {
        internalType: "bytes32[]",
        name: "key",
        type: "bytes32[]",
      },
      {
        internalType: "bytes",
        name: "data",
        type: "bytes",
      },
    ],
    name: "emitEphemeralRecord",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "table",
        type: "bytes32",
      },
      {
        internalType: "bytes32[]",
        name: "key",
        type: "bytes32[]",
      },
      {
        internalType: "bytes",
        name: "data",
        type: "bytes",
      },
    ],
    name: "emitEphemeralRecord",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "getAdministrator",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "table",
        type: "bytes32",
      },
      {
        internalType: "bytes32[]",
        name: "key",
        type: "bytes32[]",
      },
      {
        internalType: "uint8",
        name: "schemaIndex",
        type: "uint8",
      },
    ],
    name: "getField",
    outputs: [
      {
        internalType: "bytes",
        name: "data",
        type: "bytes",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "table",
        type: "bytes32",
      },
      {
        internalType: "bytes32[]",
        name: "key",
        type: "bytes32[]",
      },
      {
        internalType: "uint8",
        name: "schemaIndex",
        type: "uint8",
      },
      {
        internalType: "Schema",
        name: "schema",
        type: "bytes32",
      },
    ],
    name: "getFieldLength",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "table",
        type: "bytes32",
      },
      {
        internalType: "bytes32[]",
        name: "key",
        type: "bytes32[]",
      },
      {
        internalType: "uint8",
        name: "schemaIndex",
        type: "uint8",
      },
      {
        internalType: "Schema",
        name: "schema",
        type: "bytes32",
      },
      {
        internalType: "uint256",
        name: "start",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "end",
        type: "uint256",
      },
    ],
    name: "getFieldSlice",
    outputs: [
      {
        internalType: "bytes",
        name: "data",
        type: "bytes",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "_hackathonId",
        type: "bytes32",
      },
    ],
    name: "getHackathon",
    outputs: [
      {
        components: [
          {
            internalType: "address",
            name: "owner",
            type: "address",
          },
          {
            internalType: "address",
            name: "prizeToken",
            type: "address",
          },
          {
            internalType: "uint8",
            name: "phase",
            type: "uint8",
          },
          {
            internalType: "uint256",
            name: "startTimestamp",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "submitPeriod",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "votingPeriod",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "withdrawalPeriod",
            type: "uint256",
          },
          {
            internalType: "uint8",
            name: "winnerCount",
            type: "uint8",
          },
        ],
        internalType: "struct HackathonData",
        name: "",
        type: "tuple",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "_hackathonId",
        type: "bytes32",
      },
    ],
    name: "getHackathonInfo",
    outputs: [
      {
        components: [
          {
            internalType: "string",
            name: "name",
            type: "string",
          },
          {
            internalType: "string",
            name: "uri",
            type: "string",
          },
          {
            internalType: "string",
            name: "imageUri",
            type: "string",
          },
          {
            internalType: "string",
            name: "description",
            type: "string",
          },
        ],
        internalType: "struct HackathonInfoData",
        name: "",
        type: "tuple",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "_hackathonId",
        type: "bytes32",
      },
    ],
    name: "getHackathonPrize",
    outputs: [
      {
        components: [
          {
            internalType: "uint256",
            name: "deposit",
            type: "uint256",
          },
          {
            internalType: "address[]",
            name: "submitters",
            type: "address[]",
          },
        ],
        internalType: "struct HackathonPrizeData",
        name: "",
        type: "tuple",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "_hackathonId",
        type: "bytes32",
      },
    ],
    name: "getHackathonSponsor",
    outputs: [
      {
        internalType: "uint256[]",
        name: "",
        type: "uint256[]",
      },
      {
        internalType: "address[]",
        name: "",
        type: "address[]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "_hackathonId",
        type: "bytes32",
      },
    ],
    name: "getHackathonVoteNft",
    outputs: [
      {
        components: [
          {
            internalType: "address",
            name: "voteNft",
            type: "address",
          },
          {
            internalType: "address[]",
            name: "specialVoters",
            type: "address[]",
          },
        ],
        internalType: "struct HackathonVoteNftData",
        name: "",
        type: "tuple",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "table",
        type: "bytes32",
      },
    ],
    name: "getKeySchema",
    outputs: [
      {
        internalType: "Schema",
        name: "schema",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getMaxHackathonId",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "table",
        type: "bytes32",
      },
      {
        internalType: "bytes32[]",
        name: "key",
        type: "bytes32[]",
      },
      {
        internalType: "Schema",
        name: "schema",
        type: "bytes32",
      },
    ],
    name: "getRecord",
    outputs: [
      {
        internalType: "bytes",
        name: "data",
        type: "bytes",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "table",
        type: "bytes32",
      },
      {
        internalType: "bytes32[]",
        name: "key",
        type: "bytes32[]",
      },
    ],
    name: "getRecord",
    outputs: [
      {
        internalType: "bytes",
        name: "data",
        type: "bytes",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "table",
        type: "bytes32",
      },
    ],
    name: "getSchema",
    outputs: [
      {
        internalType: "Schema",
        name: "schema",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "_hackathonId",
        type: "bytes32",
      },
      {
        internalType: "address",
        name: "_submitter",
        type: "address",
      },
    ],
    name: "getSubmission",
    outputs: [
      {
        components: [
          {
            internalType: "uint256",
            name: "votes",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "withdrawalPrize",
            type: "uint256",
          },
          {
            internalType: "string",
            name: "name",
            type: "string",
          },
          {
            internalType: "string",
            name: "description",
            type: "string",
          },
          {
            internalType: "string",
            name: "uri",
            type: "string",
          },
          {
            internalType: "string",
            name: "imageUri",
            type: "string",
          },
        ],
        internalType: "struct SubmissionData",
        name: "",
        type: "tuple",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "_hackathonId",
        type: "bytes32",
      },
      {
        internalType: "address",
        name: "_nft",
        type: "address",
      },
    ],
    name: "getVote",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes16",
        name: "namespace",
        type: "bytes16",
      },
      {
        internalType: "bytes16",
        name: "name",
        type: "bytes16",
      },
      {
        internalType: "address",
        name: "grantee",
        type: "address",
      },
    ],
    name: "grantAccess",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "increment",
    outputs: [
      {
        internalType: "uint32",
        name: "",
        type: "uint32",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "contract IModule",
        name: "module",
        type: "address",
      },
      {
        internalType: "bytes",
        name: "args",
        type: "bytes",
      },
    ],
    name: "installModule",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "contract IModule",
        name: "module",
        type: "address",
      },
      {
        internalType: "bytes",
        name: "args",
        type: "bytes",
      },
    ],
    name: "installRootModule",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "isStore",
    outputs: [],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes16",
        name: "namespace",
        type: "bytes16",
      },
      {
        internalType: "bytes16",
        name: "name",
        type: "bytes16",
      },
      {
        internalType: "bytes32[]",
        name: "key",
        type: "bytes32[]",
      },
      {
        internalType: "uint8",
        name: "schemaIndex",
        type: "uint8",
      },
      {
        internalType: "uint256",
        name: "byteLengthToPop",
        type: "uint256",
      },
    ],
    name: "popFromField",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "table",
        type: "bytes32",
      },
      {
        internalType: "bytes32[]",
        name: "key",
        type: "bytes32[]",
      },
      {
        internalType: "uint8",
        name: "schemaIndex",
        type: "uint8",
      },
      {
        internalType: "uint256",
        name: "byteLengthToPop",
        type: "uint256",
      },
    ],
    name: "popFromField",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "_hackathonId",
        type: "bytes32",
      },
    ],
    name: "proceedPhase",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "table",
        type: "bytes32",
      },
      {
        internalType: "bytes32[]",
        name: "key",
        type: "bytes32[]",
      },
      {
        internalType: "uint8",
        name: "schemaIndex",
        type: "uint8",
      },
      {
        internalType: "bytes",
        name: "dataToPush",
        type: "bytes",
      },
    ],
    name: "pushToField",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes16",
        name: "namespace",
        type: "bytes16",
      },
      {
        internalType: "bytes16",
        name: "name",
        type: "bytes16",
      },
      {
        internalType: "bytes32[]",
        name: "key",
        type: "bytes32[]",
      },
      {
        internalType: "uint8",
        name: "schemaIndex",
        type: "uint8",
      },
      {
        internalType: "bytes",
        name: "dataToPush",
        type: "bytes",
      },
    ],
    name: "pushToField",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes16",
        name: "namespace",
        type: "bytes16",
      },
      {
        internalType: "bytes16",
        name: "name",
        type: "bytes16",
      },
      {
        internalType: "string",
        name: "systemFunctionName",
        type: "string",
      },
      {
        internalType: "string",
        name: "systemFunctionArguments",
        type: "string",
      },
    ],
    name: "registerFunctionSelector",
    outputs: [
      {
        internalType: "bytes4",
        name: "worldFunctionSelector",
        type: "bytes4",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes16",
        name: "namespace",
        type: "bytes16",
      },
      {
        internalType: "bytes16",
        name: "name",
        type: "bytes16",
      },
      {
        internalType: "address",
        name: "hook",
        type: "address",
      },
    ],
    name: "registerHook",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes16",
        name: "namespace",
        type: "bytes16",
      },
    ],
    name: "registerNamespace",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes16",
        name: "namespace",
        type: "bytes16",
      },
      {
        internalType: "bytes16",
        name: "name",
        type: "bytes16",
      },
      {
        internalType: "bytes4",
        name: "worldFunctionSelector",
        type: "bytes4",
      },
      {
        internalType: "bytes4",
        name: "systemFunctionSelector",
        type: "bytes4",
      },
    ],
    name: "registerRootFunctionSelector",
    outputs: [
      {
        internalType: "bytes4",
        name: "",
        type: "bytes4",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "table",
        type: "bytes32",
      },
      {
        internalType: "Schema",
        name: "schema",
        type: "bytes32",
      },
      {
        internalType: "Schema",
        name: "keySchema",
        type: "bytes32",
      },
    ],
    name: "registerSchema",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "table",
        type: "bytes32",
      },
      {
        internalType: "contract IStoreHook",
        name: "hook",
        type: "address",
      },
    ],
    name: "registerStoreHook",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes16",
        name: "namespace",
        type: "bytes16",
      },
      {
        internalType: "bytes16",
        name: "name",
        type: "bytes16",
      },
      {
        internalType: "contract System",
        name: "system",
        type: "address",
      },
      {
        internalType: "bool",
        name: "publicAccess",
        type: "bool",
      },
    ],
    name: "registerSystem",
    outputs: [
      {
        internalType: "bytes32",
        name: "resourceSelector",
        type: "bytes32",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes16",
        name: "namespace",
        type: "bytes16",
      },
      {
        internalType: "bytes16",
        name: "name",
        type: "bytes16",
      },
      {
        internalType: "contract ISystemHook",
        name: "hook",
        type: "address",
      },
    ],
    name: "registerSystemHook",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes16",
        name: "namespace",
        type: "bytes16",
      },
      {
        internalType: "bytes16",
        name: "name",
        type: "bytes16",
      },
      {
        internalType: "Schema",
        name: "valueSchema",
        type: "bytes32",
      },
      {
        internalType: "Schema",
        name: "keySchema",
        type: "bytes32",
      },
    ],
    name: "registerTable",
    outputs: [
      {
        internalType: "bytes32",
        name: "resourceSelector",
        type: "bytes32",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes16",
        name: "namespace",
        type: "bytes16",
      },
      {
        internalType: "bytes16",
        name: "name",
        type: "bytes16",
      },
      {
        internalType: "contract IStoreHook",
        name: "hook",
        type: "address",
      },
    ],
    name: "registerTableHook",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes16",
        name: "namespace",
        type: "bytes16",
      },
      {
        internalType: "bytes16",
        name: "name",
        type: "bytes16",
      },
      {
        internalType: "address",
        name: "grantee",
        type: "address",
      },
    ],
    name: "revokeAccess",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_newAdmin",
        type: "address",
      },
    ],
    name: "setAdmin",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "table",
        type: "bytes32",
      },
      {
        internalType: "bytes32[]",
        name: "key",
        type: "bytes32[]",
      },
      {
        internalType: "uint8",
        name: "schemaIndex",
        type: "uint8",
      },
      {
        internalType: "bytes",
        name: "data",
        type: "bytes",
      },
    ],
    name: "setField",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes16",
        name: "namespace",
        type: "bytes16",
      },
      {
        internalType: "bytes16",
        name: "name",
        type: "bytes16",
      },
      {
        internalType: "bytes32[]",
        name: "key",
        type: "bytes32[]",
      },
      {
        internalType: "uint8",
        name: "schemaIndex",
        type: "uint8",
      },
      {
        internalType: "bytes",
        name: "data",
        type: "bytes",
      },
    ],
    name: "setField",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes16",
        name: "namespace",
        type: "bytes16",
      },
      {
        internalType: "bytes16",
        name: "name",
        type: "bytes16",
      },
      {
        internalType: "string",
        name: "tableName",
        type: "string",
      },
      {
        internalType: "string[]",
        name: "fieldNames",
        type: "string[]",
      },
    ],
    name: "setMetadata",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "table",
        type: "bytes32",
      },
      {
        internalType: "string",
        name: "tableName",
        type: "string",
      },
      {
        internalType: "string[]",
        name: "fieldNames",
        type: "string[]",
      },
    ],
    name: "setMetadata",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes16",
        name: "namespace",
        type: "bytes16",
      },
      {
        internalType: "bytes16",
        name: "name",
        type: "bytes16",
      },
      {
        internalType: "bytes32[]",
        name: "key",
        type: "bytes32[]",
      },
      {
        internalType: "bytes",
        name: "data",
        type: "bytes",
      },
    ],
    name: "setRecord",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "table",
        type: "bytes32",
      },
      {
        internalType: "bytes32[]",
        name: "key",
        type: "bytes32[]",
      },
      {
        internalType: "bytes",
        name: "data",
        type: "bytes",
      },
    ],
    name: "setRecord",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_voteToken",
        type: "address",
      },
    ],
    name: "setVoteToken",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "_hackathonId",
        type: "bytes32",
      },
      {
        internalType: "string",
        name: "_name",
        type: "string",
      },
      {
        internalType: "string",
        name: "_description",
        type: "string",
      },
      {
        internalType: "string",
        name: "_uri",
        type: "string",
      },
      {
        internalType: "string",
        name: "_imageUri",
        type: "string",
      },
    ],
    name: "submit",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "_hackathonId",
        type: "bytes32",
      },
      {
        internalType: "address",
        name: "_prizeToken",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_startTimestamp",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_submitPeriod",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_votingPeriod",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_withdrawalPeriod",
        type: "uint256",
      },
      {
        internalType: "uint8",
        name: "_winnerCount",
        type: "uint8",
      },
      {
        components: [
          {
            internalType: "string",
            name: "name",
            type: "string",
          },
          {
            internalType: "string",
            name: "uri",
            type: "string",
          },
          {
            internalType: "string",
            name: "imageUri",
            type: "string",
          },
          {
            internalType: "string",
            name: "description",
            type: "string",
          },
        ],
        internalType: "struct HackathonInfoData",
        name: "_hackathonInfo",
        type: "tuple",
      },
      {
        internalType: "address",
        name: "_voteNft",
        type: "address",
      },
    ],
    name: "updateHackathon",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "table",
        type: "bytes32",
      },
      {
        internalType: "bytes32[]",
        name: "key",
        type: "bytes32[]",
      },
      {
        internalType: "uint8",
        name: "schemaIndex",
        type: "uint8",
      },
      {
        internalType: "uint256",
        name: "startByteIndex",
        type: "uint256",
      },
      {
        internalType: "bytes",
        name: "dataToSet",
        type: "bytes",
      },
    ],
    name: "updateInField",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes16",
        name: "namespace",
        type: "bytes16",
      },
      {
        internalType: "bytes16",
        name: "name",
        type: "bytes16",
      },
      {
        internalType: "bytes32[]",
        name: "key",
        type: "bytes32[]",
      },
      {
        internalType: "uint8",
        name: "schemaIndex",
        type: "uint8",
      },
      {
        internalType: "uint256",
        name: "startByteIndex",
        type: "uint256",
      },
      {
        internalType: "bytes",
        name: "dataToSet",
        type: "bytes",
      },
    ],
    name: "updateInField",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "_hackathonId",
        type: "bytes32",
      },
      {
        internalType: "address",
        name: "_submitter",
        type: "address",
      },
    ],
    name: "vote",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "_hackathonId",
        type: "bytes32",
      },
    ],
    name: "withdrawByOwner",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "_hackathonId",
        type: "bytes32",
      },
    ],
    name: "withdrawPrize",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
] as const;

export class IWorld__factory {
  static readonly abi = _abi;
  static createInterface(): IWorldInterface {
    return new utils.Interface(_abi) as IWorldInterface;
  }
  static connect(address: string, signerOrProvider: Signer | Provider): IWorld {
    return new Contract(address, _abi, signerOrProvider) as IWorld;
  }
}
