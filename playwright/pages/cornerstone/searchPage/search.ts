import { Page, Locator, expect } from "@playwright/test";
import { BasePage } from "../../basePage";
import * as data from "./search.data";

export class SearchPage extends BasePage {
  readonly productCard: {
    productName: Locator;
    productAddToBasket: Locator;
    price: Locator;
  };

  /**
   * @description An object that represents the SearchPage.
   * @param {Page} page The test page object.
   */

  constructor(page: Page) {
    super(page, data.url);

    this.productCard = {
      productName: page.locator(data.productCard.productName),
      productAddToBasket: page.locator(data.productCard.productAddToBasket),
      price: page.locator(data.productCard.price),
    };
  }

  // Asserts that the searched product card is visible on page.
  async assertProductCard(product: string) {
    const ProductName = this.page.locator(data.productCard.productName);
    await expect(ProductName).toHaveText(product);
  }

  // Adds product to basket.
  async addProductToBasket() {
    await this.page.locator(data.productCard.productAddToBasket).click();
  }
}
