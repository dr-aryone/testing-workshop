import React from "react";
import ReactDOM from "react-dom";
import { render, fireEvent } from "@testing-library/react";
import Toggle from "./Toggle";

describe("Toggle Page", () => {
  it("Renders without crashing", () => {
    ReactDOM.render(<Toggle />, document.createElement("div"));

    ReactDOM.unmountComponentAtNode(document.createElement("div"));
  });

  it("Loads component", () => {
    const { getByTestId } = render(<Toggle />);

    const toggle = getByTestId("toggleContainer");

    expect(toggle).toBeInTheDocument();
  });

  it("Match Snapshot", () => {
    const { firstChild } = render(<Toggle />);

    expect(firstChild).toMatchSnapshot();
  });

  it("Toggle paragraph", () => {
    const { getByText, queryByTestId } = render(<Toggle />);

    const toggleButton = getByText("Toggle Paragraph");

    fireEvent.click(toggleButton);

    const visibleToggleParagraph = queryByTestId("toggleParagraph");

    expect(visibleToggleParagraph).toBeInTheDocument();

    fireEvent.click(toggleButton);

    const notVisibleToggleParagraph = queryByTestId("toggleParagraph");

    expect(notVisibleToggleParagraph).not.toBeInTheDocument();
  });
});
