export const transactions = [
  { id: 1, customerId: 1, timestamp: "2022-01-01T10:10:00Z", amount: 75.0 },
  { id: 2, customerId: 1, timestamp: "2022-02-01T11:10:00Z", amount: 125.0 },
  { id: 3, customerId: 1, timestamp: "2022-02-02T10:10:00Z", amount: 200.0 },
  { id: 4, customerId: 1, timestamp: "2022-02-02T12:10:00Z", amount: 50.0 },
  { id: 5, customerId: 1, timestamp: "2022-02-03T09:10:00Z", amount: 150.0 },
  { id: 6, customerId: 1, timestamp: "2022-02-03T10:10:00Z", amount: 375.0 },
  { id: 7, customerId: 1, timestamp: "2022-03-04T10:10:00Z", amount: 100.0 },
  { id: 8, customerId: 1, timestamp: "2022-03-05T10:10:00Z", amount: 120.0 },
  { id: 9, customerId: 1, timestamp: "2022-03-05T11:10:00Z", amount: 80.0 },
  { id: 10, customerId: 1, timestamp: "2022-01-06T10:10:00Z", amount: 560.0 },
  { id: 11, customerId: 2, timestamp: "2022-01-01T10:10:00Z", amount: 50.0 },
  { id: 12, customerId: 2, timestamp: "2022-01-01T11:10:00Z", amount: 100.0 },
  { id: 13, customerId: 2, timestamp: "2022-01-02T10:10:00Z", amount: 80.0 },
  { id: 14, customerId: 2, timestamp: "2022-02-02T12:10:00Z", amount: 150.0 },
  { id: 15, customerId: 2, timestamp: "2022-02-03T09:10:00Z", amount: 190.0 },
  { id: 16, customerId: 2, timestamp: "2022-02-03T10:10:00Z", amount: 170.0 },
  { id: 17, customerId: 2, timestamp: "2022-03-04T10:10:00Z", amount: 110.0 },
  { id: 18, customerId: 2, timestamp: "2022-03-05T10:10:00Z", amount: 140.0 },
  { id: 19, customerId: 2, timestamp: "2022-03-05T11:10:00Z", amount: 60.0 },
  { id: 20, customerId: 2, timestamp: "2022-01-06T10:10:00Z", amount: 75.0 },
  { id: 21, customerId: 3, timestamp: "2022-01-01T10:10:00Z", amount: 100.0 },
  { id: 22, customerId: 3, timestamp: "2022-02-01T11:10:00Z", amount: 50.0 },
  { id: 23, customerId: 3, timestamp: "2022-02-02T10:10:00Z", amount: 75.0 },
  { id: 24, customerId: 3, timestamp: "2022-02-02T12:10:00Z", amount: 200.0 },
  { id: 25, customerId: 3, timestamp: "2022-02-03T09:10:00Z", amount: 150.0 },
  { id: 26, customerId: 3, timestamp: "2022-02-03T10:10:00Z", amount: 100.0 },
  { id: 27, customerId: 3, timestamp: "2022-02-04T10:10:00Z", amount: 375.0 },
  { id: 28, customerId: 3, timestamp: "2022-03-05T10:10:00Z", amount: 120.0 },
  { id: 29, customerId: 3, timestamp: "2022-03-05T11:10:00Z", amount: 80.0 },
  { id: 30, customerId: 3, timestamp: "2022-03-06T10:10:00Z", amount: 160.0 },
];

function fetchTransactions() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(transactions);
    }, 1000);
  });
}

export { fetchTransactions };
