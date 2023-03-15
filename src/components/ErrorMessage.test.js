import React from "react";
import { render, screen } from "@testing-library/react";
import ErrorMessage from "./ErrorMessage";

describe("ErrorMessage", () => {
  it("renders the error message passed as a prop", () => {
    const errorMessage = "Something went wrong";
    render(<ErrorMessage message={errorMessage} />);
    const errorMessageElement = screen.getByText(errorMessage);
    expect(errorMessageElement).toBeInTheDocument();
  });

  it("renders the error message with a heading", () => {
    const errorMessage = "Something went wrong";
    render(<ErrorMessage message={errorMessage} />);
    const errorMessageHeading = screen.getByRole("heading", { level: 2 });
    expect(errorMessageHeading).toBeInTheDocument();
    expect(errorMessageHeading).toHaveTextContent("An error has occurred");
  });
});
