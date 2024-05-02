const assert = require('assert');
const calculateNumber = require('./1-calcul');

describe('calculateNumber', () => {
  describe('type == "SUM"', () => {
    it('equal positive numbers a and b are positive', () => {
      assert.strictEqual(calculateNumber('SUM', 2.0, 2.0), 4);
    });

    it('equal positive numbers (alternate) a and b are positive', () => {
      assert.strictEqual(calculateNumber('SUM', 2.3, 1.8), 4);
    });

    it('equal negative numbers a and b are negative', () => {
      assert.strictEqual(calculateNumber('SUM', -2.0, -2.0), -4);
    });

    it('equal negative numbers (alternate) a and b are negative', () => {
      assert.strictEqual(calculateNumber('SUM', -2.3, -1.8), -4);
    });

    it('negative and positive numbers  a is negative and b is positive but absolute value are equal', () => {
      assert.strictEqual(calculateNumber('SUM', -2.0, 2.0), 0);
    });

    it('positive and negative numbers a is positive and b is negative but absolute value are equal', () => {
      assert.strictEqual(calculateNumber('SUM', 2.0, -2.0), 0);
    });

    it('0 and 0', () => {
      assert.strictEqual(calculateNumber('SUM', 0.0, 0.0), 0);
    });
  });

  describe('type == "SUBTRACT"', () => {
    it('equal positive numbers a and b are equal and positive', () => {
      assert.strictEqual(calculateNumber('SUBTRACT', 2.0, 2.0), 0);
    });

    it('equal positive numbers (alternate) a and b are not equal but positive', () => {
      assert.strictEqual(calculateNumber('SUBTRACT', 2.3, 1.8), 0);
    });

    it('equal negative numbers a and b are equal and negative', () => {
      assert.strictEqual(calculateNumber('SUBTRACT', -2.0, -2.0), 0);
    });

    it('equal negative numbers (alternate)', () => {
      assert.strictEqual(calculateNumber('SUBTRACT', -2.3, -1.8), 0);
    });

    it('negative and positive numbers', () => {
      assert.strictEqual(calculateNumber('SUBTRACT', -2.0, 2.0), -4.0);
    });

    it('positive and negative numbers', () => {
      assert.strictEqual(calculateNumber('SUBTRACT', 2.0, -2.0), 4.0);
    });

    it('0 and 0', () => {
      assert.strictEqual(calculateNumber('SUBTRACT', 0.0, 0.0), 0);
    });
  });

  describe('type == "DIVIDE"', () => {
    it('positive numbers', () => {
      assert.strictEqual(calculateNumber('DIVIDE', 8.0, 2.0), 4.0);
    });

    it('numbers with different signs', () => {
      assert.strictEqual(calculateNumber('DIVIDE', -7.0, 2.0), -3.5);
    });

    it('numbers with different signs (alternate)', () => {
      assert.strictEqual(calculateNumber('DIVIDE', 7.0, -2.0), -3.5);
    });

    it('negative numbers', () => {
      assert.strictEqual(calculateNumber('DIVIDE', -7.0, -2.0), 3.5);
    });

    it('equal positive numbers', () => {
      assert.strictEqual(calculateNumber('DIVIDE', 2.0, 2.0), 1);
    });

    it('equal negative numbers', () => {
      assert.strictEqual(calculateNumber('DIVIDE', -2.0, -2.0), 1);
    });

    it('equal rounded up numbers', () => {
      assert.strictEqual(calculateNumber('DIVIDE', 2.6, 3.0), 1);
    });

    it('equal rounded down numbers', () => {
      assert.strictEqual(calculateNumber('DIVIDE', 2.4, 2.0), 1);
    });

    it('0 and positive number', () => {
      assert.strictEqual(calculateNumber('DIVIDE', 0.0, 5.0), 0);
    });

    it('0 and negative number', () => {
      assert.strictEqual(calculateNumber('DIVIDE', 0.0, -5.0), -0);
    });

    it('positive number and 0', () => {
      assert.strictEqual(calculateNumber('DIVIDE', 5.0, 0), 'Error');
    });

    it('positive number and number rounded down to 0', () => {
      assert.strictEqual(calculateNumber('DIVIDE', 5.0, 0.2), 'Error');
    });

    it('positive number and number rounded up to 0', () => {
      assert.strictEqual(calculateNumber('DIVIDE', 5.0, -0.2), 'Error');
    });

    it('negative number and 0', () => {
      assert.strictEqual(calculateNumber('DIVIDE', -5.0, 0), 'Error');
    });

    it('negative number and number rounded down to zero', () => {
      assert.strictEqual(calculateNumber('DIVIDE', -5.0, 0.2), 'Error');
    });

    it('negative number and number rounded up to zero', () => {
      assert.strictEqual(calculateNumber('DIVIDE', -5.0, -0.2), 'Error');
    });

    it('0 and 0', () => {
      assert.strictEqual(calculateNumber('DIVIDE', 0.0, 0.0), 'Error');
    });
  });
});
