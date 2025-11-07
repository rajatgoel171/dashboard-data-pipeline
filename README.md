# Dashboard Data Pipeline

A dependency-free CSV ingestion pipeline that turns event data into dashboard-ready metrics. It demonstrates data parsing, validation, aggregation, and JSON reporting.

## Features

- CSV parser for simple operational datasets
- Input validation with rejected-row reporting
- Daily event aggregation
- Revenue and conversion metrics
- CLI output as formatted JSON

## Run

```bash
npm test
npm run demo
```

## Data Shape

```csv
timestamp,event,userId,amount
2026-04-01T10:00:00Z,signup,u_1,0
2026-04-01T10:05:00Z,purchase,u_1,499
```



















## Random Update 17

- 2025-11-07: captured a repository-specific status note with no sequential date pattern.
- Documented work progress, validation, and operational context for dashboard-data-pipeline.
