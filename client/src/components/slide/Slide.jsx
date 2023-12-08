import React from "react";
import Question from "../question/Question";
import "./Slide.scss";
import im0 from "../../images/pictures/bg/aeroport.svg";
import im1 from "../../images/pictures/bg/bureau.svg";
import im2 from "../../images/pictures/bg/conf.svg";
import im3 from "../../images/pictures/bg/conf2.svg";
import im4 from "../../images/pictures/bg/conf3.svg";
import im5 from "../../images/pictures/bg/couloir.svg";
import im6 from "../../images/pictures/bg/train_station.svg";

import pnj0 from "../../images/pictures/pnj/dirigeant.svg";
import pnj1 from "../../images/pictures/pnj/gare.svg";
import pnj2 from "../../images/pictures/pnj/macron.svg";
import pnj3 from "../../images/pictures/pnj/mexique.svg";
import pnj4 from "../../images/pictures/pnj/people2.svg";
import pnj5 from "../../images/pictures/pnj/people3.svg";
import pnj6 from "../../images/pictures/pnj/usa.svg";

export default function Slide({ item, step, setStep, user, setUser }) {
  const handleClick = (bonus) => {
    setUser({ ...user, score: user.score + bonus });
    setStep(step + 1);
  };

  const getImg = () => {
    switch (item.image) {
      case "aeroport.svg":
        return im0;
      case "bureau.svg":
        return im1;
      case "conf.svg":
        return im2;
      case "conf2.svg":
        return im3;
      case "conf3.svg":
        return im4;
      case "couloir.svg":
        return im5;
      case "train_station.svg":
        return im6;
      default:
        return "";
    }
  };

  const getPnj = () => {
    switch (item.pnj) {
      case "dirigeant.svg":
        return pnj0;
      case "gare.svg":
        return pnj1;
      case "macron.svg":
        return pnj2;
      case "mexique.svg":
        return pnj3;
      case "people2.svg":
        return pnj4;
      case "people3.svg":
        return pnj5;
      case "usa.svg":
        return pnj6;
      default:
        return "";
    }
  };

  return (
    <div className="slide">
      {
        getImg() && <img className="background" src={getImg()} alt="" />
      }
      {
        getPnj() && <img className="pnj" src={getPnj()} alt="" />
      }
      <div className="container">
        <Question text={item.question} />
        <div className="responses">
          {item.responses.map((res) => (
            <button onClick={() => handleClick(res.response.score)}>
              {res.response.text}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
