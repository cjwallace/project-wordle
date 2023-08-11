import React from "react";

import { sample } from "../../utils";
import { WORDS } from "../../data";

import Input from "../Input";
import GuessHistory from "../GuessHistory/GuessHistory";

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [guesses, setGuesses] = React.useState([]);

  return (
    <React.Fragment>
      <GuessHistory guesses={guesses} />
      <Input setGuesses={setGuesses} />
    </React.Fragment>
  );
}

export default Game;
