import React, { useState } from "react";
import Die from "../die/Die.component";
import "./RollDice.styles.css";

function RollDice(props) {
  const diceSides = {
    sides: ["one", "two", "three", "four", "five", "six"],
  };
  const [face, setFace] = useState({
    die1: "one",
    die2: "one",
  });
  const [isRolling, setIsRolling] = useState(false);

  function roll() {
    setFace({
      die1: diceSides.sides[Math.floor(Math.random() * 6)],
      die2: diceSides.sides[Math.floor(Math.random() * 6)],
    });
    setIsRolling(true);
    setTimeout(() => {
      setIsRolling(false);
      face.isRolling = false;
    }, 1000);
  }

  return (
    <div className={"RollDice"}>
      <div className={"RollDice-container"}>
        <Die face={face.die1} rolling={isRolling} />
        <Die face={face.die2} rolling={isRolling} />
      </div>
      <button onClick={roll} disabled={isRolling}>
        {isRolling ? "Rolling" : "Roll Dice"}
      </button>
    </div>
  );
}

export default RollDice;
