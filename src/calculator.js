export const calculator = {
  add(num1, num2) {
    if (typeof(num1) !== 'number' || typeof(num2) !== 'number') {
      throw new Error(`Expects all arguments of add() to be numbers`);
    }
    if (Number.isNaN(num1) || Number.isNaN(num2)) {   // NaN specific error handling
      throw new Error('Inputs cannot be NaN');
    }
    return num1 + num2;
  },

  subtract(num1, num2) {
    if (typeof(num1) !== 'number' || typeof(num2) !== 'number') {
      throw new Error(`Expects all arguments of subtract() to be numbers`);
    }
    if (Number.isNaN(num1) || Number.isNaN(num2)) {
      throw new Error('Inputs cannot be NaN');
    }
    return num1 - num2;
  },

  multiply(num1, num2) {
    if (!Number.isFinite(num1) || !Number.isFinite(num2)) {
      throw new Error(`Expects all arguments of multiply() to be finite numbers`);
    }
    return num1 * num2;
  },

  divide(num1, num2) {
    if (num2 === 0) {
      throw new Error(`Cannot divide by zero`);
    }
    if (!Number.isFinite(num1) || !Number.isFinite(num2)) {
      throw new Error(`Expects all arguments of divide() to be finite numbers`);
    }
    return num1 / num2;
  },
}