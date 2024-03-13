import { Calculator } from "./calculator";

const calculate = new Calculator;

test('Adds numbers', () => {
  expect(calculate.add(6, 8)).toBe(14); 
})

test('Substracts numbers', () => {
  expect(calculate.substract(6, 8)).toBe(-2); 
})

test('Multiplies numbers', () => {
  expect(calculate.multiply(6, 8)).toBe(48); 
})

test('Divide numbers', () => {
  expect(calculate.divide(80, 8)).toBe(10); 
})

test('Works with decimals', () => {
  expect(calculate.add(12.3, 52.852)).toBeCloseTo(65.152);
  expect(calculate.substract(12.3, 52.852)).toBeCloseTo(-40.552);
  expect(calculate.multiply(12.3, 52.852)).toBeCloseTo(650.0796);
  expect(calculate.divide(12.3, 52.852)).toBeCloseTo(0.2327);
})

test('Works for numbers stored as characters', () => {
  expect(calculate.add(-12, '8')).toBe(-4);
  expect(calculate.substract(12, '8')).toBe(4);
  expect(calculate.multiply(-12, '8')).toBe(-96);
  expect(calculate.divide(12, '3')).toBe(4);
})

test('Throws an error if the second parameter in a division is 0', () => {
  expect(() => {
    calculate.divide(15, 0);
  }).toThrow('Can not divide a number by 0!');
})

test('Throws an error if one or both parameters are not numbers', () => {
  expect(()=> {
    calculate.add('string', 8);
  }).toThrow('Only works with numbers');
  expect(()=> {
    calculate.add('string', 'another string');
  }).toThrow('Only works with numbers');
  expect(()=> {
    calculate.substract('string', 8);
  }).toThrow('Only works with numbers');
  expect(()=> {
    calculate.substract('string', 'another string');
  }).toThrow('Only works with numbers');
  expect(()=> {
    calculate.multiply('string', 8);
  }).toThrow('Only works with numbers');
  expect(()=> {
    calculate.multiply('string', 'another string');
  }).toThrow('Only works with numbers');
  expect(()=> {
    calculate.divide('string', 8);
  }).toThrow('Only works with numbers');
  expect(()=> {
    calculate.divide('string', 'another string');
  }).toThrow('Only works with numbers');
})

test('Throws an error if more/less parameters are given', () => {
  expect(() => {
    calculate.add();
  }).toThrow('Need excactly 2 parameters!');
  expect(() => {
    calculate.substract(15);
  }).toThrow('Need excactly 2 parameters!');
  expect(() => {
    calculate.multiply(6, 8, 15);
  }).toThrow('Need excactly 2 parameters!');
  expect(() => {
    calculate.divide(6, 8, 15, 6);
  }).toThrow('Need excactly 2 parameters!');
})