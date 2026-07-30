# Software License Template + JavaScript UI Components

**Business-ready • Marketing-friendly • Website development focused**

A clean, professional proprietary software license template plus ready-to-use JavaScript components for displaying Terms & Conditions and Unlock / License acceptance flows on your website or web app.

Inspired by modern App Store style agreements and one-time Pro unlock experiences.

## What’s Included

- `LICENSE.md` – Full proprietary software license agreement template
- `docs/license-ui.js` – Lightweight vanilla JavaScript module for license modals and unlock screens
- `docs/license-ui.css` – Matching dark-mode friendly styles
- `docs/index.html` – Interactive live demo (License Agreement + Unlock Pro screen)
- **GitHub Actions workflows** (visible in the Workflows tab on iPhone)

## GitHub Actions Workflows (now live)

Two workflows are added so the **Workflows** tab is no longer empty:

1. **CI – License Template Check** (`.github/workflows/ci.yml`)
   - Validates that all core files exist
   - Checks JavaScript syntax
   - Runs on every push + can be triggered manually from iPhone

2. **Deploy License UI Demo to GitHub Pages** (`.github/workflows/pages.yml`)
   - Deploys the interactive demo to GitHub Pages
   - Manual trigger available (`workflow_dispatch`) so you can run it from the GitHub mobile app or Working Copy on iPhone

### How to enable the live demo
1. Go to the repository **Settings → Pages**
2. Under “Build and deployment” choose **Source: GitHub Actions**
3. The next push (or manual run) will publish the demo.

After that the demo will be available at:  
`https://pointgoddesscc-sketch.github.io/software-license-template/`

## Using with Working Copy on iPhone (App Store)

This repository is fully compatible with **Working Copy** (the Git client from the App Store):

1. Open Working Copy on your iPhone
2. Clone this repo (`pointgoddesscc-sketch/software-license-template`)
3. You can edit the license text, JS, or CSS directly on device
4. Push changes – the CI workflow will run automatically
5. From the GitHub mobile app you can also manually trigger the workflows from the **Workflows** tab

The unlock-style demo page works great when previewed on iPhone.

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
- Fully usable from iPhone via Working Copy + GitHub mobile

## Customization Tips

- Update the LICENSE.md with your company name, jurisdiction, and product-specific rules.
- Style the CSS variables to match your brand colors.
- For production, always have a lawyer review the final license text.

## Support the Original Inspiration

This template is inspired by the excellent developer tools from independent creators (such as Working Copy by Anders Borum). If you use similar products, support the developers through official purchases.

---

Created for business, marketing, and website development workflows.  
Feel free to fork, star, and adapt for your next product launch!
