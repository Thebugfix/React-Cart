const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
const PORT = 5000;

app.use(cors());
app.use(bodyParser.json());

let cart = [];

app.post('/api/cart', (req, res) => {
  const product = req.body;
  cart.push(product);
  res.status(201).json({ message: 'Product added to cart', cart });
});

app.get('/api/cart', (req, res) => {
  res.json(cart);
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
