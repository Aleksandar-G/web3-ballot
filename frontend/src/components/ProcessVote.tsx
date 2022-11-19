import React, { useEffect } from 'react'
import Button from 'react-bootstrap/Button'
import Alert from 'react-bootstrap/Alert'

interface props {
  voteProcessed: boolean
}

export const ProcessVote = ({ voteProcessed }: props) => {
  useEffect(() => {
    console.log(voteProcessed)
  }, [voteProcessed])

  return (
    <div>
      {voteProcessed ? (
        <Alert variant="success">Vote processed CONGRATS</Alert>
      ) : (
        <Alert variant="warning">vote is being proceessed...</Alert>
      )}

      <Button variant="primary">View Graph</Button>
    </div>
  )
}
