# Banking API Testing & Playwright Automation

A QA automation portfolio project demonstrating API testing with Postman and browser automation using Playwright and TypeScript.

## Project Overview

This project uses the Cypress Real World App as the application under test. It combines API testing and UI automation to validate important banking application functionality.

## Technologies Used

- Postman
- Playwright
- TypeScript
- Postman CLI
- Node.js
- Git and GitHub

## Test Coverage

### API Testing – Postman
- Login endpoint
- Notifications endpoint
- Public transactions endpoint
- GraphQL bank account queries
- HTTP status validation
- JSON response validation
- Response time assertions

### UI Automation – Playwright
- Banking application navigation
- Login form interaction
- Authentication verification
- Dashboard visibility validation

## Running the Tests

### Install dependencies

```bash
yarn install
```

### Start the application

```bash
yarn dev
```

### Configure test credentials

```cmd
set BANKING_USERNAME=your_username
set BANKING_PASSWORD=your_password
```

### Run Playwright tests

```bash
npx playwright test
```

### Run Postman API tests

```bash
npx postman collection run "postman\collections\Application API collection" -e "postman\environments\Banking API - Local.environment.yaml"
```

## Test Results

- Playwright banking login test: Passed.
- Postman CLI: 22 assertions passed, zero failures.

## Security

- Local credentials are excluded from Git.
- Generated test reports are excluded from Git.
- Passwords and session cookies should never be committed.

## Author

**Terry Kariuki**

GitHub: https://github.com/devwanji