import React from 'react'
import "./Score.scss"
import leaf from "../../images/icons/leaf.svg"

export default function Score({score}) {
  return (
    <div className='score'>
      <div className="leaf">
        <img src={leaf} alt="" />
      </div>
      <span style={{height:`${100 - (((score-11.7) / 4) * 100)}%`}}></span>
    </div>
  )
}
