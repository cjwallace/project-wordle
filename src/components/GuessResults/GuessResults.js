import React from "react";
import Guess from "../Guess/Guess";

import { NUM_OF_GUESSES_ALLOWED } from "../../constants";
import { range } from "../../utils";

function GuessResults({ guesses }) {
  return (
    <div className="guess-results">
      {range(NUM_OF_GUESSES_ALLOWED).map((x) => (
        <Guess letters={guesses[x].letters} key={guesses[x].id} />
      ))}
    </div>
  );
}

export default GuessResults;
