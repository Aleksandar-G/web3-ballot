import { Contract, ethers } from 'ethers'
import { CONTRACT_ABI, CONTRACT_ADDRESS } from './contractInfo'

let provider: ethers.providers.Web3Provider | undefined = undefined

let contract: Contract | undefined = undefined

export const checkBlockchainConnection = () => {
  let res = true
  window.ethereum ? (res = true) : (res = false)
  return res
}

export const getAllCandidates = async () => {
  provider = new ethers.providers.Web3Provider(window.ethereum)
  contract = new Contract(CONTRACT_ADDRESS, CONTRACT_ABI, provider)

  const res = await contract?.getCandidates()

  return res
}

export const castVote = async (
  candidateNumber: number,
  setVoteCasted: React.Dispatch<React.SetStateAction<boolean>>,
  setVoteProcessed: React.Dispatch<React.SetStateAction<boolean>>,
) => {
  await provider?.send('eth_requestAccounts', [])
  const signer = provider?.getSigner()

  contract = new Contract(CONTRACT_ADDRESS, CONTRACT_ABI, signer)

  await contract?.castVote(candidateNumber)

  setVoteCasted(true)

  contract.on('VoteCasted', () => {
    setVoteProcessed(true)
  })
}

export const getVotes = async () => {
  provider = new ethers.providers.Web3Provider(window.ethereum)
  contract = new Contract(CONTRACT_ADDRESS, CONTRACT_ABI, provider)
  const res = await contract?.getAllVotes()
  const votes = res.map((x: any) => x.toString())
  return votes
}

export const getVotesPerCandidate = async (candidateNumber: number) => {
  const res = await contract?.getVotesPerCandidate()
  return res
}
