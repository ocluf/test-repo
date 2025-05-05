/**
 * Main application script
 */

// DOM Elements
const loadUsersBtn = document.getElementById('loadUsers');
const userTableBody = document.getElementById('userTableBody');
const loadProductsBtn = document.getElementById('loadProducts');
const productTableBody = document.getElementById('productTableBody');
const categoryFilter = document.getElementById('category');

// Load users from API
async function loadUsers() {
  try {
    const response = await fetch('/api/users');
    if (!response.ok) {
      throw new Error(`Error: ${response.status}`);
    }
    
    const users = await response.json();
    renderUsers(users);
  } catch (error) {
    console.error('Error loading users:', error);
    showError('Failed to load users');
  }
}

// Render users in table
function renderUsers(users) {
  userTableBody.innerHTML = '';
  
  if (users.length === 0) {
    const row = document.createElement('tr');
    row.innerHTML = '<td colspan="4">No users found</td>';
    userTableBody.appendChild(row);
    return;
  }
  
  users.forEach(user => {
    const row = document.createElement('tr');
    row.innerHTML = `
      <td>${user.id}</td>
      <td>${user.name}</td>
      <td>${user.email}</td>
      <td>${user.age || 'N/A'}</td>
    `;
    userTableBody.appendChild(row);
  });
}

// Load products from API
async function loadProducts() {
  try {
    const categoryValue = categoryFilter.value;
    const url = categoryValue ? 
      `/api/products?category=${encodeURIComponent(categoryValue)}` : 
      '/api/products';
    
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`Error: ${response.status}`);
    }
    
    const products = await response.json();
    renderProducts(products);
  } catch (error) {
    console.error('Error loading products:', error);
    showError('Failed to load products');
  }
}

// Render products in table
function renderProducts(products) {
  productTableBody.innerHTML = '';
  
  if (products.length === 0) {
    const row = document.createElement('tr');
    row.innerHTML = '<td colspan="5">No products found</td>';
    productTableBody.appendChild(row);
    return;
  }
  
  products.forEach(product => {
    const row = document.createElement('tr');
    row.innerHTML = `
      <td>${product.id}</td>
      <td>${product.name}</td>
      <td>$${product.price.toFixed(2)}</td>
      <td>${product.category}</td>
      <td>${product.stock}</td>
    `;
    productTableBody.appendChild(row);
  });
}

// Show error message
function showError(message) {
  const errorDiv = document.createElement('div');
  errorDiv.className = 'error';
  errorDiv.textContent = message;
  
  document.body.appendChild(errorDiv);
  
  setTimeout(() => {
    errorDiv.remove();
  }, 3000);
}

// Event listeners
loadUsersBtn.addEventListener('click', loadUsers);
loadProductsBtn.addEventListener('click', loadProducts);
categoryFilter.addEventListener('change', loadProducts);

// Initialize
document.addEventListener('DOMContentLoaded', () => {
  const navLinks = document.querySelectorAll('nav a');
  
  navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      navLinks.forEach(l => l.classList.remove('active'));
      link.classList.add('active');
      
      const target = link.getAttribute('href');
      if (target !== '#') {
        document.querySelector(target).scrollIntoView({
          behavior: 'smooth'
        });
      }
    });
  });
});
