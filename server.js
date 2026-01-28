const express = require('express');
const path = require('path');
const fs = require('fs');

const app = express();
const PORT = process.env.PORT || 3000;

// Security headers
app.use((req, res, next) => {
    res.setHeader('X-Frame-Options', 'DENY');
    res.setHeader('X-XSS-Protection', '1; mode=block');
    res.setHeader('X-Content-Type-Options', 'nosniff');
    res.setHeader('Referrer-Policy', 'strict-origin-when-cross-origin');
    next();
});

// API endpoint for config (env vars)
app.get('/api/config', (req, res) => {
    res.json({
        ETHERSCAN_KEY: process.env.ETHERSCAN_KEY || '',
        COINGECKO_KEY: process.env.COINGECKO_KEY || ''
    });
});

// Serve index.html with injected env vars
app.get('/', (req, res) => {
    let html = fs.readFileSync(path.join(__dirname, 'index.html'), 'utf8');
    
    // Inject env vars into the config
    const etherscanKey = process.env.ETHERSCAN_KEY || 'Y73RUTA4VPZYAZH23U8H3KZ1A37Z3C5CJZ';
    const coingeckoKey = process.env.COINGECKO_KEY || '';
    
    html = html.replace(
        "ETHERSCAN_KEY: 'Y73RUTA4VPZYAZH23U8H3KZ1A37Z3C5CJZ'",
        `ETHERSCAN_KEY: '${etherscanKey}'`
    );
    
    // Add CoinGecko key if provided
    if (coingeckoKey) {
        html = html.replace(
            "COINGECKO_API: 'https://api.coingecko.com/api/v3/simple/price'",
            `COINGECKO_API: 'https://pro-api.coingecko.com/api/v3/simple/price',\n    COINGECKO_KEY: '${coingeckoKey}'`
        );
    }
    
    res.send(html);
});

// Serve static files (css, js, images, etc)
app.use(express.static(__dirname, {
    extensions: ['html'],
    index: false // We handle index.html above
}));

// SPA fallback
app.get('*', (req, res) => {
    res.redirect('/');
});

app.listen(PORT, '0.0.0.0', () => {
    console.log(`Wallet Lens running on port ${PORT}`);
    console.log(`Etherscan Key: ${process.env.ETHERSCAN_KEY ? 'SET' : 'USING DEFAULT'}`);
    console.log(`CoinGecko Key: ${process.env.COINGECKO_KEY ? 'SET' : 'NOT SET'}`);
});
