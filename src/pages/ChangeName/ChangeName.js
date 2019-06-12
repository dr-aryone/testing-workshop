import React, { useState, useRef, useEffect } from "react";
import Title from "../../components/Title/Title";
import styled from "styled-components";

const StyledInput = styled.input`
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
  padding: 10px;
  text-align: center;
  border: 0;
`;

const StyledButton = styled.button`
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
  padding: 10px;
  text-align: center;
  border: 0;
  cursor: pointer;
`;

const ChangeName = () => {
  const [name, setName] = useState(
    window.localStorage.getItem("name") || "John Doe"
  );

  const nameRef = useRef();

  const submitRefButton = () => {
    setName(nameRef.current.value);

    nameRef.current.value = "";
  };

  useEffect(() => {
    window.localStorage.setItem("name", name);
  }, [name]);
  return (
    <div data-testid="changeNameContainer">
      <Title title="Change Name" />
      <p data-testid="nameValue">{name}</p>
      <StyledInput data-testid="inputName" ref={nameRef} type="text" />
      <StyledButton
        data-testid="submitRefButton"
        type="button"
        onClick={submitRefButton}>
        Submit
      </StyledButton>
    </div>
  );
};

export default ChangeName;
