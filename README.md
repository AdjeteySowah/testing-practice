# Testing Practice

A small JavaScript project of unit-tested utility functions built to meet [The Odin Project's Testing Practice project](https://www.theodinproject.com/lessons/node-path-javascript-testing-practice).
This repo contains a set of pure functions and Jest tests that demonstrate writing clear, reliable unit tests for common array/string/math helpers.

---

## Features

* Small, well-scoped utility functions (example: `capitalize`, `reverseString`, `analyzeArray`, `calculator` helpers).
* Unit tests written with **Jest** covering normal cases, edge cases, and error handling.
* `npm` scripts to run tests (including verbose output).
* Clear file structure so tests are easy to find and run.

---

## Installation

Make sure you have Node.js and npm installed.

Clone the repo and install dependencies:

```bash
git clone https://github.com/AdjeteySowah/testing-practice.git
cd testing-practice
npm install
```

---

## Available scripts

Open `package.json` to see scripts. Common scripts used in this project:

```bash
npm test
```

---

## Example test output

Below is a short example of what passing test output looks like using `jest --verbose`:

```
> jest --verbose

 PASS  tests/capitalize.test.js
  capitalize()
    ✓ converts 'accra' to 'Accra' (3 ms)
    ✓ throws when input is not a string

 PASS  tests/reverseString.test.js
  reverseString()
    ✓ reverses 'hello' -> 'olleh'
    ✓ returns empty string for ''

 PASS  tests/analyzeArray.test.js
  analyzeArray()
    ✓ returns length, average, min and max for [1,8,3,4,2,6]

Test Suites: 3 passed, 3 total
Tests:       6 passed, 6 total
Snapshots:   0 total
Time:        0.75 s
Ran all test suites.
```

---

## Testing tips / checklist

* Keep tests small and focused — one assertion per test is often clearer.
* Test normal cases, edge cases, and invalid inputs (type errors, empty arrays/strings).
* Use `test.each` / parameterized tests when the same behavior should hold for multiple inputs.
