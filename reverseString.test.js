import { reverseString } from "./reverseString";

test('String has been reversed', () => {
  expect(reverseString('test')).toBe('tset');
})

test('Works with multi word strings', () => {
  expect(reverseString('Hello world!')).toBe('!dlrow olleh');
})

test('Throws an error if the string is empty', () => {
  expect(() => {
    reverseString();
  }).to.throw('Nothing to reverse!');
})

test ('Throws an error if the value is not a string', () => {
  expect(()=> {
    reverseString(5233);
  }).toThrow('It only works with strings!');
})