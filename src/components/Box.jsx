import React from 'react'
import './box.css'

const Box = ({ value, onClick }) => {
  const style = value === "X" ? "box X" : "box O";
  return (
    <>
      <button className={style} onClick={onClick}>{value}</button>
    </>

  )
}

export default Box