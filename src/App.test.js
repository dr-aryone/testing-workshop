import React from "react";
import { render, fireEvent } from "@testing-library/react";

import App from "./App";

describe("App Component", () => {
  describe("Router", () => {
    it("Should go to the Toggle Component", () => {
      const { getByText, getByTestId } = render(<App />);

      const toggleLink = getByText("Toggle");

      fireEvent.click(toggleLink);

      const toggleContainer = getByTestId("toggleContainer");

      expect(toggleContainer).toBeInTheDocument();
    });

    it("Should go to the Counter Component", () => {
      const { getByText, getByTestId } = render(<App />);

      const counterLink = getByText("Counter");

      fireEvent.click(counterLink);

      const counterContainer = getByTestId("counterContainer");

      expect(counterContainer).toBeInTheDocument();
    });

    it("Should go to the ChangeName Component", () => {
      const { getByText, getByTestId } = render(<App />);

      const changeNameLink = getByText("Change Name");

      fireEvent.click(changeNameLink);

      const changeNameContainer = getByTestId("changeNameContainer");

      expect(changeNameContainer).toBeInTheDocument();
    });
  });
});
