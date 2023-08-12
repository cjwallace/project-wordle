import React from "react";
import { range } from "../../utils";

function Guess({ guess }) {
  return (
    <p className="guess">
      {range(5).map((x) => (
        <span className="cell" key={x}>
          {guess.guess[x]}
        </span>
      ))}
    </p>
  );
}

export default Guess;
