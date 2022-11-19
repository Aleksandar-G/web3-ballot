import React, { useState, useEffect } from 'react'
import { checkBlockchainConnection, getAllCandidates, castVote } from '../ether'
import Row from './Row'
import '../styles/ballot.css'

interface props {
  setStep: React.Dispatch<React.SetStateAction<number>>
  setVoteCasted: React.Dispatch<React.SetStateAction<boolean>>
  setVoteProcessed: React.Dispatch<React.SetStateAction<boolean>>
}

function Ballot({ setStep, setVoteCasted, setVoteProcessed }: props) {
  const [selectedCandidate, setSelectedCandidate] = useState(-1)
  const [candidates, setCandidates] = useState<string[]>([])

  const checkboxHandle = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedCandidate(parseInt(event.target.value))

    // Uncheck the other checkboxes
    let myCheckboxes = document.getElementsByClassName('checkbox')
    Array.prototype.forEach.call(myCheckboxes, (el) => {
      el.checked = false
    })
    event.target.checked = true
  }

  const initializeBallot = () => {
    checkBlockchainConnection()
      ? getAllCandidates().then((res) => setCandidates(res))
      : alert('install metamask')
  }

  // Increment voting step and cast vote
  const handleVoteButton = () => {
    castVote(selectedCandidate, setVoteCasted, setVoteProcessed)
  }

  // Fetch candidates
  useEffect(() => {
    initializeBallot()
  }, [])

  return (
    <>
      {candidates.length > 0 ? (
        <div className="ballot">
          {candidates.map((can, index) => (
            <Row checkboxHandle={checkboxHandle} value={index} name={can} />
          ))}
          <button
            type="button"
            className="voteButton"
            onClick={() => handleVoteButton()}
          >
            Vote
          </button>
        </div>
      ) : (
        <span>Loading...</span>
      )}
    </>
  )
}

export default Ballot
