import { MUDChain, latticeTestnet, baseSepolia, base } from '@latticexyz/common/chains';
import { foundry, optimismGoerli, optimism } from '@wagmi/chains';

// If you are deploying to chains other than anvil or Lattice testnet, add them here
export const supportedChains: MUDChain[] = [foundry, latticeTestnet, optimismGoerli, optimism, baseSepolia, base ];
