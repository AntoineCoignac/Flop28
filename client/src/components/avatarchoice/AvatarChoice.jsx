import React from "react";
import "./AvatarChoice.scss";
import im0 from "../../images/pictures/pp/0.svg";
import im1 from "../../images/pictures/pp/1.svg";
import im2 from "../../images/pictures/pp/2.svg";
import im3 from "../../images/pictures/pp/3.svg";

export default function AvatarChoice({step, setStep, user, setUser}) {
  const handleClick = (id) => {
    setUser({ ...user, avatar: id });
    setStep(step + 1);
  };
  return (
    <div className="lg-container avatar-choice">
      <h1>Choisissez votre avatar</h1>
      <div className="avatars">
        <div className="choice" onClick={()=>handleClick(0)}>
          <img src={im0} alt="" />
        </div>
        <div className="choice" onClick={()=>handleClick(1)}>
          <img src={im1} alt="" />
        </div>
        <div className="choice" onClick={()=>handleClick(2)}>
          <img src={im2} alt="" />
        </div>
        <div className="choice" onClick={()=>handleClick(3)}>
          <img src={im3} alt="" />
        </div>
      </div>
    </div>
  );
}
