 export class Calculator {

  add(a, b) {
    if (arguments.length !== 2 ) throw new Error('Need excactly 2 parameters!');
    const first = parseFloat(a);
    const second = parseFloat(b);
    if (this.#checkNumbers(first, second)) {
      return first + second;
    } else throw new Error('Only works with numbers');   
  }

  substract(a, b) {
    if (arguments.length !== 2 ) throw new Error('Need excactly 2 parameters!');
    const first = parseFloat(a);
    const second = parseFloat(b);
    if (this.#checkNumbers(first, second)) {
      return first - second;
    } else throw new Error('Only works with numbers');   
  }

  multiply(a, b) {
    if (arguments.length !== 2 ) throw new Error('Need excactly 2 parameters!');
    const first = parseFloat(a);
    const second = parseFloat(b);
    if (this.#checkNumbers(first, second)) {
      return first * second;
    } else throw new Error('Only works with numbers');   
  }

  divide(a, b) {
    if (arguments.length !== 2 ) throw new Error('Need excactly 2 parameters!');
    const first = parseFloat(a);
    const second = parseFloat(b);
    if (second === 0) throw new Error('Can not divide a number by 0!');
    if (this.#checkNumbers(first, second)) {
      return first / second;
    } else throw new Error('Only works with numbers');   
  }

  #checkNumbers(a, b) {
    if (isNaN(a) || isNaN(b)) {
      return false;
    } else return true;
  }
}
