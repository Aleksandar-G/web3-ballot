import React, { useState, useEffect } from 'react'
import { checkBlockchainConnection, getAllCandidates, castVote } from '../ether'
import Row from './Row'
import '../styles/ballot.css'
import { Alert } from 'react-bootstrap'

interface props {
  setStep: React.Dispatch<React.SetStateAction<number>>
  setVoteCasted: React.Dispatch<React.SetStateAction<boolean>>
  setVoteProcessed: React.Dispatch<React.SetStateAction<boolean>>
}

function Ballot({ setStep, setVoteCasted, setVoteProcessed }: props) {
  const [selectedCandidate, setSelectedCandidate] = useState(-1)
  const [candidates, setCandidates] = useState<string[]>([])
  const [error, setError] = useState('')

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
      ? getAllCandidates()
          .then((res) => setCandidates(res))
          .catch((res) =>
            setError(
              'Make sure you are on Mumbai test network and refresh the page',
            ),
          )
      : setError(
          'Install Metamast and create an account before using the application',
        )
  }

  // Increment voting step and cast vote
  const handleVoteButton = () => {
    castVote(selectedCandidate, setVoteCasted, setVoteProcessed)
      .then()
      .catch(() =>
        setError(
          'Make sure you are on Mumbai test network and refresh the page',
        ),
      )
  }

  // Fetch candidates
  useEffect(() => {
    initializeBallot()
  }, [])

  return (
    <>
      <Alert variant="danger" show={error !== ''}>
        {error}
      </Alert>
      {candidates?.length > 0 ? (
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
        error === '' && <span>Loading...</span>
      )}
    </>
  )
}

export default Ballot
