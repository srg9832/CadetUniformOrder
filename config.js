// Change this after deploying the Google Apps Script backend.
window.UNIFORM_APP_CONFIG = {
  API_URL: "https://script.google.com/macros/s/AKfycbyCE5KvUAIq0tdQgo35OQoNW2k8pwclTFcA6dRiEivUDhyAznZi-3YlSSkC5hNc7fOh/exec",
  SITE_NAME: "Cadet Uniform Order Center",
  UNIT_NAME: "Your Squadron",
  CURRENCY: "USD",
  ORDER_PREFIX: "UNIF",
  PAYMENTS: {
    VENMO_USERNAME: "srg9832",
    PAYPAL_USERNAME: "SpencerGilchrist",
    // If you create/confirm a PayPal.Me link, put only the PayPal.Me name here.
    // Example: PAYPAL_ME: "SpencerGilchrist"
    PAYPAL_ME: "",
    // Optional future PayPal Business Payment Link for cards / Apple Pay / Venmo.
    PAYPAL_BUSINESS_LINK: ""
  },
  // Demo mode lets the site work before the Google Apps Script URL is configured.
  // Orders are stored only in this browser while demo mode is active.
  DEMO_MODE: false
};
