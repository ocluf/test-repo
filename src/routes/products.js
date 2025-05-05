const express = require('express');
const utils = require('../utils');
const router = express.Router();

// Mock product data
const products = [
  { id: 1, name: 'Laptop', price: 999.99, category: 'Electronics', stock: 50 },
  { id: 2, name: 'Smartphone', price: 699.99, category: 'Electronics', stock: 100 },
  { id: 3, name: 'Headphones', price: 149.99, category: 'Electronics', stock: 200 },
  { id: 4, name: 'Coffee Maker', price: 89.99, category: 'Kitchen', stock: 30 },
  { id: 5, name: 'Blender', price: 49.99, category: 'Kitchen', stock: 45 }
];

// Get all products
router.get('/', (req, res) => {
  // Filter by category if provided
  const { category } = req.query;
  
  if (category) {
    const filteredProducts = products.filter(p => 
      p.category.toLowerCase() === category.toLowerCase()
    );
    return res.json(filteredProducts);
  }
  
  res.json(products);
});

// Get product by ID
router.get('/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const product = products.find(p => p.id === id);
  
  if (!product) {
    return res.status(404).json({ message: 'Product not found' });
  }
  
  res.json(product);
});

// Create new product
router.post('/', (req, res) => {
  const { name, price, category, stock } = req.body;
  
  if (!name || !price || !category) {
    return res.status(400).json({ message: 'Name, price and category are required' });
  }
  
  const newProduct = {
    id: products.length + 1,
    name,
    price: parseFloat(price),
    category,
    stock: stock || 0
  };
  
  products.push(newProduct);
  res.status(201).json(newProduct);
});

// Update product
router.put('/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const productIndex = products.findIndex(p => p.id === id);
  
  if (productIndex === -1) {
    return res.status(404).json({ message: 'Product not found' });
  }
  
  const { name, price, category, stock } = req.body;
  
  const updatedProduct = {
    ...products[productIndex],
    name: name || products[productIndex].name,
    price: price ? parseFloat(price) : products[productIndex].price,
    category: category || products[productIndex].category,
    stock: stock !== undefined ? parseInt(stock) : products[productIndex].stock
  };
  
  products[productIndex] = updatedProduct;
  res.json(updatedProduct);
});

// Delete product
router.delete('/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const productIndex = products.findIndex(p => p.id === id);
  
  if (productIndex === -1) {
    return res.status(404).json({ message: 'Product not found' });
  }
  
  products.splice(productIndex, 1);
  res.status(204).end();
});

module.exports = router;
