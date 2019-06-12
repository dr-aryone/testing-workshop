import React from "react";
import ReactDOM from "react-dom";
import { render, fireEvent } from "@testing-library/react";
import Counter from "./Counter";

describe("Counter Page", () => {
  it("Renders without crashing", () => {
    ReactDOM.render(<Counter />, document.createElement("div"));

    ReactDOM.unmountComponentAtNode(document.createElement("div"));
  });

  it("Loads component", () => {
    const { getByTestId } = render(<Counter />);

    const counter = getByTestId("counterContainer");

    expect(counter).toBeInTheDocument();
  });

  it("Match Snapshot", () => {
    const { firstChild } = render(<Counter />);

    expect(firstChild).toMatchSnapshot();
  });

  it("Loads with initial counter as 0", () => {
    const { getByTestId } = render(<Counter />);

    const countValue = getByTestId("countValue");

    expect(countValue.textContent).toBe("0");
  });

  it("Increment work", () => {
    const { getByTestId, getByText } = render(<Counter />);

    const countValue = getByTestId("countValue");

    const increment = getByText("+");

    expect(countValue.textContent).toBe("0");

    for (let i = 0; i < 10; i += 1) fireEvent.click(increment);

    expect(countValue.textContent).toBe("10");
  });

  it("Decrement work", () => {
    const { getByTestId, getByText } = render(<Counter />);

    const countValue = getByTestId("countValue");

    const decrement = getByText("-");

    expect(countValue.textContent).toBe("0");

    for (let i = 0; i < 10; i += 1) fireEvent.click(decrement);

    expect(countValue.textContent).toBe("-10");
  });
});
