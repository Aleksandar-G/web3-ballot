import React, { useState } from 'react'
import Row from './Row'

function Ballot() {
  const [selectedCandidate, setSelectedCandidate] = useState('')

  const checkboxHandle = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedCandidate(event.target.value)

    // Uncheck the other checkboxes
    let myCheckboxes = document.getElementsByClassName('checkbox')
    Array.prototype.forEach.call(myCheckboxes, (el) => {
      el.checked = false
    })
    event.target.checked = true
  }

  return (
    <div className="ballot">
      <Row checkboxHandle={checkboxHandle} value={1} name="test candidate 1" />
      <Row checkboxHandle={checkboxHandle} value={2} name="test candidate 2" />
      <Row checkboxHandle={checkboxHandle} value={3} name="test candidate 3" />

      <button type="button">Vote</button>
    </div>
  )
}

export default Ballot
