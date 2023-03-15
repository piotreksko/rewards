import React from "react";
import RewardsTableRow from "./RewardsTableRow";

function CustomerRewardsTable({ rewards }) {
  return (
    <table data-testid="customer-rewards-table">
      <thead>
        <tr>
          <th>Customer</th>
          <th>Month 1</th>
          <th>Month 2</th>
          <th>Month 3</th>
          <th>Total</th>
        </tr>
      </thead>
      <tbody>
        {Object.entries(rewards).map(([customer, monthlyRewards]) => {
          const monthlyRewardsValues = Object.values(monthlyRewards);
          const totalRewards = monthlyRewardsValues.reduce(
            (reward, total) => reward + total,
            0
          );
          return (
            <RewardsTableRow
              key={customer}
              customer={customer}
              monthlyRewards={monthlyRewards}
              totalRewards={totalRewards}
            />
          );
        })}
      </tbody>
    </table>
  );
}

export default CustomerRewardsTable;
