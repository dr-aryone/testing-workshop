import React, { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);

  const decrement = () => setCount(count - 1);

  const increment = () => setCount(count + 1);

  return (
    <div data-testid="counterContainer">
      <h2>Counter</h2>
      <p data-testid="countValue">{count}</p>
      <button data-testid="decrementButton" type="button" onClick={decrement}>
        -
      </button>
      <button data-testid="incrementButton" type="button" onClick={increment}>
        +
      </button>
    </div>
  );
};

export default Counter;
