import React, { useState, useEffect } from 'react'
import Ballot from './Ballot'
import { ProcessVote } from './ProcessVote'

export const Election = () => {
  const [step, setStep] = useState(0)
  const [voteCasted, setVoteCasted] = useState(false)
  const [voteProcessed, setVoteProcessed] = useState(false)

  useEffect(() => {
    voteCasted && setStep(1)
  }, [voteCasted])

  switch (step) {
    case 0:
      return (
        <Ballot
          setStep={setStep}
          setVoteCasted={setVoteCasted}
          setVoteProcessed={setVoteProcessed}
        />
      )
    case 1:
      return <ProcessVote voteProcessed={voteProcessed} />
    default:
      return <></>
  }
}
