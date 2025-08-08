import React, { useState } from "react";

export default function TransactionForm({ onClose, onAdd }) {
  const [type, setType] = useState("expense");
  const [amount, setAmount] = useState("");
  const [desc, setDesc] = useState("");
  return (
    <div className="overlay">
      <form
        className="form"
        onSubmit={e => {
          e.preventDefault();
          if (!desc || !amount) return;
          onAdd({ type, description: desc, amount: Number(amount) });
        }}
      >
        <h2>Add Transaction</h2>
        <label>
          Type:
          <select value={type} onChange={e => setType(e.target.value)}>
            <option value="expense">Expense</option>
            <option value="income">Income</option>
          </select>
        </label>
        <label>
          Description:
          <input
            value={desc}
            onChange={e => setDesc(e.target.value)}
            required
          />
        </label>
        <label>
          Amount:
          <input
            type="number"
            min="0"
            value={amount}
            onChange={e => setAmount(e.target.value)}
            required
          />
        </label>
        <div style={{display: "flex", gap: 8, marginTop: 12}}>
          <button type="submit" className="add-btn">Add</button>
          <button type="button" onClick={onClose} className="close-btn">Cancel</button>
        </div>
      </form>
    </div>
  );
}
