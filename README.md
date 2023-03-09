# Playwright framework

A playwright framework with e2e testing for cornerstones webpage.

## Installation

Clone the repo:

```sh
git clone https://github.com/Koray-Projects/E2Xproject.git
```

Install dependencies

```sh
npm i
```

## How to run tests

To run the tests, open a terminal window and enter

```sh
npx playwright test

or

npx playwright test --headed (visible UI)
```

This will run test on the playwright UI in headed mode.

## CI

The .gitlab/workflows/main.yml file will run playwright on pull/push requests via github actions, capture screenshots and create a trace file.
