import { analyseArray } from "./analyzeArray";

const testArray1 = analyseArray([1, 8, 3, 4, 2, 6]);
const testArray2 = analyseArray([6, 15, 32]);
const testArray3 = analyseArray([8]);
const testArray4 = analyseArray(['6', 8, 12, 23, '15']);


test('average is correct', () => {
  expect(testArray1.average).toBeCloseTo(4, 1);
  expect(testArray2.average).toBeCloseTo(17.66, 1);
})

test('max is correct', () => {
  expect(testArray1.max).toBeCloseTo(8, 1);
  expect(testArray2.max).toBeCloseTo(32, 1);
})

test('min is correct', () => {
  expect(testArray1.min).toBeCloseTo(1, 1);
  expect(testArray2.min).toBeCloseTo(6, 1);
})

test('length is correct', () => {
  expect(testArray1.length).toBe(6);
  expect(testArray2.length).toBe(3);
})

test('works when array lenght = 1', () => {
  expect(testArray3.average).toBeCloseTo(8, 1);
  expect(testArray3.max).toBeCloseTo(8, 1);
  expect(testArray3.min).toBeCloseTo(8, 1);
  expect(testArray3.length).toBe(1);
})

test('works when numbers are stored as strings', () => {
  expect(testArray4.average).toBeCloseTo(12.8, 1);
  expect(testArray4.max).toBeCloseTo(23, 1);
  expect(testArray4.min).toBeCloseTo(6, 1);
  expect(testArray4.length).toBe(5);
})

 test('throws an error when the array contains a character', () => {
   expect(() => {
     analyseArray([15, 54, 41, NaN]);
   }).toThrow('Works only with numbers!');
 })