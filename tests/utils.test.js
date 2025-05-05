const utils = require('../src/utils');

describe('Utils', () => {
  describe('formatDate', () => {
    it('formats date correctly', () => {
      const date = new Date(2023, 0, 15); // Jan 15, 2023
      expect(utils.formatDate(date)).toBe('2023-01-15');
    });
  });

  describe('calculateAge', () => {
    it('calculates age correctly', () => {
      const today = new Date();
      const birthdate = new Date(today.getFullYear() - 30, today.getMonth(), today.getDate());
      expect(utils.calculateAge(birthdate)).toBe(30);
    });
  });

  describe('generateId', () => {
    it('generates id with default length', () => {
      const id = utils.generateId();
      expect(id.length).toBe(10);
    });

    it('generates id with custom length', () => {
      const id = utils.generateId(15);
      expect(id.length).toBe(15);
    });
  });
});
