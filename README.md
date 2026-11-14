# Banking API Testing & Playwright Automation

A QA automation portfolio project demonstrating API testing with Postman and end-to-end browser automation using Playwright and TypeScript.

[![Playwright Tests](https://github.com/devwanji/banking-api-playwright-testing/actions/workflows/playwright.yml/badge.svg?branch=develop)](https://github.com/devwanji/banking-api-playwright-testing/actions/workflows/playwright.yml)

## Project Overview

This project uses the Cypress Real World App as the application under test. It combines Postman API testing and Playwright browser automation to validate banking application functionality.

The project also integrates both test suites into a GitHub Actions CI/CD pipeline, enabling automated testing whenever changes are pushed to the `develop` branch.

## Technologies Used

- **API Testing:** Postman, Postman CLI
- **UI Automation:** Playwright, TypeScript
- **Runtime:** Node.js
- **CI/CD:** GitHub Actions
- **Version Control:** Git and GitHub

## Test Coverage

### API Testing – Postman

Four API endpoints are covered:

- POST `/login` – User authentication
- GET `/notifications` – Notifications retrieval
- POST `/graphql` – Bank account queries
- GET `/transactions/public` – Public transaction data

Additional validations include:
- HTTP status codes
- JSON response structure
- Authentication
- Bank account data
- Transaction data
- API response times

### UI Automation – Playwright

- Banking application navigation
- Login form interaction
- User authentication
- Successful login verification
- Dashboard visibility validation

## Automated Test Results

The combined GitHub Actions workflow completed successfully.

| Test Suite | Result |
|---|---|
| Postman API requests | 4 passed |
| Postman test scripts | 8 passed |
| Postman assertions | 22 passed |
| Postman failures | 0 |
| Playwright UI tests | Passed |
| GitHub Actions workflow | Successful |

**Latest verified CI run:** [Playwright Tests – Run #5](https://github.com/devwanji/banking-api-playwright-testing/actions)

## Running the Project Locally

### 1. Clone the repository

```bash
git clone https://github.com/devwanji/banking-api-playwright-testing.git
cd banking-api-playwright-testing
```

### 2. Install dependencies

```bash
yarn install
```

### 3. Configure credentials

Set your local banking application credentials.

Windows Command Prompt:

```cmd
set BANKING_USERNAME=your_username
set BANKING_PASSWORD=your_password
```

Use your own local test credentials. Do not commit passwords or tokens.

### 4. Start the banking application

```bash
yarn dev
```

Keep the application running.

### 5. Run Playwright tests

In another terminal:

```bash
npx playwright install chromium
npx playwright test
```

### 6. Run Postman API tests

```bash
npx postman collection run "postman\collections\Application API collection" -e "postman\environments\Banking API - Local.environment.yaml"
```

The local Postman environment file is excluded from Git because it contains credentials.

## GitHub Actions CI/CD

The project uses GitHub Actions to automate testing.

The workflow:

1. Checks out the repository.
2. Installs Node.js dependencies.
3. Installs the Playwright Chromium browser.
4. Starts the banking application.
5. Waits for the frontend and backend.
6. Executes Postman API tests.
7. Executes Playwright UI tests.
8. Uploads test diagnostics.

Credentials are securely supplied through GitHub Actions Secrets:

- `BANKING_USERNAME`
- `BANKING_PASSWORD`

## Security Practices

- Local credentials are excluded from Git.
- GitHub Secrets are used for CI authentication.
- Generated test reports are excluded from version control.
- Passwords and session cookies should never be committed.

## Author

**Terry Kariuki**

GitHub: [@devwanji](https://github.com/devwanji)

Project Repository: [Banking API Testing & Playwright Automation](https://github.com/devwanji/banking-api-playwright-testing)