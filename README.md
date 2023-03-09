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

steps included within the main.yml file within .github/workflows/, will run playwright on a github actions, and capture screenshots and create a trace file .
