import React from 'react'
import Question from '../question/Question';
import "./Slide.scss";

export default function Slide({item}) {
  console.log(item)
  return (
    <div className="slide">
        <img className='background' src="" alt="" />
        <div className="container">
          <Question text={item.question}/>
          <div className="responses">
            {
              item.responses.map(res=><button>{res.response.text}</button>)
            }
          </div>
        </div>
    </div>
  )
}
