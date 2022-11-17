import React, { useState, useEffect } from 'react'
import { getAllCandidates, handleVote } from '../ether'
import Row from './Row'
import '../styles/ballot.css'

function Ballot() {
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

  useEffect(() => {
    getAllCandidates().then((res) => setCandidates(res))
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
            onClick={() => handleVote(selectedCandidate)}
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
