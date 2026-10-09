# Nekolepon Studio Website

A responsive, single-page studio website built with plain HTML, CSS, and JavaScript. No build step or framework dependency is required.

## Run locally

Open `index.html` in a browser, or run a local static server from this directory:

```bash
python -m http.server 3000
```

Then visit http://localhost:3000.

## Deploy to Vercel

1. Sign in to Vercel and choose **Add New → Project**.
2. Import `NekoleponDev/nekolepon-site` from GitHub.
3. Keep the project root as `./`.
4. Select **Other** as the framework preset if Vercel asks.
5. Leave the Build Command and Output Directory empty; the site is static and `index.html` is at the repository root.
6. Select **Deploy**.

New commits to the configured production branch will trigger deployments automatically after the project is connected.

## Before launch

- Update the `hello@nekolepon.com` email address in `index.html` if another contact address should be used.
- Replace the Hening project details and availability when you have confirmed public information.
- Add real social links when the studio accounts are ready.

## Files

- `index.html` — page content and inline SVG illustrations
- `styles.css` — responsive neo-brutalist design
- `script.js` — accessible mobile navigation
- `favicon.svg` — custom cat mark
- `vercel.json` — static deployment settings and response headers
