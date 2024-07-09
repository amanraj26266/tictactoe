import React from 'react'
import "./resetbutton.css"

const ResetButton = ({ resetBoard }) => {
  return (
    <div className='resetButton'>
      <button className='resetbtn' onClick={resetBoard}>Reset</button>
    </div>
  )
}

export default ResetButton