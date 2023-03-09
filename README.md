# Playwright Framework

A playwright framework with a single test, using randomly generated data to complete an e2e checkout.

## Set up steps

Clone the repository:

```sh
git clone https://github.com/Koray-Projects/E2Xproject.git
```

Install dependencies:

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

## CI

The .gitlab/workflows/main.yml file will run playwright on pull/push requests via github actions, capture screenshots and create a trace file.
