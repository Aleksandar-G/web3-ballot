export const CONTRACT_ADDRESS = '0xA096f4289d67D9EFb8a2cAeDb1cAF5A1969AEde4'

export const CONTRACT_ABI = [
  {
    inputs: [
      {
        internalType: 'uint256',
        name: 'candidateNumber',
        type: 'uint256',
      },
    ],
    name: 'castVote',
    outputs: [
      {
        internalType: 'bool',
        name: 'valid',
        type: 'bool',
      },
    ],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [],
    stateMutability: 'nonpayable',
    type: 'constructor',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: 'address',
        name: 'voter',
        type: 'address',
      },
      {
        indexed: false,
        internalType: 'string',
        name: 'votedFor',
        type: 'string',
      },
    ],
    name: 'VoteCasted',
    type: 'event',
  },
  {
    inputs: [],
    name: 'getAllVotes',
    outputs: [
      {
        internalType: 'uint256[]',
        name: '',
        type: 'uint256[]',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'getCandidates',
    outputs: [
      {
        internalType: 'string[]',
        name: '',
        type: 'string[]',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'uint256',
        name: 'candidateNumber',
        type: 'uint256',
      },
    ],
    name: 'getVotesPerCandidate',
    outputs: [
      {
        internalType: 'uint256',
        name: 'votesPerCandidate',
        type: 'uint256',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
]
