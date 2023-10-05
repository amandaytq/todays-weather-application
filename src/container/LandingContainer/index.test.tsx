import React from "react";
import { render, screen } from "@testing-library/react";
import LandingContainer from "./";

test("renders learn react link", () => {
  render(<LandingContainer />);
  // const linkElement = screen.getByText(/learn react/i);
  // expect(linkElement).toBeInTheDocument();
});
