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
      customerEmail: page.locator(data.checkoutForm.customerEmail),
      privacyCheckbox: page.locator(data.checkoutForm.privacyCheckbox),
      continue: page.locator(data.checkoutForm.continue),
      continueAsGuestBtn: page.locator(data.checkoutForm.continueAsGuestBtn),
      shippingFirstName: page.locator(data.checkoutForm.shippingFirstName),
      shippingLastName: page.locator(data.checkoutForm.shippingLastName),
      addressLine: page.locator(data.checkoutForm.addressLine),
      city: page.locator(data.checkoutForm.city),
      postcode: page.locator(data.checkoutForm.postcode),
      phoneNumber: page.locator(data.checkoutForm.phoneNumber),
      shippingContinue: page.locator(data.checkoutForm.shippingContinue),
      comment: page.locator(data.checkoutForm.comment),
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
    await this.page.locator(data.checkoutForm.customerEmail).type(Email);
    await this.page.getByText("Yes, I agree with the privacy policy.").click();
    await this.page.locator(data.checkoutForm.continue).click({ force: true });
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

    await this.page
      .locator(data.checkoutForm.shippingFirstName)
      .type(firstName);
    await this.page.locator(data.checkoutForm.shippingLastName).type(lastName);
    await this.page.locator(data.checkoutForm.addressLine).type(address);
    await this.page.locator(data.checkoutForm.city).type(city);
    await this.page.locator(data.checkoutForm.postcode).type(postcode);
    await this.page.locator(data.checkoutForm.phoneNumber).type(phoneNumber);
    await this.page.waitForLoadState("load");
    await this.page
      .locator(data.checkoutForm.shippingContinue)
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
