import { PieChart, Pie, Cell } from "recharts";

const COLORS = ["#3b82f6", "#ef4444"];

function getPieData(transactions) {
  let income = 0, expense = 0;
  for (let tx of transactions) {
    if (tx.type === "income") income += tx.amount;
    else expense += tx.amount;
  }
  return [
    { name: "Expense", value: expense },
    { name: "Income", value: income }
  ];
}

export default function Chart({ transactions }) {
  const data = getPieData(transactions);
  return (
    <div className="chart-card">
      <PieChart width={120} height={120}>
        <Pie
          data={data}
          cx={60}
          cy={60}
          innerRadius={36}
          outerRadius={55}
          dataKey="value"
          startAngle={90}
          endAngle={-270}
        >
          <Cell key="e" fill={COLORS[1]} />
          <Cell key="i" fill={COLORS[0]} />
        </Pie>
      </PieChart>
    </div>
  );
}
