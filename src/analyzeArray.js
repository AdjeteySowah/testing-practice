export function analyzeArray(array) {
  function findAverage(arr) {
    const total = arr.reduce((acc, curr) => acc + curr, 0);
    return total / arr.length;
  }

  function findMin(arr) {
    let min = arr[0];
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] < min) min = arr[i];
    }
    return min;
  }

  function findMax(arr) {
    let max = arr[0];
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] > max) max = arr[i];
    }
    return max;
  }

  function findLength(arr) {
    return arr.length;
  }

  return {
    average: findAverage(array),
    min: findMin(array),
    max: findMax(array),
    length: findLength(array),
  }
}
