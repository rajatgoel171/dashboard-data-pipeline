export function buildDashboardMetrics(rows) {
  const accepted = [];
  const rejected = [];

  for (const row of rows) {
    const normalized = normalize(row);
    if (normalized.error) rejected.push({ row, error: normalized.error });
    else accepted.push(normalized);
  }

  const byDay = new Map();
  for (const row of accepted) {
    const day = row.timestamp.toISOString().slice(0, 10);
    const current = byDay.get(day) ?? { day, signups: 0, purchases: 0, revenue: 0 };

    if (row.event === "signup") current.signups += 1;
    if (row.event === "purchase") {
      current.purchases += 1;
      current.revenue += row.amount;
    }

    byDay.set(day, current);
  }

  const days = [...byDay.values()].sort((a, b) => a.day.localeCompare(b.day));
  const totals = days.reduce(
    (accumulator, day) => ({
      signups: accumulator.signups + day.signups,
      purchases: accumulator.purchases + day.purchases,
      revenue: accumulator.revenue + day.revenue,
    }),
    { signups: 0, purchases: 0, revenue: 0 },
  );

  return {
    totals: {
      ...totals,
      conversionRate: totals.signups === 0 ? 0 : totals.purchases / totals.signups,
    },
    days,
    rejected,
  };
}

function normalize(row) {
  const timestamp = new Date(row.timestamp);
  if (Number.isNaN(timestamp.getTime())) return { error: "Invalid timestamp" };

  if (!["signup", "purchase"].includes(row.event)) return { error: "Invalid event" };
  if (!row.userId) return { error: "Missing userId" };

  const amount = Number(row.amount || 0);
  if (Number.isNaN(amount) || amount < 0) return { error: "Invalid amount" };

  return {
    timestamp,
    event: row.event,
    userId: row.userId,
    amount,
  };
}
