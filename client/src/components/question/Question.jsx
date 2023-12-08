import React from 'react'
import "./Question.scss"

export default function Question({text}) {
  return (
    <div className="question">
      <h2>{text}</h2>
    </div>
  )
}
