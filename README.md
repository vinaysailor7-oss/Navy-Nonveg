# Navy Non-Veg Digital Menu

A responsive bilingual restaurant menu built with HTML, CSS, and vanilla JavaScript.

## Project structure

- `dist/index.html` — semantic page structure and content sections
- `dist/style.css` — responsive visual design and accessibility states
- `dist/script.js` — menu data, search, filters, language switching, and review link
- `dist/assets/seafood-spread.jpg` — optimized header image
- `.openai/hosting.json` — Sites hosting configuration

## Update a price

Open `dist/script.js`, find the dish in `menuData`, and change its numeric price. For example, change `250` in:

```js
item("chicken-fry", "chicken", "ચિકન ફ્રાય", "Chicken Fry", 250)
```

Use `null` with `priceType: "size"`, `"seasonal"`, or `"advance"` when a fixed price is not available.

## Add a dish

Add one `item(...)` entry to `menuData` with a unique ID, category, Gujarati name, English name, and price. Use `tags` when an item should appear in additional filters such as `rice`, `fish`, or `seafood`.

## Add the Google review link

Replace `ADD_GOOGLE_REVIEW_LINK_HERE` in `dist/script.js` with the restaurant's real Google review URL.

## Replace the logo or header image

The supplied official logo is stored at `dist/assets/navy-logo.jpg` and used in the header, hero, and footer. Replace that file with an updated logo using the same filename, or change the image paths in `dist/index.html`. The header food image is `dist/assets/seafood-spread.jpg`.

## Seasonal fish

Seasonal fish names are transcribed from the supplied printed menu. They intentionally use `priceType: "seasonal"`, show no invented prices, and are marked subject to availability and advance order.
