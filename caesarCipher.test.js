import { cipher } from "./caesarCipher";

test('It works!', () => {
  expect(cipher('hello', 3)).toBe('khoor');
})

test('It works with multiple words', () => {
  expect(cipher('hello world', 3)).toBe('khoor zruog');
})

test('punctuation characters are not affected', () => {
  expect(cipher('hello, world!', 3)).toBe('khoor, zruog!');
})

test('It works with capital letters', () => {
  expect(cipher('Hello, World!', 3)).toBe('Khoor, Zruog!');
})

test('It works with negative shifts', () => {
  expect(cipher('hello world!', -3)).toBe('ebiil tloia!');
})

test('It works while jumping from z to a or a to z', () => {
  expect(cipher('eazy, peazy!', 3)).toBe('hdcb, shdcb!');
  expect(cipher('eazy, peazy!', -3)).toBe('bxwv, mbxwv!');
})

test ('It works with shifts greater than 26', () => {
  expect(cipher('hello world', 34)).toBe('pmttw ewztl');
  expect(cipher('hello world', -34)).toBe('zwddg ogjdv');
})

test('Throws an error if the string contains characters other than a-z, A-Z or punctuation', () => {
  expect(() => {
    expect(cipher('h3llo', 3));
  }).toThrow('It only works for alphabetical letters!');
})