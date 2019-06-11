import React from "react";
import ReactDOM from "react-dom";
import { render, fireEvent } from "@testing-library/react";
import Home from "./Home";

describe("Home Page", () => {
  it("Renders without crashing", () => {
    ReactDOM.render(<Home />, document.createElement("div"));

    ReactDOM.unmountComponentAtNode(document.createElement("div"));
  });

  it("Loads component", () => {
    const { getByTestId } = render(<Home />);

    const home = getByTestId("homeContainer");

    expect(home).toBeInTheDocument();
  });

  it("Match Snapshot", () => {
    const { firstChild } = render(<Home />);

    expect(firstChild).toMatchSnapshot();
  });
});
