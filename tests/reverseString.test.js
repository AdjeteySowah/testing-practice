import { reverseString } from "../src/reverseString.js";

describe('reverseString()', () => {
  test('converts pillow to wollip', () => {
    expect(reverseString('pillow')).toBe('wollip');
  });

  test('returns an empty string with an empty string input', () => {
    expect(reverseString('')).toBe('');
  });

  test('throws an error for non-string input', () => {
    expect(() => reverseString(12)).toThrow();
  });
});