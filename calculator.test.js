import { Calculator } from "./calculator";

test('Adds numbers', () => {
  const test = new Calculator
  expect(test.add(6, 8)).toBe(14); 
})