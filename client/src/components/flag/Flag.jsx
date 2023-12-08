import React from 'react'
import "./Flag.scss"
import im0 from "../../images/pictures/flag/0.svg";
import im1 from "../../images/pictures/flag/1.svg";
import im2 from "../../images/pictures/flag/2.svg";
import im3 from "../../images/pictures/flag/3.svg";

export default function Flag({step, setStep, user, setUser}) {
    const handleClick = (id) => {
        setUser({ ...user, flag : id });
        setStep(step + 1);
    };
  return (
    <div className="lg-container flag">
        <h1>Choisissez votre drapeau</h1>
        <div className="flags">
            <div className="choice">
                <img src={im0} alt="" onClick={()=>handleClick(0)}/>
            </div>
            <div className="choice">
                <img src={im1} alt="" onClick={()=>handleClick(1)}/>
            </div>
            <div className="choice">
                <img src={im2} alt="" onClick={()=>handleClick(2)}/>
            </div>
            <div className="choice">
                <img src={im3} alt="" onClick={()=>handleClick(3)}/>
            </div>
        </div>
    </div>
  )
}
