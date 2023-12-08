import React from "react";
import "./Score.scss";
import leaf from "../../images/icons/leaf.svg";

export default function Score({ score }) {
  return (
    <div className="score">
      <div className="leaf">
        <svg className="icon"
          width="32"
          height="25"
          viewBox="0 0 32 25"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M10.9848 24.6623C10.9848 24.6623 9.24291 5.69306 31.6972 3.34204C31.6972 3.34204 35.6614 22.2758 14.9027 24.6623C14.9027 24.6623 18.5817 17.4633 22.8362 14.3423C22.8362 14.3423 17.0916 16.1752 10.9848 24.6623Z"
            fill="#157067"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M8.38996 23.2989C8.38996 23.2989 -0.530075 22.1947 0.0248591 11.5073C0.0248591 11.5073 11.0054 12.5201 10.0753 22.1132C10.0753 22.1132 7.85045 18.0874 4.15345 17.0174C4.15345 17.0174 7.92495 20.728 8.38996 23.2989Z"
            fill="#157067"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M10.5888 16.674C10.5888 16.674 1.09327 8.51182 10.1315 0C10.1315 0 14.2729 3.59808 14.201 9.66896C14.201 9.66896 12.8805 11.1313 12.1534 12.5839C12.1534 12.5839 10.1829 11.1657 9.86944 8.36435C9.86944 8.36435 9.35818 12.0577 11.4109 14.175C11.4109 14.175 10.7198 15.7141 10.5888 16.674Z"
            fill="#157067"
          />
        </svg>
      </div>
      <span style={{ height: `${100 - ((score - 11.7) / 4) * 100}%` }}></span>
    </div>
  );
}
