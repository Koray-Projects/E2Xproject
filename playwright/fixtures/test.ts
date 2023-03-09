import { test as base } from "@playwright/test";

import { CartPage, CheckoutPage, HomePage, SearchPage } from "./index";

type CustomFixtures = {
  // Cornerstone Pages
  CartPage: CartPage;
  CheckoutPage: CheckoutPage;
  HomePage: HomePage;
  SearchPage: SearchPage;
};

export const test = base.extend<CustomFixtures>({
  CartPage: async ({ page }, use) => {
    await use(new CartPage(page));
  },
  CheckoutPage: async ({ page }, use) => {
    await use(new CheckoutPage(page));
  },
  HomePage: async ({ page }, use) => {
    await use(new HomePage(page));
  },
  SearchPage: async ({ page }, use) => {
    await use(new SearchPage(page));
  },
});
export { expect } from "@playwright/test";
