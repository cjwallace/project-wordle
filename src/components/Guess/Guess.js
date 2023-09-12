import React from "react";
import { range } from "../../utils";

function Cell({ letter, status }) {
  return <span className={status ? "cell " + status : "cell"}>{letter}</span>;
}

function Guess({ letters }) {
  return (
    <p className="guess">
      {range(5).map((x) => (
        <Cell letter={letters[x].letter} status={letters[x].status} key={x} />
      ))}
    </p>
  );
}

export default Guess;
