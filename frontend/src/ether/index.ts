import { Contract, ethers } from 'ethers'
import { CONTRACT_ABI, CONTRACT_ADDRESS } from './contractInfo'

const provider = new ethers.providers.Web3Provider(window.ethereum)

let contract: Contract | undefined = undefined

const checkBlockchainConnection = () => {}

export const getAllCandidates = async () => {
  contract = new Contract(CONTRACT_ADDRESS, CONTRACT_ABI, provider)

  const res = await contract?.getCandidates()

  return res
}

export const handleVote = async (candidateNumber: number) => {
  if (window.ethereum) {
    console.log('Hello')

    await provider.send('eth_requestAccounts', [])
    const signer = provider.getSigner()

    contract = new Contract(CONTRACT_ADDRESS, CONTRACT_ABI, signer)

    const res = await contract?.castVote(candidateNumber)

    contract.on('VoteCasted', voteCasted)
  } else {
    alert('Install metamask')
  }
}

const voteCasted = () => {
  alert('vote casted'!)
}
