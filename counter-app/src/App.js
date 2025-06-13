// Importing useState
import react, { useState } from "react"

const App = () => {
  // Destructuring initialState and setState from useState()
  const [initialState, setState] = useState(0);

  // Creating an incremental function
  const incrementFunc = () => {
    // setState contains the previous value which is in useState (0) for now
    setState( (previousValue) => previousValue + 1 );
  }

  // Creating a decremental function
  const decrementFunc = () => {
    // setState contains the previous value which is in useState (0) for now
    setState( (previousValue) => previousValue - 1 );
  }

  // Creating a reset function
  const reserFunc = () => {
    // setState contains the previous value which is in useState (0) for now
    setState( (0) );
  }

  return (
    <div>
      <h1> Set Count: {initialState} </h1>

      <button onClick={incrementFunc}> Increase Count </button>
      <button onClick={decrementFunc}> Decrease Count </button>
      <button onClick={reserFunc}> Reset Count </button>
    </div>
  )
}

export default App