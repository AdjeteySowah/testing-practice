import { analyzeArray } from "../src/analyzeArray.js";

describe('analyzeArray()', () => {
  test.each([
    [[1, 8, 3, 4, 2, 6], {'average': 4, 'min': 1, 'max': 8, 'length': 6}],
    [[6, 4, 2, 10, 8], { average: 6, min: 2, max: 10, length: 5 }],
  ])('analyzeArray(%p): returns %p', 
    (arr, expected) => {
    expect(analyzeArray(arr)).toStrictEqual(expected);
  });
});