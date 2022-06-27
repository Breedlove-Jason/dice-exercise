import React, { useState } from "react";
import Die from "../die/Die.component";
import "./RollDice.styles.css";

function RollDice(props) {
  const diceSides = {
    sides: ["one", "two", "three", "four", "five", "six"],
  };
  const [face, setFace] = useState({ die1: "one", die2: "one" });
  function roll() {
    setFace({
      die1: diceSides.sides[Math.floor(Math.random() * 6)],
      die2: diceSides.sides[Math.floor(Math.random() * 6)],
    });
  }

  return (
    <div className={"RollDice"}>
      <div className={"RollDice-container"}>
        <Die face={face.die1} />
        <Die face={face.die2} />
      </div>
      <button onClick={roll}>Roll Dice</button>
    </div>
  );
}

export default RollDice;
