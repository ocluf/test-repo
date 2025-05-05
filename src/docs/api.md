# API Documentation

## Users API

### GET /api/users

Returns a list of all users with their details.

**Response:**

```json
[
  {
    "id": 1,
    "name": "John Doe",
    "email": "john@example.com",
    "birthdate": "1990-05-12",
    "age": 33
  },
  ...
]
```

### GET /api/users/:id

Returns a single user by ID.

**Response:**

```json
{
  "id": 1,
  "name": "John Doe",
  "email": "john@example.com",
  "birthdate": "1990-05-12",
  "age": 33
}
```

### POST /api/users

Create a new user.

**Request Body:**

```json
{
  "name": "New User",
  "email": "newuser@example.com",
  "birthdate": "1995-10-20"
}
```

**Response:**

```json
{
  "id": 6,
  "name": "New User",
  "email": "newuser@example.com",
  "birthdate": "1995-10-20"
}
```

### PUT /api/users/:id

Update an existing user.

**Request Body:**

```json
{
  "name": "Updated Name",
  "email": "updated@example.com"
}
```

**Response:**

```json
{
  "id": 1,
  "name": "Updated Name",
  "email": "updated@example.com",
  "birthdate": "1990-05-12"
}
```

### DELETE /api/users/:id

Delete a user.

**Response:**

Status 204 No Content

## Products API

### GET /api/products

Returns a list of all products.

**Query Parameters:**

- `category`: Optional filter by category

**Response:**

```json
[
  {
    "id": 1,
    "name": "Laptop",
    "price": 999.99,
    "category": "Electronics",
    "stock": 50
  },
  ...
]
```

### GET /api/products/:id

Returns a single product by ID.

**Response:**

```json
{
  "id": 1,
  "name": "Laptop",
  "price": 999.99,
  "category": "Electronics",
  "stock": 50
}
```

### POST /api/products

Create a new product.

**Request Body:**

```json
{
  "name": "New Product",
  "price": 199.99,
  "category": "Electronics",
  "stock": 25
}
```

**Response:**

```json
{
  "id": 6,
  "name": "New Product",
  "price": 199.99,
  "category": "Electronics",
  "stock": 25
}
```

### PUT /api/products/:id

Update an existing product.

**Request Body:**

```json
{
  "name": "Updated Product",
  "price": 249.99
}
```

**Response:**

```json
{
  "id": 1,
  "name": "Updated Product",
  "price": 249.99,
  "category": "Electronics",
  "stock": 50
}
```

### DELETE /api/products/:id

Delete a product.

**Response:**

Status 204 No Content
