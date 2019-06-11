import React from "react";
import ReactDOM from "react-dom";
import { render, fireEvent } from "@testing-library/react";

import Router from "./Router";

describe("Router Component", () => {
  it("Renders without crashing", () => {
    ReactDOM.render(<Router />, document.createElement("div"));

    ReactDOM.unmountComponentAtNode(document.createElement("div"));
  });

  it("Match Snapshot", () => {
    const { firstChild } = render(<Router />);

    expect(firstChild).toMatchSnapshot();
  });

  it("Should go to the Toggle Component", () => {
    const { getByText, getByTestId } = render(<Router />);

    const toggleLink = getByText("Toggle");

    fireEvent.click(toggleLink);

    const toggleContainer = getByTestId("toggleContainer");

    expect(toggleContainer).toBeInTheDocument();
  });

  it("Should go to the Counter Component", () => {
    const { getByText, getByTestId } = render(<Router />);

    const counterLink = getByText("Counter");

    fireEvent.click(counterLink);

    const counterContainer = getByTestId("counterContainer");

    expect(counterContainer).toBeInTheDocument();
  });

  it("Should go to the ChangeName Component", () => {
    const { getByText, getByTestId } = render(<Router />);

    const changeNameLink = getByText("Change Name");

    fireEvent.click(changeNameLink);

    const changeNameContainer = getByTestId("changeNameContainer");

    expect(changeNameContainer).toBeInTheDocument();
  });
});
