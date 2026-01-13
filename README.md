# Maintenance Request Logger

## Overview
Internal web app for logging customer/device maintenance requests. Stores requests in Google Sheet "Requests".

## File Structure
- `Code.gs` → Server-side logic (save requests, include helper)
- `WebApp.gs` → Entry point (doGet)
- `index.html` → Main HTML page (UI)

## Setup
1. Open Google Sheets → Extensions → Apps Script
2. Add above files
3. Create a sheet named "Requests"
4. Deploy → New Deployment → Web App
   - Execute as: Me
   - Who has access: Anyone (for testing)

## Workflow
- Create feature branch for new changes
- Open Pull Requests for review
- Merge to main → `clasp push` to deploy
