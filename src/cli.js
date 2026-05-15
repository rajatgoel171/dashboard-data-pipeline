#!/usr/bin/env node
import fs from "node:fs/promises";
import { parseCsv } from "./csv.js";
import { buildDashboardMetrics } from "./pipeline.js";

const filePath = process.argv[2];
if (!filePath) {
  console.error("Usage: node src/cli.js data/events.csv");
  process.exit(1);
}

const text = await fs.readFile(filePath, "utf8");
const rows = parseCsv(text);
const metrics = buildDashboardMetrics(rows);

console.log(JSON.stringify(metrics, null, 2));
