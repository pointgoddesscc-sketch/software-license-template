# Software License Template + JavaScript UI Components

**Business-ready • Marketing-friendly • Website development focused**

A clean, professional proprietary software license template plus ready-to-use JavaScript components for displaying Terms & Conditions and Unlock / License acceptance flows on your website or web app.

Inspired by modern App Store style agreements and one-time Pro unlock experiences.

## What’s Included

- `LICENSE.md` – Full proprietary software license agreement template
- `docs/license-ui.js` – Lightweight vanilla JavaScript module for license modals and unlock screens
- `docs/license-ui.css` – Matching dark-mode friendly styles
- Example usage for marketing sites and SaaS product pages

## Quick Start for Website Developers

1. Clone or download this repo.
2. Copy `docs/license-ui.js` and `docs/license-ui.css` into your project.
3. Include them in your HTML:

```html
<link rel="stylesheet" href="license-ui.css">
<script src="license-ui.js"></script>
```

4. Initialize the license modal:

```javascript
// Example: Show license agreement before unlock
LicenseUI.showAgreement({
  title: "Software License Agreement",
  contentUrl: "./LICENSE.md", // or your own terms
  onAgree: () => {
    console.log("User agreed – proceed to unlock / checkout");
    // Call your payment or unlock logic here
  },
  onCancel: () => {
    console.log("User cancelled");
  }
});
```

## Unlock Pro Style Screen (Marketing Example)

```javascript
LicenseUI.showUnlock({
  title: "Unlock Pro Capabilities",
  features: [
    { name: "Unlimited repositories", price: null },
    { name: "Push commits & advanced features", price: "$35.99", permanent: true },
    { name: "Restore previous purchase", price: "Free" }
  ],
  trialExpired: true,
  onPurchase: () => {
    // Redirect to Stripe / App Store / your checkout
  },
  onRestore: () => {
    // Call restore purchase API
  }
});
```

## Why This Helps Your Business & Marketing

- Builds trust with clear, professional legal language
- Converts better with a polished unlock experience similar to successful apps
- Easy to brand and integrate into any JavaScript website or React/Vue project
- Ready for App Store style compliance messaging

## Customization Tips

- Update the LICENSE.md with your company name, jurisdiction, and product-specific rules.
- Style the CSS variables to match your brand colors.
- For production, always have a lawyer review the final license text.

## Support the Original Inspiration

This template is inspired by the excellent developer tools from independent creators (such as Working Copy by Anders Borum). If you use similar products, support the developers through official purchases.

---

Created for business, marketing, and website development workflows.  
Feel free to fork, star, and adapt for your next product launch!
