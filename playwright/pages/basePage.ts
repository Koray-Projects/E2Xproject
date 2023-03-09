import { Page } from "@playwright/test";

export class BasePage {
  readonly page: Page;
  readonly baseURL: string;
  readonly pathURL: string;

  /**
   * @description An object that represents the basepage.
   * @param {Page} page The test page object.
   * @param {string} baseURL The baseURL for the page.
   * @param {string} pathURL The path URL for the page e.g. /basket.
   */
  constructor(page: Page, pathURL) {
    this.page = page;
    this.pathURL = pathURL;
  }

  async goto(): Promise<void> {
    await this.page.goto(this.pathURL, { waitUntil: "load" });
  }

  //Util to simplify clicking a button
  protected async clickButton(name: string) {
    await this.page.getByRole("button", { name }).click();
  }

  //Util to simplify typing into a textbox
  protected async typeIntoTextInput(label: string, typedValue: string) {
    await this.page.getByRole("textbox", { name: label }).type(typedValue);
  }
}
