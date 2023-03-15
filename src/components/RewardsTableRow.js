import React from "react";

function RewardsTableRow({ customer, monthlyRewards, totalRewards }) {
    return (
      <tr key={customer}>
        <td>{customer}</td>
        {Object.values(monthlyRewards).map((points, i) => (
          <td key={i}>{points}</td>
        ))}
        <td>{totalRewards}</td>
      </tr>
    );
  }

export default RewardsTableRow;