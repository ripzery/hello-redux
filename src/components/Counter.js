import React from 'react'

const Counter = (props) => (
  <div className="counter">
    <h1>{props.label}</h1>
    <h2>{props.counter}</h2>
    <button onClick={props.addCounter}>+2</button>
  </div>
);

export default Counter