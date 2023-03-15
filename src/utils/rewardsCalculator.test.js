import { calculateRewardPoints } from "./rewardsCalculator";

describe("calculateRewardPoints", () => {
  it("returns an empty object when passed an empty array", () => {
    const rewards = calculateRewardPoints([]);
    expect(rewards).toEqual({});
  });

  it("calculates reward points correctly for a single transaction above 100", () => {
    const transactions = [
      { customerId: 1, timestamp: "2022-01-01T00:00:00.000Z", amount: 150 },
    ];

    const rewards = calculateRewardPoints(transactions);
    expect(rewards).toEqual({
      1: { 1: 100, 2: 0, 3: 0 },
    });
  });

  it("calculates reward points correctly for a single transaction between 50 and 100", () => {
    const transactions = [
      { customerId: 1, timestamp: "2022-01-01T00:00:00.000Z", amount: 75 },
    ];

    const rewards = calculateRewardPoints(transactions);
    expect(rewards).toEqual({
      1: { 1: 25, 2: 0, 3: 0 },
    });
  });

  it("calculates reward points correctly for multiple transactions", () => {
    const transactions = [
      { customerId: 1, timestamp: "2022-01-01T00:00:00.000Z", amount: 75 },
      { customerId: 2, timestamp: "2022-02-01T00:00:00.000Z", amount: 150 },
      { customerId: 1, timestamp: "2022-02-01T00:00:00.000Z", amount: 125 },
      { customerId: 1, timestamp: "2022-03-01T00:00:00.000Z", amount: 200 },
    ];

    const rewards = calculateRewardPoints(transactions);
    expect(rewards).toEqual({
      1: { 1: 25, 2: 50, 3: 200 },
      2: { 1: 0, 2: 100, 3: 0 },
    });
  });

  it("calculates the rewards correctly for transactions that do not qualify for rewards", () => {
    const transactions = [
      { customerId: 1, timestamp: "2022-02-01T12:00:00Z", amount: 40 },
    ];
    const rewards = calculateRewardPoints(transactions);
    expect(rewards).toEqual({ 1: { 1: 0, 2: 0, 3: 0 } });
  });
});
