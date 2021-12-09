import logo from "./logo.svg";
import "./App.css";
import React, { useState } from "react";
import SquareNumber from "./components/SquareNumber";
import InputInformation from "./components/InputInformation";

function App() {
  const [count, setCount] = useState(0)
  return (
    <div className="App">
      <p> You have click {count} times </p>
      <button onClick ={ () => setCount(count +1)}>Click on Me</button>
      <SquareNumber/>
      <InputInformation/>
    </div>
  );
}

export default App;
