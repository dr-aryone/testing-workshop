import React from "react";
import ReactDOM from "react-dom";
import { render, fireEvent } from "@testing-library/react";
import ChangeName from "./ChangeName";

describe("ChangeName Page", () => {
  it("Renders without crashing", () => {
    ReactDOM.render(<ChangeName />, document.createElement("div"));

    ReactDOM.unmountComponentAtNode(document.createElement("div"));
  });

  it("Loads component", () => {
    const { getByTestId } = render(<ChangeName />);

    const changeName = getByTestId("changeNameContainer");

    expect(changeName).toBeInTheDocument();
  });

  it("Match Snapshot", () => {
    const { firstChild } = render(<ChangeName />);

    expect(firstChild).toMatchSnapshot();
  });

  it("Loads with the right initial value", () => {
    const { getByTestId } = render(<ChangeName />);

    const nameValue = getByTestId("nameValue");

    expect(nameValue.textContent).toBe("John Doe");
  });

  it("After submitting a name via the input field changes the name state value", () => {
    const { getByTestId, rerender } = render(<ChangeName />);

    const nameValue = getByTestId("nameValue");

    const inputName = getByTestId("inputName");

    const submitButton = getByTestId("submitRefButton");

    const newName = "Ben";

    fireEvent.change(inputName, { target: { value: newName } });

    fireEvent.click(submitButton);

    expect(nameValue.textContent).toEqual(newName);

    rerender(<ChangeName />);

    expect(window.localStorage.getItem("name")).toBe(newName);
  });
});
