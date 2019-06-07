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

  it("Loads with initial counter as 0", () => {
    const { getByTestId } = render(<Counter />);

    const countValue = getByTestId("countValue");

    expect(countValue.textContent).toBe("0");
  });

  it("Increment work", () => {
    const { getByTestId } = render(<Counter />);

    const countValue = getByTestId("countValue");

    const increment = getByTestId("incrementButton");

    expect(countValue.textContent).toBe("0");

    fireEvent.click(increment);

    expect(countValue.textContent).toBe("1");
  });

  it("Decrement work", () => {
    const { getByTestId } = render(<Counter />);

    const countValue = getByTestId("countValue");

    const decrement = getByTestId("decrementButton");

    expect(countValue.textContent).toBe("0");

    fireEvent.click(decrement);

    expect(countValue.textContent).toBe("-1");
  });
});
