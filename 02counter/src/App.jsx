import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  let [counter, setCounter] = useState(5);

  // let counter = 5;

  const addValue = () => {
    if (counter < 20) {
      setCounter(counter + 1);
    } //if interviewer copy and paste then and said what is the answer that time we show if we change counter to prevcounter that time use state not take bunch they call the previous state
    /*
    setCounter((prevCounter) => prevCounter + 1);
    setCounter((prevCounter) => prevCounter + 1);
    setCounter((prevCounter) => prevCounter + 1);
    setCounter((prevCounter) => prevCounter + 1);
    */
  };

  const removeValue = () => {
    if (counter > 0) {
      setCounter(counter - 1);
    }
  };

  return (
    <>
      <h1>Chai or React | Jay</h1>
      <h2>Counter value : {counter}</h2>

      <button onClick={addValue}>Add value</button>
      <br />
      <button className="button2" onClick={removeValue}>
        remove value
      </button>
      <p className="footerbg">Footer: {counter}</p>
    </>
  );
}

export default App;
