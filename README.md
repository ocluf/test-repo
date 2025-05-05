# Diff Demo Repository

This repository demonstrates various types of file changes that can appear in GitHub pull requests.

## Features

- Simple Express.js application with RESTful API endpoints
- User and product management
- Configuration settings for different environments
- Enhanced utility functions
- Complete unit tests for models and utilities
- Responsive UI with modern CSS

## Getting Started

### Prerequisites

- Node.js 14.x or higher
- npm 6.x or higher

### Installation

```bash
# Clone the repository
git clone https://github.com/yourusername/diff-demo.git

# Navigate to the project directory
cd diff-demo

# Install dependencies
npm install
```

### Running the Application

```bash
# Start the development server
npm run dev
```

The server will start on http://localhost:3000

### Testing

```bash
# Run tests
npm test

# Run linting
npm run lint
```

## API Endpoints

### Users

- `GET /api/users` - Get all users
- `GET /api/users/:id` - Get user by ID
- `POST /api/users` - Create a new user
- `PUT /api/users/:id` - Update a user
- `DELETE /api/users/:id` - Delete a user

### Products

- `GET /api/products` - Get all products
- `GET /api/products/:id` - Get product by ID
- `POST /api/products` - Create a new product
- `PUT /api/products/:id` - Update a product
- `DELETE /api/products/:id` - Delete a product

## Pull Request Demo

This repository demonstrates the following types of file changes in a pull request:

1. **Modified Files**: Files that have been changed with additions and deletions
2. **Added Files**: Completely new files added to the project
3. **Deleted Files**: Files that have been removed from the project
4. **Renamed Files**: Files that have been renamed or moved
5. **Binary Files**: Changes to non-text files like images
6. **Multiple Hunks**: Files with changes in different, non-adjacent parts
7. **Configuration Changes**: Updates to configuration files

## License

MIT
