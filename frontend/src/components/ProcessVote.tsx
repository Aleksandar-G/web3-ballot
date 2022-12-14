import React, { useEffect, useState } from 'react'
import Button from 'react-bootstrap/Button'
import Alert from 'react-bootstrap/Alert'
import Modal from 'react-bootstrap/Modal'
import { PieChart } from './PieChart'
import { getAllCandidates, getVotes } from '../ether'

interface props {
  voteProcessed: boolean
}

export const ProcessVote = ({ voteProcessed }: props) => {
  const [showModal, setShowModal] = useState(false)
  const [chartData, setChartData] = useState<any>()

  const handleCloseModal = () => setShowModal(false)
  const handleShowModal = () => setShowModal(true)

  useEffect(() => {
    getVotes().then((votes) => {
      getAllCandidates().then((candidates) => {
        setChartData({
          labels: candidates,
          datasets: [
            {
              label: '# of Votes',

              data: votes,
              borderWidth: 1,
            },
          ],
        })
      })
    })
  }, [])

  return (
    <>
      <div>
        {voteProcessed ? (
          <Alert className="w-75 mx-auto mt-3" variant="success">
            You have volted
          </Alert>
        ) : (
          <Alert className="w-75 mx-auto mt-3" variant="warning">
            Your vote is being proceessed...
          </Alert>
        )}
      </div>
      <div className="text-center">
        <Button
          onClick={() => {
            handleShowModal()
          }}
          variant="primary"
        >
          View Graph
        </Button>
      </div>

      <Modal
        show={showModal}
        onHide={handleCloseModal}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Vote distribution</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <PieChart data={chartData} />
        </Modal.Body>
      </Modal>
    </>
  )
}
