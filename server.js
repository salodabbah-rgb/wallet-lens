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

// Serve index.html with injected env vars
app.get('/', (req, res) => {
    let html = fs.readFileSync(path.join(__dirname, 'index.html'), 'utf8');
    
    // Inject API keys from environment
    const etherscanKey = process.env.ETHERSCAN_KEY || 'YourEtherscanApiKey';
    html = html.replace("ETHERSCAN_KEY: 'YourEtherscanApiKey'", `ETHERSCAN_KEY: '${etherscanKey}'`);
    
    res.send(html);
});

// Serve static files
app.use(express.static(__dirname, {
    extensions: ['html'],
    index: false
}));

// SPA fallback
app.get('*', (req, res) => {
    res.redirect('/');
});

app.listen(PORT, '0.0.0.0', () => {
    console.log(`Wallet Lens running on port ${PORT}`);
    console.log(`Etherscan Key: ${process.env.ETHERSCAN_KEY ? 'SET' : 'NOT SET'}`);
});
