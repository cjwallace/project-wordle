import React from "react";

import { NUM_OF_GUESSES_ALLOWED } from "../../constants";
import { WORDS } from "../../data";
import { checkGuess } from "../../game-helpers";
import { range, sample } from "../../utils";

import Input from "../Input";
import WinBanner from "../WinBanner";
import GuessResults from "../GuessResults";
import LoseBanner from "../LoseBanner/LoseBanner";

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function padGuessesWithBlanks(guesses) {
  const numBlankGuesses = NUM_OF_GUESSES_ALLOWED - guesses.length;
  const blankLetters = range(5).map(() => [{ letter: "", status: "" }]);
  const blankGuesses = range(numBlankGuesses).map(() => ({
    guess: "",
    id: crypto.randomUUID(),
    letters: blankLetters,
  }));
  const allGuesses = [...guesses, ...blankGuesses];
  return allGuesses;
}

function Game() {
  const [guesses, setGuesses] = React.useState([]);
  // won, lost, or play
  const [gameState, setGameState] = React.useState("play");
  const allGuesses = padGuessesWithBlanks(guesses);

  const handleGuess = (guess) => {
    const letters = checkGuess(guess, answer);
    const newGuesses = [
      ...guesses,
      { guess: guess, letters: letters, id: crypto.randomUUID() },
    ];
    setGuesses((guesses) => newGuesses);
    setGameState((_) => checkGameState(newGuesses));
  };

  const checkGameState = (guesses) => {
    const lastGuess = guesses[guesses.length - 1];
    const isWin = lastGuess.letters.every(
      (letter) => letter.status === "correct"
    );
    const isLose =
      guesses.length === NUM_OF_GUESSES_ALLOWED &&
      guesses[NUM_OF_GUESSES_ALLOWED - 1].letters.some(
        (letter) => letter.status !== "correct"
      );

    return isWin ? "win" : isLose ? "lose" : "play";
  };

  return (
    <React.Fragment>
      <GuessResults guesses={allGuesses} />
      <Input handleGuess={handleGuess} disabled={gameState !== "play"} />
      {gameState === "win" && <WinBanner numGuesses={guesses.length} />}
      {gameState === "lose" && <LoseBanner answer={answer} />}
    </React.Fragment>
  );
}

export default Game;
