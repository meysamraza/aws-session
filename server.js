// Minimal Express server for CI/CD demo
const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

// Hardcoded list of products for the demo store
const products = [
  { id: 1, name: 'Wireless Headphones', price: '$99.99' },
  { id: 2, name: 'Smart Watch', price: '$149.99' },
  { id: 3, name: 'Leather Wallet', price: '$39.99' },
  { id: 4, name: 'Running Shoes', price: '$79.99' },
  { id: 5, name: 'Minimalist Backpack', price: '$59.99' },
  { id: 6, name: 'Ceramic Coffee Mug', price: '$14.99' }
];

// Serve the single HTML page
app.get('/', (req, res) => {
  const productCardsHtml = products
    .map(
      (product) => `
        <div class="card">
          <div class="image-placeholder">
            <span>Image</span>
          </div>
          <div class="card-content">
            <h3 class="product-name">${product.name}</h3>
            <p class="product-price">${product.price}</p>
            <button type="button" class="cart-button">Add to cart</button>
          </div>
        </div>
      `
    )
    .join('');

  const html = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>CI/CD Demo</title>
  <style>
    * {
      box-sizing: border-box;
      margin: 0;
      padding: 0;
    }
    body {
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;
      background-color: #f7f9fa;
      color: #333;
      padding: 24px 16px;
    }
    .container {
      max-width: 1000px;
      margin: 0 auto;
    }
    .demo-header {
      background: #ffffff;
      padding: 24px;
      border-radius: 8px;
      margin-bottom: 24px;
      box-shadow: 0 2px 6px rgba(0, 0, 0, 0.06);
    }
    .demo-header h1 {
      font-size: 28px;
      margin-bottom: 8px;
      color: #111827;
    }
    .demo-header p {
      font-size: 16px;
      color: #4b5563;
    }
    .store-header {
      margin-bottom: 20px;
      padding-bottom: 10px;
      border-bottom: 2px solid #e5e7eb;
    }
    .store-header h2 {
      font-size: 22px;
      color: #1f2937;
    }
    .product-grid {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(260px, 1fr));
      gap: 20px;
    }
    .card {
      background: #ffffff;
      border: 1px solid #e5e7eb;
      border-radius: 8px;
      overflow: hidden;
      display: flex;
      flex-direction: column;
      box-shadow: 0 1px 3px rgba(0, 0, 0, 0.05);
      transition: transform 0.2s ease, box-shadow 0.2s ease;
    }
    .card:hover {
      transform: translateY(-2px);
      box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
    }
    .image-placeholder {
      height: 180px;
      background-color: #e2e8f0;
      display: flex;
      align-items: center;
      justify-content: center;
      color: #64748b;
      font-size: 16px;
      font-weight: 500;
    }
    .card-content {
      padding: 16px;
      display: flex;
      flex-direction: column;
      flex-grow: 1;
    }
    .product-name {
      font-size: 18px;
      font-weight: 600;
      margin-bottom: 8px;
      color: #111827;
    }
    .product-price {
      font-size: 16px;
      font-weight: 700;
      color: #059669;
      margin-bottom: 16px;
    }
    .cart-button {
      margin-top: auto;
      background-color: #2563eb;
      color: #ffffff;
      border: none;
      padding: 10px 16px;
      font-size: 14px;
      font-weight: 600;
      border-radius: 6px;
      cursor: pointer;
      transition: background-color 0.2s ease;
    }
    .cart-button:hover {
      background-color: #1d4ed8;
    }
  </style>
</head>
<body>
  <div class="container">
    <div class="demo-header">
      <h1>CI/CD Demo</h1>
      <p>Application deployed successfully.</p>
    </div>

    <header class="store-header">
      <h2>Demo Store</h2>
    </header>

    <div class="product-grid">
      ${productCardsHtml}
    </div>
  </div>
</body>
</html>`;

  res.send(html);
});

// Health check endpoint
app.get('/health', (req, res) => {
  res.status(200).send('OK');
});

// Start the server
app.listen(port, '0.0.0.0', () => {
  console.log(`Server is running on port ${port}`);
});