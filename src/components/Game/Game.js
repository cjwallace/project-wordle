import React from "react";

import { NUM_OF_GUESSES_ALLOWED } from "../../constants";
import { WORDS } from "../../data";
import { checkGuess } from "../../game-helpers";
import { sample } from "../../utils";

import Input from "../Input";
import WinBanner from "../WinBanner";
import GuessResults from "../GuessResults";
import LoseBanner from "../LoseBanner/LoseBanner";

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [guesses, setGuesses] = React.useState([]);
  // won, lost, or playing
  const [gameState, setGameState] = React.useState("playing");

  const handleGuess = (guess) => {
    const letters = checkGuess(guess, answer);
    const newGuesses = [
      ...guesses,
      { guess: guess, letters: letters, id: crypto.randomUUID() },
    ];
    setGuesses(newGuesses);

    if (guess === answer) {
      setGameState("won");
    } else if (newGuesses.length >= NUM_OF_GUESSES_ALLOWED) {
      setGameState("lost");
    }
  };

  return (
    <React.Fragment>
      <GuessResults guesses={guesses} />
      <Input handleGuess={handleGuess} disabled={gameState !== "playing"} />
      {gameState === "won" && <WinBanner numGuesses={guesses.length} />}
      {gameState === "lost" && <LoseBanner answer={answer} />}
    </React.Fragment>
  );
}

export default Game;
