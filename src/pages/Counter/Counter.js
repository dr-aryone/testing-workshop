import React, { useState } from "react";
import Title from "../../components/Title/Title";

const Counter = () => {
  const [count, setCount] = useState(0);

  const decrement = () => setCount(count - 1);

  const increment = () => setCount(count + 1);

  return (
    <div data-testid="counterContainer">
      <Title title="Counter" />
      <button onClick={decrement}>-</button>

      <span data-testid="countValue">{count}</span>
      <button onClick={increment}>+</button>
    </div>
  );
};

export default Counter;
