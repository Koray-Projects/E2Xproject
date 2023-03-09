import { Page, Locator } from "@playwright/test";
import { BasePage } from "../../BasePage";
import * as data from "./home.data";

export class HomePage extends BasePage {
  readonly headerOptions: {
    search: {
      button: Locator;
      inputField: Locator;
    };
    giftCertificates: Locator;
    signIn: Locator;
    register: Locator;
    cart: Locator;
  };

  /**
   * @description An object that represents the Homepage.
   * @param {Page} page The test page object.
   */

  constructor(page: Page) {
    super(page, data.url);

    this.headerOptions = {
      search: {
        button: page.locator(data.headerOptions.search.button),
        inputField: page.locator(data.headerOptions.search.inputField),
      },
      giftCertificates: page.locator(data.headerOptions.giftCertificates),
      signIn: page.locator(data.headerOptions.signIn),
      register: page.locator(data.headerOptions.register),
      cart: page.locator(data.headerOptions.cart),
    };
  }

  // Clicks search header option, takes a string parameter option, and presses enter.
  async searchOptions(productName: string) {
    await this.clickButton("Search");
    const searchProduct = await this.page.$(
      data.headerOptions.search.inputField
    );
    await searchProduct.type(productName);
    await searchProduct.press("Enter");
  }
}
