import React from 'react'
import './Button.css'

const SpaceThemedButton = ({onClick, value}) => {
  return (
    <button className="button" onClick={onClick} data-value={value}></button>
  )
}

export default SpaceThemedButton