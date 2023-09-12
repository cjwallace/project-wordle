import React from "react";

function Input({ handleGuess, disabled }) {
  const [guess, setGuess] = React.useState("");

  const handleChange = (event) => {
    setGuess(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log({ guess: guess.toUpperCase() });
    handleGuess(guess.toUpperCase());
    setGuess("");
  };

  return (
    <form className="guess-input-wrapper" onSubmit={handleSubmit}>
      <label htmlFor="guess-input">Enter guess (5 characters):</label>
      <input
        id="guess-input"
        type="text"
        value={guess}
        onChange={handleChange}
        pattern="[A-Za-z]{5}"
        title="5-letter word"
        disabled={disabled}
      />
    </form>
  );
}

export default Input;
