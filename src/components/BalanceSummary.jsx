function calculateTotals(transactions) {
  let income = 0, expense = 0;
  for (let tx of transactions) {
    if (tx.type === "income") income += tx.amount;
    else expense += tx.amount;
  }
  return { income, expense, balance: income - expense };
}

export default function BalanceSummary({ transactions }) {
  const { income, expense, balance } = calculateTotals(transactions);
  return (
    <div className="summary-card">
      <div className="balance-label">Balance is ₹ {balance}</div>
      <div className="summary-values">
        <div>
          <div className="summary-big">{income}</div>
          <div className="summary-muted">Total Income</div>
        </div>
        <div>
          <div className="summary-expense">{expense}</div>
          <div className="summary-muted">Total Expense</div>
        </div>
      </div>
    </div>
  );
}
