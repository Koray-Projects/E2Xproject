import { Page, Locator } from "@playwright/test";
import { BasePage } from "../../basePage";
import * as data from "./checkout.data";
import { faker } from "@faker-js/faker";

export class CheckoutPage extends BasePage {
  readonly form: {
    customerEmail: Locator;
    privacyCheckbox: Locator;
    continue: Locator;
    continueAsGuestBtn: Locator;
    shippingFirstName: Locator;
    shippingLastName: Locator;
    addressLine: Locator;
    city: Locator;
    postcode: Locator;
    phoneNumber: Locator;
    shippingContinue: Locator;
    comment: Locator;
  };
  readonly cardDetails: {
    cardNumber: Locator;
    cardExpiry: Locator;
    cardName: Locator;
    cvv: Locator;
    placeOrder: Locator;
  };
  readonly orderConfirmation: Locator;

  /**
   * @description An object that represents the CheckoutPage.
   * @param {Page} page The test page object.
   */

  constructor(page: Page) {
    super(page, data.url);

    this.form = {
      customerEmail: page.locator(data.form.customerEmail),
      privacyCheckbox: page.locator(data.form.privacyCheckbox),
      continue: page.locator(data.form.continue),
      continueAsGuestBtn: page.locator(data.form.continueAsGuestBtn),
      shippingFirstName: page.locator(data.form.shippingFirstName),
      shippingLastName: page.locator(data.form.shippingLastName),
      addressLine: page.locator(data.form.addressLine),
      city: page.locator(data.form.city),
      postcode: page.locator(data.form.postcode),
      phoneNumber: page.locator(data.form.phoneNumber),
      shippingContinue: page.locator(data.form.shippingContinue),
      comment: page.locator(data.form.comment),
    };
    this.cardDetails = {
      cardNumber: page.locator(data.cardDetails.cardNumber),
      cardExpiry: page.locator(data.cardDetails.cardExpiry),
      cardName: page.locator(data.cardDetails.cardName),
      cvv: page.locator(data.cardDetails.cvv),
      placeOrder: page.locator(data.cardDetails.placeOrder),
    };
    this.orderConfirmation = page.locator(data.orderConfirmation);
  }

  /**
   * A function that generates a random email.
   */
  async generateRandomEmail() {
    const Email = faker.internet.email();
    await this.page.locator(data.form.customerEmail).type(Email);
    await this.page.getByText("Yes, I agree with the privacy policy.").click();
    await this.page.locator(data.form.continue).click({ force: true });
  }

  /**
   * A function that completes all mandatory input fields using randomly generated data.
   */
  async fillMandatoryShippingFields() {
    const firstName = faker.name.firstName();
    const lastName = faker.name.lastName();
    const address = faker.address.streetAddress();
    const city = faker.address.city();
    const postcode = faker.address.zipCode();
    const phoneNumber = faker.phone.number();

    await this.page.locator(data.form.shippingFirstName).type(firstName);
    await this.page.locator(data.form.shippingLastName).type(lastName);
    await this.page.locator(data.form.addressLine).type(address);
    await this.page.locator(data.form.city).type(city);
    await this.page.locator(data.form.postcode).type(postcode);
    await this.page.locator(data.form.phoneNumber).type(phoneNumber);
    await this.page.waitForLoadState("load");
    await this.page
      .locator(data.form.shippingContinue)
      .click({ clickCount: 3 });
  }

  /**
   * A function that completes card detail input fields.
   */
  async enterCardDetails() {
    const cvv = faker.finance.creditCardCVV();
    const fullName = faker.name.fullName();

    await this.page
      .locator(data.cardDetails.cardNumber)
      .type("4111 1111 1111 1111");
    await this.page.locator(data.cardDetails.cardExpiry).type("05/28");
    await this.page.locator(data.cardDetails.cvv).type(cvv);
    await this.page.locator(data.cardDetails.cardName).type(fullName);
    await this.page.locator(data.cardDetails.placeOrder).click();
  }
}
