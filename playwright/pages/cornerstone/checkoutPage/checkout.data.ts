export const url = "/checkout";

export const checkoutForm = {
  customerEmail: "#email",
  privacyCheckbox: '[name="privacyPolicy"]',
  continue: "#checkout-customer-continue",
  continueAsGuestBtn: '[data-test="customer-guest-continue"]',
  shippingFirstName: '[data-test="firstNameInput-text"]',
  shippingLastName: '[data-test="lastNameInput-text"]',
  addressLine: '[data-test="addressLine1Input-text"]',
  city: '[data-test="cityInput-text"]',
  postcode: '[data-test="postCodeInput-text"]',
  phoneNumber: '[data-test="phoneInput-text"]',
  shippingContinue: "#checkout-shipping-continue",
  comment: '[name="orderComment"]',
};

export const cardDetails = {
  cardNumber: "#ccNumber",
  cardExpiry: "#ccExpiry",
  cardName: "#ccName",
  cvv: "#ccCvv",
  placeOrder: "#checkout-payment-continue",
};

export const orderConfirmation = '[data-test="order-confirmation-heading"]';
