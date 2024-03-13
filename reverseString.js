export function reverseString(string) {
  if(string === undefined || string ==='') {
    throw new Error('Nothing to reverse!');
  } else if (typeof(string) !== 'string') {
    throw new Error('It only works with strings!');
  } else {
    const deconstructed = string.split('');
    let result = '';
    for (let index = deconstructed.length - 1 ; index >= 0; index--) {
      result += deconstructed[index];
    }
    return result;
  }
}