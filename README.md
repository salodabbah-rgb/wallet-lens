# Wallet Lens

Portfolio tracker for ETH and BTC wallets.

## Deploy to Railway

1. Push this code to a GitHub repository
2. Go to [railway.app](https://railway.app)
3. Click "New Project" → "Deploy from GitHub repo"
4. Select your repository
5. **Add environment variables** (see below)
6. Railway will automatically detect Node.js and deploy

### Environment Variables (Required)

| Variable | Description | Get it from |
|----------|-------------|-------------|
| `ETHERSCAN_KEY` | Etherscan API key | https://etherscan.io/myapikey (free) |
| `COINGECKO_KEY` | CoinGecko API key (optional) | https://www.coingecko.com/en/api (free demo) |

**To add in Railway:**
1. Go to your project → Variables
2. Add `ETHERSCAN_KEY` = your key
3. Redeploy

### Manual Railway Setup
If auto-deploy doesn't work:
- Build Command: `npm install`
- Start Command: `npm start`

## Local Development

```bash
# Set env vars
export ETHERSCAN_KEY=your_key_here

# Install and run
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

## APIs Used
- **Etherscan** - ETH balances, tokens, transactions (needs API key)
- **Blockstream** - Bitcoin data (no key needed)
- **CoinGecko** - Prices (optional key for higher limits)

## Mobile-First Design
The app features a prominent wallet input bar on mobile devices, making it easy to add wallets without navigating through menus.
