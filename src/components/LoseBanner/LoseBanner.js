import React from "react";

function LoseBanner({ answer }) {
  return (
    <div className="sad banner">
      <p>
        <strong>Sorry!</strong> The answer was <strong>{answer}</strong>.
      </p>
    </div>
  );
}

export default LoseBanner;
