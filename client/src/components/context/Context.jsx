import React from 'react'
import "./Context.scss"

export default function Context({text, step=0, setStep}) {
  
  return (
    <div className="lg-container context">
        <h1>{text}</h1>
        <button className="next" onClick={() => setStep(step + 1)}>
            Suivant
        </button>
    </div>
  )
}
