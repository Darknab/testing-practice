export function capitalize(string) {
  if (string === undefined || string.length === 0 ) {
    throw new Error('Can not capitalize an empty string!');
  } else if (/^[a-zA-Z]+$/.test(string) === false) {
    throw new Error(`${string} is not a proper string!`);
  } else {
    const firstLetter = string.charAt(0);
    const capitalized = firstLetter.toUpperCase();
    return capitalized + string.slice(1);
  }
}
