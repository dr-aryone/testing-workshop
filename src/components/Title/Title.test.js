import React from "react";
import ReactDOM from "react-dom";
import { render } from "@testing-library/react";
import Title from "./Title";

describe("Title Page", () => {
  it("Renders without crashing", () => {
    ReactDOM.render(<Title title="TitleTest" />, document.createElement("div"));

    ReactDOM.unmountComponentAtNode(document.createElement("div"));
  });

  it("Loads component", () => {
    const { getByTestId } = render(<Title title="TitleTest" />);

    const title = getByTestId("titleContainer");

    expect(title).toBeInTheDocument();
  });

  it("Match Snapshot", () => {
    const { firstChild } = render(<Title title="TitleTest" />);

    expect(firstChild).toMatchSnapshot();
  });

  it("Renders the title", () => {
    const { getByText } = render(<Title title="TitleTest" />);

    const title = getByText("TitleTest");

    expect(title).toBeInTheDocument();
  });
});
