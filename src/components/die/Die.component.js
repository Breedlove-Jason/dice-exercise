import React, { useState } from "react";
import "./Die.styles.css";

function Die(props) {
  return (
    <div>
      <i
        className={`Die fas fa-dice-${props.face} ${
          props.rolling ? "shaking" : ""
        }`}
      ></i>
    </div>
  );
}

export default Die;
