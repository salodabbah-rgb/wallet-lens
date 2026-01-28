# Wallet Lens

Portfolio tracker for ETH and BTC wallets.

## Deploy to Railway

1. Push this code to a GitHub repository
2. Go to [railway.app](https://railway.app)
3. Click "New Project" → "Deploy from GitHub repo"
4. Select your repository
5. Railway will automatically detect Node.js and deploy

### Environment Variables
No environment variables required - the app runs with default settings.

### Manual Railway Setup
If auto-deploy doesn't work:
- Build Command: `npm install`
- Start Command: `npm start`

## Local Development

```bash
npm install
npm start
```

Then open `http://localhost:3000`

## Features
- Track multiple ETH and BTC wallets
- Auto-detects chain from address format
- ENS resolution support
- Mobile-first interface
- Portfolio analytics and charts

## Mobile-First Design
The app features a prominent wallet input bar on mobile devices, making it easy to add wallets without navigating through menus.
