import React from "react";
import { range } from "../../utils";

function Guess({ letters }) {
  return (
    <p className="guess">
      {range(5).map((x) => (
        <span className={"cell " + letters[x].status} key={x}>
          {letters[x].letter}
        </span>
      ))}
    </p>
  );
}

export default Guess;
