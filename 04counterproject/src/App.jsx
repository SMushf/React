import { useState } from "react";

function App() {

  let [counter, setCounter] = useState(0)

  function funcIncrement() {
    counter++;

    if(counter>10){
      return counter = 10 & alert("you exceeded its limit");
    }
    setCounter(counter)
  }

  function funcDecrement() {
    counter--;

    if(counter<0){
      return counter = 0;
    }
    setCounter(counter)
  }

  return (
    <>
      <div id='content'>current counting: {counter}</div>
      <button onClick={funcIncrement}>Increment</button>
      <button onClick={funcDecrement}>Decrement</button>
    </>
  )
}

export default App
