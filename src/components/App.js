import React, { useReducer } from 'react'
import { counterReducer } from '../reducers/counterReducer';
import '../styles/App.css';
const App = () => {

  const initialState = 0;
const [state,dispatch] = useReducer(counterReducer, initialState)
  return (
    <div id="main">
      <p>{state}</p>
      <div>
        <button onClick={() => dispatch({type: "INCREMENT"})}>Increase</button>
        <button onClick={() => dispatch({type: "DECREMENT"})}>Decrease</button>
      </div>


    </div>
  )
}


export default App;
