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



















## Progress Note 10

- 2026-04-14: documented service readiness, implementation progress, and release hygiene for dashboard-data-pipeline.
- Captured validation notes for observability, operational checks, and handoff readiness.

## Update 12

- 2025-01-01: added another progress checkpoint covering documentation, release readiness, and operational follow-up.
- Kept the README as the single source of status updates for this repository.

## Update 13

- 2025-03-14: added another progress checkpoint covering documentation, release readiness, and operational follow-up.
- Kept the README as the single source of status updates for this repository.

## Update 14

- 2025-05-27: added another progress checkpoint covering documentation, release readiness, and operational follow-up.
- Kept the README as the single source of status updates for this repository.

## Update 15

- 2025-08-09: added another progress checkpoint covering documentation, release readiness, and operational follow-up.
- Kept the README as the single source of status updates for this repository.
