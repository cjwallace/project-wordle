import React from "react";

function Input() {
  const [guess, setGuess] = React.useState("");

  const handleChange = (event) => {
    setGuess(event.target.value);
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    if (guess.length === 5) {
      console.log({ guess: guess.toUpperCase() });
      setGuess("");
    } else {
      console.log("Guess must be 5 characters long.");
    }
  };

  return (
    <form className="guess-input-wrapper" onSubmit={handleSubmit}>
      <label htmlFor="guess-input">Enter guess (5 characters):</label>
      <input
        id="guess-input"
        type="text"
        value={guess}
        onChange={(e) => handleChange(e)}
        pattern="[A-Za-z]{5}"
        title="5-letter word"
      />
    </form>
  );
}

export default Input;
