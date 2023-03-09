# Playwright framework

A playwright framework with e2e testing for cornerstone

## Installation

Clone the repo:

```sh
git clone https://github.com/Koray-Projects/E2Xproject.git
```

Install dependencies

```sh
npm i
```

## Running Tests

To run the tests, open a terminal window and enter

```sh
npx playwright test --headed
```

This will run test on the playwright UI in headed mode.

## CI/CD

steps included within the main.yml file within .github/workflows/, will run playwright on a github actions, and capture screenshots of test runs.
