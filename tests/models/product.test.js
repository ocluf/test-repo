const Product = require('../../src/models/product');

describe('Product Model', () => {
  let product;

  beforeEach(() => {
    product = new Product(1, 'Test Product', 99.99, 'Electronics', 10);
  });

  describe('constructor', () => {
    it('creates a product with the correct properties', () => {
      expect(product.id).toBe(1);
      expect(product.name).toBe('Test Product');
      expect(product.price).toBe(99.99);
      expect(product.category).toBe('Electronics');
      expect(product.stock).toBe(10);
    });

    it('handles string values for numeric properties', () => {
      const stringProduct = new Product(2, 'String Product', '199.99', 'Books', '5');
      expect(stringProduct.price).toBe(199.99);
      expect(stringProduct.stock).toBe(5);
    });

    it('sets default stock to 0 if not provided', () => {
      const noStockProduct = new Product(3, 'No Stock', 49.99, 'Clothing');
      expect(noStockProduct.stock).toBe(0);
    });
  });

  describe('isInStock', () => {
    it('returns true when stock is greater than 0', () => {
      expect(product.isInStock()).toBe(true);
    });

    it('returns false when stock is 0', () => {
      product.stock = 0;
      expect(product.isInStock()).toBe(false);
    });
  });

  describe('getFormattedPrice', () => {
    it('formats the price correctly', () => {
      expect(product.getFormattedPrice()).toBe('$99.99');
    });

    it('adds zeros for whole numbers', () => {
      product.price = 100;
      expect(product.getFormattedPrice()).toBe('$100.00');
    });
  });

  describe('updateStock', () => {
    it('increases stock correctly', () => {
      expect(product.updateStock(5)).toBe(15);
      expect(product.stock).toBe(15);
    });

    it('decreases stock correctly', () => {
      expect(product.updateStock(-3)).toBe(7);
      expect(product.stock).toBe(7);
    });

    it('throws error when attempting to reduce below 0', () => {
      expect(() => product.updateStock(-15)).toThrow('Insufficient stock');
      expect(product.stock).toBe(10); // Stock should not change
    });
  });

  describe('applyDiscount', () => {
    it('applies discount correctly', () => {
      expect(product.applyDiscount(20)).toBe(79.99);
      // Original price should not change
      expect(product.price).toBe(99.99);
    });

    it('returns original price for 0% discount', () => {
      expect(product.applyDiscount(0)).toBe(99.99);
    });

    it('returns 0 for 100% discount', () => {
      expect(product.applyDiscount(100)).toBe(0);
    });

    it('throws error for invalid discount percentages', () => {
      expect(() => product.applyDiscount(-10)).toThrow('Discount percentage must be between 0 and 100');
      expect(() => product.applyDiscount(110)).toThrow('Discount percentage must be between 0 and 100');
    });
  });

  describe('toJSON', () => {
    it('returns a complete JSON representation', () => {
      const json = product.toJSON();
      expect(json).toEqual({
        id: 1,
        name: 'Test Product',
        price: 99.99,
        formattedPrice: '$99.99',
        category: 'Electronics',
        stock: 10,
        inStock: true
      });
    });
  });
});
