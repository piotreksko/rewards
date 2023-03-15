import React, { useState, useEffect } from "react";
import CustomerRewardsTable from "../components/CustomerRewardsTable";
import ErrorMessage from "../components/ErrorMessage";
import LoadingSpinner from "../components/LoadingSpinner";
import { calculateRewardPoints } from "../utils/rewardsCalculator";
import { fetchTransactions } from "../services/api";
import "./RewardsProgram.css";

function App() {
  const [transactions, setTransactions] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchTransactionData() {
      setLoading(true);
      try {
        const result = await fetchTransactions();
        setTransactions(result);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    }

    fetchTransactionData();
  }, []);

  const customerRewards = calculateRewardPoints(transactions);

  return (
    <div className="wrapper">
      <header className="header">
        <h1>Rewards Program</h1>
      </header>
      <main>
        {loading && <LoadingSpinner />}
        {error && <ErrorMessage message={error} />}
        {!loading && !error && (
          <CustomerRewardsTable rewards={customerRewards} />
        )}
      </main>
    </div>
  );
}

export default App;

