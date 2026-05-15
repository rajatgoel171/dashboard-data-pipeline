import assert from "node:assert/strict";
import { test } from "node:test";
import { parseCsv } from "../src/csv.js";
import { buildDashboardMetrics } from "../src/pipeline.js";

test("aggregates dashboard metrics by day", () => {
  const rows = parseCsv(`timestamp,event,userId,amount
2026-04-01T10:00:00Z,signup,u_1,0
2026-04-01T10:10:00Z,purchase,u_1,500
2026-04-02T10:00:00Z,signup,u_2,0`);

  const metrics = buildDashboardMetrics(rows);

  assert.equal(metrics.totals.signups, 2);
  assert.equal(metrics.totals.purchases, 1);
  assert.equal(metrics.totals.revenue, 500);
  assert.equal(metrics.days.length, 2);
});

test("reports rejected rows", () => {
  const metrics = buildDashboardMetrics([{ timestamp: "bad", event: "signup", userId: "u_1", amount: "0" }]);
  assert.equal(metrics.rejected.length, 1);
});
