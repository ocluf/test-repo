/**
 * Product model
 */

class Product {
  constructor(id, name, price, category, stock = 0) {
    this.id = id;
    this.name = name;
    this.price = parseFloat(price);
    this.category = category;
    this.stock = parseInt(stock);
  }

  /**
   * Check if product is in stock
   * @returns {boolean} True if stock > 0
   */
  isInStock() {
    return this.stock > 0;
  }

  /**
   * Get formatted price
   * @returns {string} Price formatted as currency
   */
  getFormattedPrice() {
    return `$${this.price.toFixed(2)}`;
  }

  /**
   * Update stock quantity
   * @param {number} quantity - Quantity to add (positive) or remove (negative)
   * @returns {number} New stock level
   * @throws {Error} If resulting stock would be negative
   */
  updateStock(quantity) {
    const newStock = this.stock + quantity;
    if (newStock < 0) {
      throw new Error('Insufficient stock');
    }
    
    this.stock = newStock;
    return this.stock;
  }

  /**
   * Apply discount to product price
   * @param {number} percentage - Discount percentage (0-100)
   * @returns {number} Discounted price
   */
  applyDiscount(percentage) {
    if (percentage < 0 || percentage > 100) {
      throw new Error('Discount percentage must be between 0 and 100');
    }
    
    const discountFactor = (100 - percentage) / 100;
    return parseFloat((this.price * discountFactor).toFixed(2));
  }

  /**
   * Convert to JSON representation
   * @returns {Object} JSON object
   */
  toJSON() {
    return {
      id: this.id,
      name: this.name,
      price: this.price,
      formattedPrice: this.getFormattedPrice(),
      category: this.category,
      stock: this.stock,
      inStock: this.isInStock()
    };
  }
}

module.exports = Product;
