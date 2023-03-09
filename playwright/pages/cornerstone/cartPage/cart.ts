import { Page, Locator } from "@playwright/test";
import { BasePage } from "../../BasePage";
import * as data from "./cart.data";

export class CartPage extends BasePage {
  readonly productDetails: {
    productName: Locator;
    pricePerUnit: Locator;
  };
  readonly checkoutBtn: Locator;

  /**
   * @description An object that represents the CartPage.
   * @param {Page} page The test page object.
   */

  constructor(page: Page) {
    super(page, data.url);

    this.productDetails = {
      productName: page.locator(data.productDetails.productName),
      pricePerUnit: page.locator(data.productDetails.pricePerUnit),
    };
    this.checkoutBtn = page.locator(data.checkoutBtn);
  }
}
