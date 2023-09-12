import React from "react";
import { range } from "../../utils";

function Cell({ letter, status }) {
  return <span className={status ? `cell ${status}` : "cell"}>{letter}</span>;
}

function Guess({ guess }) {
  return (
    <p className="guess">
      {range(5).map((x) => (
        <Cell
          letter={guess ? guess.letters[x].letter : undefined}
          status={guess ? guess.letters[x].status : undefined}
          key={x}
        />
      ))}
    </p>
  );
}

export default Guess;
