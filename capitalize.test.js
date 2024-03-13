import { capitalize } from "./capitalize";


test('Capitalize has been imported', () =>{
  expect(capitalize).toBe.defined;
})

test('Capitalize the string', () => {
  const string = capitalize('name')
  expect(string).toBe('Name');
})
 
test('Do not touch any other letter than the first', () => {
  expect(capitalize('someText')).toBe('SomeText');
})

test('Leave it as it if it is already capitalized', () => {
  expect(capitalize('Capitalized')).toBe('Capitalized');
})

test('Throw an error if the string contains numbers or special characters', () => {
  expect(() => {
    capitalize(2564);
  }).toThrow('2564 is not a proper string!');
  expect(() => {
    capitalize('ev3nt');
  }).toThrow('ev3nt is not a proper string!');
  expect(() => {
    capitalize('rock&roll');
  }).toThrow('rock&roll is not a proper string!');
})

test('throw an error if the string is empty', () =>{
  // const empty = ''
  expect(() => {
    capitalize();
  }).toThrow('Can not capitalize an empty string!');
})
