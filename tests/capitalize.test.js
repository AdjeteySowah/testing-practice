import { capitalize } from "../src/capitalize.js";

describe('capitalize()', () => {
  test('converts accra to Accra', () => {
    expect(capitalize('accra')).toBe('Accra');
  });

  test('returns an empty string with an empty string input', () => {
    expect(capitalize('')).toBe('');
  });

  test('throws an error for non-string input', () => {
    expect(() => capitalize(12)).toThrow();
  });
});