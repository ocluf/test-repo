const express = require('express');
const utils = require('../utils');
const router = express.Router();

// Mock user data
const users = [
  { id: 1, name: 'John Doe', email: 'john@example.com', birthdate: '1990-05-12' },
  { id: 2, name: 'Jane Smith', email: 'jane@example.com', birthdate: '1985-10-25' },
  { id: 3, name: 'Bob Johnson', email: 'bob@example.com', birthdate: '1992-03-30' },
  { id: 4, name: 'Alice Williams', email: 'alice@example.com', birthdate: '1988-12-15' },
  { id: 5, name: 'Charlie Brown', email: 'charlie@example.com', birthdate: '1995-07-08' }
];

// Get all users
router.get('/', (req, res) => {
  // Add age to each user
  const usersWithAge = users.map(user => {
    const birthdate = new Date(user.birthdate);
    return {
      ...user,
      age: utils.calculateAge(birthdate)
    };
  });
  
  res.json(usersWithAge);
});

// Get user by ID
router.get('/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const user = users.find(u => u.id === id);
  
  if (!user) {
    return res.status(404).json({ message: 'User not found' });
  }
  
  const birthdate = new Date(user.birthdate);
  const userWithAge = {
    ...user,
    age: utils.calculateAge(birthdate)
  };
  
  res.json(userWithAge);
});

// Create new user
router.post('/', (req, res) => {
  const { name, email, birthdate } = req.body;
  
  if (!name || !email || !birthdate) {
    return res.status(400).json({ message: 'Name, email and birthdate are required' });
  }
  
  const newUser = {
    id: users.length + 1,
    name,
    email,
    birthdate
  };
  
  users.push(newUser);
  res.status(201).json(newUser);
});

// Update user
router.put('/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const userIndex = users.findIndex(u => u.id === id);
  
  if (userIndex === -1) {
    return res.status(404).json({ message: 'User not found' });
  }
  
  const { name, email, birthdate } = req.body;
  
  const updatedUser = {
    ...users[userIndex],
    name: name || users[userIndex].name,
    email: email || users[userIndex].email,
    birthdate: birthdate || users[userIndex].birthdate
  };
  
  users[userIndex] = updatedUser;
  res.json(updatedUser);
});

// Delete user
router.delete('/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const userIndex = users.findIndex(u => u.id === id);
  
  if (userIndex === -1) {
    return res.status(404).json({ message: 'User not found' });
  }
  
  users.splice(userIndex, 1);
  res.status(204).end();
});

module.exports = router;
