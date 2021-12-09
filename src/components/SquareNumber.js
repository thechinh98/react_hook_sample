import React, { useState } from "react";

function SquareNumber() {
  const [number, setNumber] = useState(1);
  return (
    <div>
      <p>{Math.pow(number, 2)} is Square number</p>
      <button onClick={() => setNumber(number + 1)}>
        Press to get bigger number
      </button>
    </div>
  );
}

export default SquareNumber;
