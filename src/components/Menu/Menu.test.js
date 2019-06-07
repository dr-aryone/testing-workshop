import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { render } from "@testing-library/react";
import Menu from "./Menu";

const renderWithRouter = component =>
  render(<BrowserRouter>{component}</BrowserRouter>);

describe("Menu Page", () => {
  it("Renders without crashing", () => {
    ReactDOM.render(
      <BrowserRouter>
        <Menu />
      </BrowserRouter>,
      document.createElement("div")
    );

    ReactDOM.unmountComponentAtNode(document.createElement("div"));
  });

  it("Loads component", () => {
    const { getByTestId } = renderWithRouter(<Menu />);

    const menu = getByTestId("menuContainer");

    expect(menu).toBeInTheDocument();
  });
});
