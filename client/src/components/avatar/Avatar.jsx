import React from 'react'
import "./Avatar.scss"
import im0 from "../../images/pictures/pp/0.svg";
import im1 from "../../images/pictures/pp/1.svg";
import im2 from "../../images/pictures/pp/2.svg";
import im3 from "../../images/pictures/pp/3.svg";

export default function Avatar({id=0}) {
  if (id=0){
    return(
      <div className="avatar">
        <img src={im0} alt="" />
      </div>
    )
  }else if(id=1){
    return(
      <div className="avatar">
        <img src={im1} alt="" />
      </div>
    )
  }else if(id=2){
    return(
      <div className="avatar">
        <img src={im2} alt="" />
      </div>
    )
  }else if(id=3){
    return(
      <div className="avatar">
        <img src={im3} alt="" />
      </div>
    )
  }
}
