import React from "react";
import { render, screen, waitFor } from "@testing-library/react";
import RewardsProgram from "./RewardsProgram";
import { fetchTransactions } from "../services/api";
import { calculateRewardPoints } from "../utils/rewardsCalculator";

jest.mock("../services/api");
jest.mock("../utils/rewardsCalculator");

describe("RewardsProgram", () => {
  const mockTransactions = [
    { customerId: 1, purchaseAmount: 100 },
    { customerId: 2, purchaseAmount: 50 },
    { customerId: 1, purchaseAmount: 200 },
    { customerId: 3, purchaseAmount: 150 },
  ];

  const mockRewards = {
    1: { 1: 50, 2: 0, 3: 150, total: 200 },
    2: { 1: 0, 2: 0, 3: 0, total: 0 },
    3: { 1: 0, 2: 0, 3: 50, total: 50 },
  };

  beforeEach(() => {
    fetchTransactions.mockResolvedValue(mockTransactions);
    calculateRewardPoints.mockReturnValue(mockRewards);
  });

  it("renders the header with the correct title", async () => {
    render(<RewardsProgram />);
    const heading = await screen.findByRole("heading", { level: 1 });
    expect(heading.textContent).toEqual("Rewards Program");

    await waitFor(() => {
      expect(screen.queryByTestId("loading-spinner")).not.toBeInTheDocument()
    });
  });

  it("shows a loading spinner while fetching transaction data", async () => {
    fetchTransactions.mockResolvedValue([]);
    render(<RewardsProgram />);
    expect(screen.getByTestId("loading-spinner")).toBeInTheDocument();
    await waitFor(() =>
      expect(screen.queryByTestId("loading-spinner")).not.toBeInTheDocument()
    );
  });

  it("shows an error message if there is an error fetching transaction data", async () => {
    fetchTransactions.mockRejectedValue(new Error("Failed to fetch data"));
    render(<RewardsProgram />);
    expect(await screen.findByText("Failed to fetch data")).toBeInTheDocument();
  });

  it("renders the customer rewards table with the correct data", async () => {
    render(<RewardsProgram />);
    await waitFor(() => {
      expect(screen.getByTestId("customer-rewards-table")).toBeInTheDocument();
    });
  });
});

