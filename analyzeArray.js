export function analyseArray(ar) {

  const array = normalizeElements(ar);

  array.forEach(element => {
    if (isNaN(element)) throw new Error('Works only with numbers!');
  });

  const average = () =>{
    let sum = 0;
    array.forEach(element => {
      sum += element;
    });
    return sum / array.length;
  }

  const max = () => {
    let max = array[0];
    array.forEach(element => {
      max = element > max ? element : max;
    })
    return max;
  }

  const min = () => {
    let min = array[0];
    array.forEach(element => {
      min = element < min ? min : min;
    })
    return min;
  }

  let result = {
    average: average(),
    max: max(),
    min: min(),
    length: array.length
  }
  return result;
}

function normalizeElements(ar) {
  let result =[]
  ar.forEach((element, index) => {
    result[index] = parseFloat(element);
  });

  return result;
}
