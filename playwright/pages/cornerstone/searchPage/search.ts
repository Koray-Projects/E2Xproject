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

  /**
   * A function that asserts correct product card is shown using search options.
   */
  async assertProductCard(product: string) {
    const ProductName = this.page.locator(data.productCard.productName);
    await expect(ProductName).toHaveText(product);
  }

  /**
   * A function that adds product to basket.
   */
  async addProductToBasket() {
    await this.page.locator(data.productCard.productAddToBasket).click();
  }
}
