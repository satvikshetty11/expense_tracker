import React, { useState } from "react";
import BalanceSummary from "./components/BalanceSummary";
import Chart from "./components/Chart";
import TransactionsList from "./components/TransactionsList";
import TransactionForm from "./components/TransactionForm";

const initialTransactions = [];

export default function App() {
  const [transactions, setTransactions] = useState(initialTransactions);
  const [showForm, setShowForm] = useState(false);

  const handleAdd = (tx) => {
    setTransactions(prev => [
      ...prev,
      { ...tx, id: Date.now() }
    ]);
    setShowForm(false);
  };

  return (
    <div className="container">
      <h1 className="title">Expense Tracker</h1>
      <div className="card-row">
        <BalanceSummary transactions={transactions} />
        <Chart transactions={transactions} />
        <button className="add-btn" onClick={() => setShowForm(true)}>
          Add New Transaction
        </button>
      </div>
      {showForm && (
        <TransactionForm
          onClose={() => setShowForm(false)}
          onAdd={handleAdd}
        />
      )}
      <div className="lists-row">
        <TransactionsList type="expense" transactions={transactions} />
        <TransactionsList type="income" transactions={transactions} />
      </div>
    </div>
  );
}
