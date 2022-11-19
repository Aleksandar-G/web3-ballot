import React from 'react'

interface props {
  checkboxHandle: (event: React.ChangeEvent<HTMLInputElement>) => void
  value: number
  name: string
}

function Row({ checkboxHandle, value, name }: props) {
  return (
    <div className="ballotRow">
      <input
        className="checkbox"
        type="checkbox"
        value={value}
        onChange={(e) => {
          checkboxHandle(e)
        }}
      ></input>
      <span className="checkmark"></span>
      <p className="my-auto mx-3">{name}</p>
    </div>
  )
}

export default Row
