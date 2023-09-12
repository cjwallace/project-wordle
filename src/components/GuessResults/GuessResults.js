import React from "react";
import Guess from "../Guess/Guess";

import { NUM_OF_GUESSES_ALLOWED } from "../../constants";
import { range } from "../../utils";

function GuessResults({ guesses }) {
  return (
    <div className="guess-results">
      {range(NUM_OF_GUESSES_ALLOWED).map((x) => (
        <Guess guess={guesses[x]} key={x} />
      ))}
    </div>
  );
}

export default GuessResults;
