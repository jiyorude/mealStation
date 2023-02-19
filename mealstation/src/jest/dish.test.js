import dish from "./dish";

test("areThereIngredients returns true if there are ingredients in the array", () => {
  expect(areThereIngredients()).toBe(true);
});

// TESTS PASSED:

/*
 PASS  src/jest/dish.test.js
  ✓ areThereIngredients returns true if there are ingredients in the array (1 ms)

Test Suites: 1 passed, 1 total
Tests:       1 passed, 1 total
Snapshots:   0 total
Time:        0.09 s
Ran all test suites related to changed files.

Watch Usage: Press w to show more.
*/

// if toBe(true) is changed to false, it updates fails the test as expected, as there are entries in the ingredients object.
