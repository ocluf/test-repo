const User = require('../../src/models/user');

describe('User Model', () => {
  let user;

  beforeEach(() => {
    user = new User(1, 'John Doe', 'john@example.com', '1990-05-12');
  });

  describe('constructor', () => {
    it('creates a user with the correct properties', () => {
      expect(user.id).toBe(1);
      expect(user.name).toBe('John Doe');
      expect(user.email).toBe('john@example.com');
      expect(user.birthdate).toBe('1990-05-12');
    });
  });

  describe('getFullName', () => {
    it('returns the full name of the user', () => {
      expect(user.getFullName()).toBe('John Doe');
    });
  });

  describe('getAge', () => {
    it('calculates the correct age', () => {
      // Mock date to ensure consistent test results
      const mockDate = new Date(2023, 0, 1); // Jan 1, 2023
      const realDate = global.Date;
      global.Date = class extends Date {
        constructor() {
          return mockDate;
        }
        static now() {
          return mockDate.getTime();
        }
      };

      expect(user.getAge()).toBe(32); // Age as of Jan 1, 2023

      // Restore original Date
      global.Date = realDate;
    });
  });

  describe('toJSON', () => {
    it('returns a JSON representation with age', () => {
      // Mock date for consistent test results
      const mockDate = new Date(2023, 0, 1); // Jan 1, 2023
      const realDate = global.Date;
      global.Date = class extends Date {
        constructor() {
          return mockDate;
        }
        static now() {
          return mockDate.getTime();
        }
      };

      const json = user.toJSON();
      expect(json).toEqual({
        id: 1,
        name: 'John Doe',
        email: 'john@example.com',
        birthdate: '1990-05-12',
        age: 32
      });

      // Restore original Date
      global.Date = realDate;
    });
  });
});
