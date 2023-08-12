import React from "react";
import Guess from "../Guess/Guess";
import { range } from "../../utils";
import { NUM_OF_GUESSES_ALLOWED } from "../../constants";

function GuessResults({ guesses }) {
  // add some blank guesses to fill space
  const blankGuesses = range(NUM_OF_GUESSES_ALLOWED - guesses.length).map(
    () => ({ guess: "", id: crypto.randomUUID() })
  );
  // concat blank guesses to actual guesses
  const allGuesses = [...guesses, ...blankGuesses];

  return (
    <div className="guess-results">
      {range(NUM_OF_GUESSES_ALLOWED).map((x) => (
        <Guess guess={allGuesses[x]} key={allGuesses[x].id} />
      ))}
    </div>
  );
}

export default GuessResults;
