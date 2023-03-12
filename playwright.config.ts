import { PlaywrightTestConfig } from "@playwright/test";

const config: PlaywrightTestConfig = {
  fullyParallel: true,
  timeout: 30000,
  retries: 1,
  use: {
    trace: "on-first-retry",
    screenshot: "only-on-failure",
    browserName: "chromium",
    headless: false,
  },
  projects: [
    {
      name: "cornerstone",
      testDir: "./playwright/e2e/cornerstone",
      use: {
        browserName: "chromium",
        baseURL: "https://cornerstone-light-demo.mybigcommerce.com/",
      },
    },
  ],
};
export default config;
