import React from "react";
import Guess from "../Guess/Guess";
import { range } from "../../utils";
import { checkGuess } from "../../game-helpers";
import { NUM_OF_GUESSES_ALLOWED } from "../../constants";

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

function GuessResults({ guesses, answer }) {
  const guessesWithLetters = guesses.map((guess) => ({
    ...guess,
    letters: checkGuess(guess.guess, answer),
  }));

  const allGuesses = padGuessesWithBlanks(guessesWithLetters);

  return (
    <div className="guess-results">
      {range(NUM_OF_GUESSES_ALLOWED).map((x) => (
        <Guess
          letters={allGuesses[x].letters}
          answer={answer}
          key={allGuesses[x].id}
        />
      ))}
    </div>
  );
}

export default GuessResults;
