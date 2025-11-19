import { calculator } from "../src/calculator.js";

describe('calculator', () => {
  describe('add()', () => {
    test.each([
      [ 2,  3,  5],
      [-2, -3, -5],
      [-2,  3,  1],
    ])('add(%p, %p) -> %p', (a, b, expected) => {
      expect(calculator.add(a, b)).toBe(expected);
    });

    test.each([
      [null, '2'],
      [NaN, undefined],
      [Infinity, BigInt],
    ])('throws an error for invalid inputs: add(%p, %p)', (a, b) => {
      expect(() => calculator.add(a, b)).toThrow();
    });
  });

  describe('subtract()', () => {
    test.each([
      [ 5,  3,  2],
      [-5, -3, -2],
      [-5,  3, -8],
    ])('subtract(%p, %p) -> %p', (a, b, expected) => {
      expect(calculator.subtract(a, b)).toBe(expected);
    });

    test.each([
      [null, '2'],
      [NaN, undefined],
      [Infinity, BigInt],
    ])('throws an error for invalid inputs: subtract(%p, %p)', (a, b) => {
      expect(() => calculator.subtract(a, b)).toThrow();
    });
  });
  
  describe('multiply()', () => {
    test.each([
      [ 5,  3,  15],
      [-5, -3,  15],
      [-5,  3, -15],
    ])('multiply(%p, %p) -> %p', (a, b, expected) => {
      expect(calculator.multiply(a, b)).toBe(expected);
    });

    test.each([
      [null, '2'],
      [NaN, undefined],
      [Infinity, BigInt],
    ])('throws an error for invalid inputs: multiply(%p, %p)', (a, b) => {
      expect(() => calculator.multiply(a, b)).toThrow();
    });
  });

  describe('divide()', () => {
    test('throw an error when divisor is 0', () => {
      expect(() => calculator.divide(5, 0)).toThrow('Cannot divide by zero');
    });

    test.each([
      [ 15,  3,  5],
      [-15, -3,  5],
      [-15,  3, -5],
    ])('divide(%p, %p) -> %p', (a, b, expected) => {
      expect(calculator.divide(a, b)).toBe(expected);
    });

    test.each([
      [null, '2'],
      [NaN, undefined],
      [Infinity, BigInt],
    ])('throws an error for invalid inputs: divide(%p, %p)', (a, b) => {
      expect(() => calculator.divide(a, b)).toThrow();
    });
  });
});
