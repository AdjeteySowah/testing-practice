import { caesarCipher } from "../src/caesarCipher.js";

describe('caesarCipher()', () => {
  test.each([
    ['date', 4, 'hexi'],
    ['Rich guy!', 3, 'Ulfk jxb!'],
    ['Yes, I am... G', 2, 'Agu, K co... I'],
  ])('caesarCipher(%p, %p) -> %p', (a, b, expected) => {
    expect(caesarCipher(a, b)).toBe(expected);
  });

  test.each([
    [undefined, 3],
    ['string', '2'],
  ])('throws an error for invalid inputs: caesarCipher(%p, %p)', (a, b) => {
    expect(() => caesarCipher(a, b)).toThrow();
  });
});