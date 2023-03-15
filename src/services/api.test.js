import { fetchTransactions, transactions } from "./api";

describe("fetchTransactions", () => {
  it("should return a promise that resolves with transactions", async () => {
    const result = await fetchTransactions();
    expect(result).toEqual(transactions);
  });
});
