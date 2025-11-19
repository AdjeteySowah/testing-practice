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

    test('throws an error for non-number input', () => {
      expect(() => calculator.add('2', '5'))
      .toThrow('Expects all arguments of add() to be numbers');
    });

    test('throws an error for NaN input', () => {
      expect(() => calculator.add(NaN, NaN))
      .toThrow('Inputs cannot be NaN');
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

    test('throws an error for non-number input', () => {
      expect(() => calculator.subtract('2', '5'))
      .toThrow('Expects all arguments of subtract() to be numbers');
    });

    test('throws an error for NaN input', () => {
      expect(() => calculator.subtract(NaN, NaN))
      .toThrow('Inputs cannot be NaN');
    });
  });
});
