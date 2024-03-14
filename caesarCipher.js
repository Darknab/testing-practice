

export function cipher(string, shift) {
  const lowerCase = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
  const upperCase = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
  const punctuation = ['.', ',', '?', '!', ';', ':', ' '];
  const deconstructed = string.split('');
  let result = [];

  deconstructed.forEach((char, position) => {
    if(lowerCase.includes(char)) {
      const index = lowerCase.indexOf(char);
      result[position] = lowerCase[normalizeShift(index + shift)];
    } else if(upperCase.includes(char)) {
      const index = upperCase.indexOf(char);
      result[position] = upperCase[normalizeShift(index + shift)];
    } else if (punctuation.includes(char)) {
      result[position] = char;
    } else throw new Error('It only works for alphabetical letters!');
  })
  return result.join('');
}



function normalizeShift(shift) {
  if (shift > 25) {
    return normalizeShift(shift - 26);
  } else if (shift < 0) {
    return normalizeShift(shift + 26);
  } else  if (shift < 26 && shift >= 0) {
    return shift
  }
}