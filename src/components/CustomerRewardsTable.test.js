import React from "react";
import { render, screen } from "@testing-library/react";
import CustomerRewardsTable from "./CustomerRewardsTable";

describe("CustomerRewardsTable", () => {
  const rewards = {
    1: {
      1: 10,
      2: 20,
      3: 30,
    },
    2: {
      1: 5,
      2: 15,
      3: 25,
    },
  };

  it("renders the customer rewards table with correct headings", () => {
    render(<CustomerRewardsTable rewards={rewards} />);

    expect(screen.getByTestId("customer-rewards-table")).toBeInTheDocument();
    expect(screen.getByText("Customer")).toBeInTheDocument();
    expect(screen.getByText("Month 1")).toBeInTheDocument();
    expect(screen.getByText("Month 2")).toBeInTheDocument();
    expect(screen.getByText("Month 3")).toBeInTheDocument();
    expect(screen.getByText("Total")).toBeInTheDocument();
  });

  it("renders the customer rewards table with correct data", () => {
    render(<CustomerRewardsTable rewards={rewards} />);

    const rows = screen.getAllByRole("row");

    expect(rows[1]).toHaveTextContent("1");
    expect(rows[1]).toHaveTextContent("10");
    expect(rows[1]).toHaveTextContent("20");
    expect(rows[1]).toHaveTextContent("30");
    expect(rows[1]).toHaveTextContent("60");

    expect(rows[2]).toHaveTextContent("2");
    expect(rows[2]).toHaveTextContent("5");
    expect(rows[2]).toHaveTextContent("15");
    expect(rows[2]).toHaveTextContent("25");
    expect(rows[2]).toHaveTextContent("45");
  });
});
