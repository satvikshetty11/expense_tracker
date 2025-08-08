export default function TransactionsList({ type, transactions }) {
  const filtered = transactions.filter(tx => tx.type === type);
  const isExpense = type === "expense";
  return (
    <div className="list-card">
      <div
        className={`list-title ${isExpense ? "expense-color" : "income-color"}`}
      >
        {isExpense ? "Expense" : "Income"}
      </div>
      {filtered.length === 0 ? (
        <div className="list-item">
          No {isExpense ? "expense" : "income"} transactions
        </div>
      ) : (
        filtered.map(tx =>
          <div className="list-item" key={tx.id}>
            <span>{tx.description}</span>
            <span>₹{tx.amount}</span>
          </div>
        )
      )}
    </div>
  );
}
