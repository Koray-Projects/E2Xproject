import { expect, test } from "../../fixtures/test";
import { mockData } from "../../fixtures/mockData";

test.describe("E2E: ", async () => {
  test.beforeEach(async ({ HomePage, page }) => {
    //GIVEN: I am on cornerstone homepage.
    await HomePage.goto();
    await expect(page).toHaveURL("/");
  });

  test("completing a checkout journey starting from homepage", async ({
    HomePage,
    SearchPage,
    CartPage,
    CheckoutPage,
    page,
  }) => {
    //WHEN: I search for 'x' product and press enter.
    await HomePage.searchOptions(mockData.productName);

    //THEN: Page is populated with product cards and the product ('x') I've searched for is visible.
    const searchPrice = await SearchPage.productCard.price.textContent();
    await SearchPage.assertProductCard(mockData.productName);

    //AND: I add product 'x' to basket.
    await SearchPage.addProductToBasket();

    //THEN: I assert price of one unit of product 'x' on search page is coherent with one unit on checkout page.
    const checkoutPrice =
      await CartPage.productDetails.pricePerUnit.textContent();
    await expect(searchPrice).toEqual(checkoutPrice);

    //AND: I assert product names are coherent.
    const checkoutProductName = await CartPage.productDetails.productName;
    await expect(checkoutProductName).toHaveText(mockData.productName);

    //THEN: I click checkout button.
    await CartPage.checkoutBtn.click();

    //THEN: I generate a random customer email, check privacy policy, and continue.
    await CheckoutPage.generateRandomEmail();

    //AND: I fill in all mandatory input fields and click continue.
    await CheckoutPage.fillMandatoryShippingFields();
    const checkoutName =
      await CheckoutPage.form.shippingFirstName.textContent();

    //AND: I add my credit card details and place order.
    await CheckoutPage.enterCardDetails();

    //THEN: I should be taken to order confirmation page with a thank you message containing my name.
    await page.waitForLoadState("load");
    const orderConfirmationMessage =
      await CheckoutPage.orderConfirmation.textContent();
    await expect(orderConfirmationMessage).toContain(
      `Thank you ${checkoutName}`
    );
  });
});
