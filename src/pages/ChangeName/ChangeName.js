import React, { useState, useRef, useEffect } from "react";
import Title from "../../components/Title/Title";

const ChangeName = () => {
  const [name, setName] = useState(
    window.localStorage.getItem("name") || "John Doe"
  );

  const nameRef = useRef();

  const submitRefButton = () => setName(nameRef.current.value);

  useEffect(() => {
    window.localStorage.setItem("name", name);
  }, [name]);
  return (
    <div data-testid="changeNameContainer">
      <Title title="Change Name" />
      <p data-testid="nameValue">{name}</p>
      <input data-testid="inputName" ref={nameRef} type="text" />
      <button
        data-testid="submitRefButton"
        type="button"
        onClick={submitRefButton}>
        Submit
      </button>
    </div>
  );
};

export default ChangeName;
