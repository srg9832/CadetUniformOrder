# Cadet Uniform Order Center

A lightweight, installable uniform-ordering PWA built for GitHub Pages. It uses a Google Sheet + Google Apps Script as the optional shared backend, so there is no Supabase database to maintain.

## What is included

- Mobile-friendly catalog and installable PWA
- Vanguard, local patch, local DTF shirt, and other product sources
- At-cost pricing
- Sizes/options and custom text such as name tapes
- Guided starter kits
- Shopping cart and order submission
- Venmo, PayPal/card, cash, or other payment preference
- Order lookup by order number + email
- Admin token login
- Mark paid/unpaid and change order status
- Consolidated supplier purchase list with cadet allocation
- Product/price editor
- Vanguard supplier URL and price-verification fields
- Demo mode that works without any backend

## Recommended architecture

GitHub Pages hosts the static site/PWA. Google Apps Script provides a tiny HTTPS API. A Google Sheet stores Products, Orders, and Settings.

This avoids the Supabase sleep/reactivation issue while still letting multiple parents submit orders from different devices.

## 1. Try it locally first

`config.js` ships with:

```js
DEMO_MODE: true
```

Open the site through a simple local web server, or publish it to GitHub Pages. Demo orders/products use browser localStorage.

Demo admin token: `demo`

## 2. Create the Google Sheet backend

1. Create a blank Google Sheet.
2. Copy the spreadsheet ID from its URL.
3. In the Sheet choose **Extensions > Apps Script**.
4. Replace `Code.gs` with `apps-script/Code.gs` from this project.
5. In Apps Script open **Project Settings > Script Properties** and create:
   - `SHEET_ID` = the spreadsheet ID
   - `ADMIN_TOKEN` = a long private password/token only you know
6. In the Apps Script editor run `setupSheets()` once and approve permissions.
7. Choose **Deploy > New deployment > Web app**.
8. Execute as: **Me**.
9. Who has access: **Anyone**.
10. Deploy and copy the URL ending in `/exec`.

The Sheet will contain:

- `Products`
- `Orders`
- `Settings`

## 3. Connect GitHub Pages to the Sheet

Edit `config.js`:

```js
window.UNIFORM_APP_CONFIG = {
  API_URL: "https://script.google.com/macros/s/YOUR_DEPLOYMENT_ID/exec",
  SITE_NAME: "Your Squadron Uniform Order Center",
  UNIT_NAME: "Your Squadron",
  CURRENCY: "USD",
  ORDER_PREFIX: "UNIF",
  DEMO_MODE: false
};
```

Commit/push the change to GitHub.

## 4. Publish on GitHub Pages

Create a personal repository, copy these files into it, and enable **Settings > Pages > Deploy from branch**. Select `main` and `/ (root)`.

The resulting HTTPS site can be installed as a PWA on Android/Chrome and on iPhone/iPad using Add to Home Screen.

## 5. Product setup

Use the Admin > Products & Prices screen or edit the Products sheet.

Important fields:

- `id`: your SKU/product identifier
- `name`
- `category`
- `description`
- `price`: what the member pays; designed to be your actual at-cost amount
- `source`: Vanguard, Local, Local DTF, Other
- `sourceUrl`: supplier page
- `options`: pipe-separated, e.g. `Small|Medium|Large|XL`
- `customLabel`: prompt such as `Last name exactly as it should appear`
- `verified`: date/note when price was last checked

## Vanguard pricing

The app intentionally does not scrape Vanguard. Product records already contain the supplier URL, SKU/ID, price, and verification fields so an authorized Vanguard API/feed can be added later without changing the storefront or order structure.

For now, the administrator can open the supplier page and update the price from the Product editor.

## Payment model

The application does not take custody of card information. The member selects their preferred method:

- Venmo
- PayPal / card if offered through PayPal
- Cash
- Other

You then mark the order paid in the admin panel. This keeps the website much simpler and avoids becoming a payment-card application.

## Suggested next customizations

- Replace demo product list with your exact approved uniform catalog.
- Add your real unit name and branding.
- Add exact OCP/blues sizes and item URLs.
- Add local unit patch and DTF shirt actual costs.
- Add payment instructions/profile links to the Settings sheet and checkout confirmation.
- Add optional CSV/print export for Vanguard order entry.


## Payment setup

Payment usernames are in `config.js` under `PAYMENTS`. The starter values are:

- Venmo: `@srg9832`
- PayPal: `@SpencerGilchrist`

Venmo checkout opens the configured Venmo profile and shows the exact order total and order number to use as the payment note. Payment still needs to be verified manually in Admin before being marked paid.

For PayPal, a normal `@username` is not automatically a PayPal.Me URL. If you create or confirm a PayPal.Me name, enter it in `PAYPAL_ME`. The site will then generate a payment link containing the order total. If you later create a PayPal Business Payment Link, paste it into `PAYPAL_BUSINESS_LINK`; the site will prefer that link.

Cash requires no external setup; simply mark the order paid in Admin when cash is received.

## OCP starter workflow added 2026-09-29

The **New Cadet OCP Starter** now walks a member through the major OCP components instead of simply dumping products into a cart. For components with multiple sources, the user chooses the source before selecting the size.

Included starter components:
- OCP flat-top cap
- OCP coat (adult/youth plus Amazon alternative)
- OCP trousers (adult/youth plus Amazon alternative)
- Tan 499 rigger belt
- Blousing bands
- Coyote T-shirt (unit DTF shirt is the default)
- OCP last-name tape
- CIVIL AIR PATROL tape
- Montana Wing patch
- Local unit patch
- AUX patch
- Reverse U.S. flag
- Coyote boots (Amazon / Vanguard / Walmart choices)
- Boot socks from unit bulk stock
- Required OCP/fleece rank tab (quantity selectable)
- Optional Tan 499 fleece

### Payment-hold items
Products can now have **Hold payment** enabled. Use this for:
- prices that need a live check,
- locally produced items whose material cost has not been set yet,
- supplier items with unreliable size availability,
- the Tan 499 fleece.

Held items remain on the member's order but are excluded from the **Pay now** amount and from the admin **Supplier Purchase List**. This prevents collecting money or ordering an unavailable item before it is verified.

Before publishing the live site, open **Admin -> Products & Prices** and set your current at-cost prices for:
- Unit Coyote T-Shirt
- Unit Patch
- Unit-stock reverse flag
- Unit-stock blousing bands

After setting a reliable current price, edit the product and turn off **Hold payment** if you want that item included in immediate checkout payments.

### Current Vanguard references built into the demo catalog
The starter catalog includes supplier links and the Vanguard prices verified on 2026-09-29 for the relevant CAP OCP items. Treat the verification date as part of the product record; update it whenever you manually verify pricing.

## Price verification in Demo Mode

Open **Administration → Products & Prices** and use **Verify Price** beside a supplier item. The app opens the supplier page in a new tab. Check the current price, return to the app, enter the price, and save. The app stamps the current date and removes the payment hold when a valid price and any required availability check are confirmed. Demo-mode changes are stored only in that browser's local storage.

## Bulk order batches

The Admin **Bulk Orders** tab now keeps a rolling purchase queue. Paid orders that have not previously been ordered appear in the current queue. When you place the supplier order, click **Mark This Batch Ordered**. The app assigns a permanent batch ID (for example `BULK-20260929-01`), stores the ordered timestamp, marks those family orders Ordered, and removes them from the current queue. Any new paid order submitted afterward automatically appears in the next queue. Prior batches remain visible and printable in Bulk Order History.

If you are upgrading an existing Google Sheet backend, paste the new `apps-script/Code.gs` into Apps Script and run `setupSheets()` once again. It adds the `batchId` and `batchOrderedAt` order columns without deleting existing orders.

## Distribution / Pickup workflow

After a bulk order is created, open **Administration → Distribution**. Choose the bulk-order batch. Each cadet has a packing/pickup card showing cadet name, parent/purchaser, phone, email, CAPID, order number, and the items/sizes assigned to that order.

Check an item as it is handed out. Completed items disappear from the working list. When every item for a cadet is checked, that cadet disappears automatically and the order is marked complete. Use **Show completed cadets/items** to audit prior handouts. **Print This List** produces a clean paper packing/distribution sheet for the selected batch.

If upgrading an existing Google Sheet backend, replace `Code.gs` and run `setupSheets()` once. It adds the new name/distribution columns without deleting existing orders.

## v9 interface redesign
The member-facing OCP starter now uses a one-item-at-a-time wizard with a simple progress bar. The visual design was flattened and simplified: fewer cards, no large gradient hero, minimal shadows/decoration, compact admin tabs, and a paper-form-like checkout/distribution style.

## v10 notes
- Built-in size guides are shown inside the OCP starter for supported Vanguard-sized items.
- Price verification and item availability are separate: Verify Price updates the stored price/date; Make Active allows families to order it.
- Deactivate stops new family orders at the currently stored price without deleting the product.
- Local, Local DTF, and Unit Bulk Stock are displayed as one Local source group.
- The reverse U.S. flag bulk option is categorized under Amazon.


### v11 activation behavior
`Make Active` is now an explicit administrator approval of the currently displayed price. If the price is greater than zero, clicking **Make Active** clears `paymentHold`, stamps the current verification date, and makes the product selectable by families. **Deactivate** hides it from ordering while preserving the stored price.


## v19 functional fixes

- Adult and youth OCP coats are shown as one starter item; the selected size chooses the correct underlying Vanguard product and price.
- OCP trousers and belts continue to use one combined selector with price-by-size/option.
- Blousing bands no longer show a size/option field; quantity only.
- The checkout/cart total calculation was restored; this was the cause of the Review and Cart screens appearing unresponsive in v18.
- Review buttons now also use direct click handlers as a fallback.
- Amazon/Walmart items remain available in Admin but are hidden from the member starter. Boots remain hidden from the starter.
- Legacy Local DTF / Unit Bulk Stock records normalize to Local automatically.


## v21 boot guidance
- Boots are a required OCP item, but the starter defaults to parent/member purchase separately.
- Entering the Boots step shows a required-item warning that recommends buying suitable coyote-brown boots elsewhere when practical.
- The self-purchase section includes both the lower-cost Amazon option and the Vanguard product link.
- The Vanguard boot remains available for unit ordering.
