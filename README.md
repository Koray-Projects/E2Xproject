# Playwright Framework

<strong>A playwright framework with a single test, using randomly generated data to complete an e2e checkout.</strong>

## Set up steps

<strong>Clone the repository:</strong>

```sh
git clone https://github.com/Koray-Projects/E2Xproject.git
```

<strong>cd to the project folder:</strong>

```sh
cd E2Xproject
```

<strong>Install dependencies:</strong>

```sh
npm i
```

## How to run tests

```sh
npx playwright test

or

npx playwright test --headed (visible UI)
```

## CI

The .gitlab/workflows/main.yml file will run playwright on pull/push requests via github actions, capture screenshots and create a trace file.
