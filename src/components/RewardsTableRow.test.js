import React from "react";
import { render, screen } from "@testing-library/react";
import RewardsTableRow from "./RewardsTableRow";

describe("RewardsTableRow", () => {
  it("renders the customer name and rewards for each month", () => {
    const customer = "123";
    const monthlyRewards = { 1: 10, 2: 20, 3: 30 };
    const totalRewards = 60;

    render(
      <table>
        <tbody>
          <RewardsTableRow
            customer={customer}
            monthlyRewards={monthlyRewards}
            totalRewards={totalRewards}
          />
        </tbody>
      </table>
    );

    const customerCell = screen.getByText(customer);
    expect(customerCell).toBeInTheDocument();

    const month1Cell = screen.getByText(monthlyRewards["1"].toString());
    expect(month1Cell).toBeInTheDocument();

    const month2Cell = screen.getByText(monthlyRewards["2"].toString());
    expect(month2Cell).toBeInTheDocument();

    const month3Cell = screen.getByText(monthlyRewards["3"].toString());
    expect(month3Cell).toBeInTheDocument();

    const totalRewardsCell = screen.getByText(totalRewards.toString());
    expect(totalRewardsCell).toBeInTheDocument();
  });
});
