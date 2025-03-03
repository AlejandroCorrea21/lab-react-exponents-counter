import { useState } from "react";

const Counter = ({ count, setCount, exponent, setExponent }) => {

  const decrement = () => setCount((prevCount) => prevCount - 1);
  const increment = () => setCount((prevCount) => prevCount + 1);

  const decrementExponent = () => setExponent((prevExponent) => prevExponent - 1);
  const incrementExponent = () => setExponent((prevExponent) => prevExponent + 1);

  return (
    <>
      <div className="counter-container">
        <p className="counter-value">{count}</p>
        <button className="counter-button" onClick={decrement}>-</button>
        <button className="counter-button" onClick={increment}>+</button>
      </div>

      <br />

      <div>
        <p className="counter-value">{exponent}</p>
        <button className="counter-button" onClick={decrementExponent}>-</button>
        <button className="counter-button" onClick={incrementExponent}>+</button>
      </div>
    </>
  );
};

export default Counter;

