import React, { useState } from "react";
import Title from "../../components/Title/Title";
import styled from "styled-components";

const StyledButton = styled.button`
  font-size: 1em;
  margin: 1em;
  padding: 1em;
  border: none;
  cursor: pointer;
`;

const StyledSpan = styled.span`
  font-size: 1.5em;
`;

const Counter = () => {
  const [count, setCount] = useState(0);

  const decrement = () => setCount(count - 1);

  const increment = () => setCount(count + 1);

  return (
    <div data-testid="counterContainer">
      <Title title="Counter" />
      <StyledButton onClick={decrement}>-</StyledButton>
      <StyledSpan data-testid="countValue">{count}</StyledSpan>
      <StyledButton onClick={increment}>+</StyledButton>
    </div>
  );
};

export default Counter;
