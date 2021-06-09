/* Implement select array functions from scratch. Only use:

array.length (read)
array.length = x (assignment)
array[i] (read)
array[i] = value (assignment)  */

export const map = (arr, callback) => {
  const newArr = [];
  for(let i = 0; i < arr.length; i++) {
    const newElement = callback(arr[i]);
    newArr[i] = newElement;
  }
  return newArr;
};

export const filter = (arr, callback) => {
  const newArr = [];
  let counter = 0;
  for(let i = 0; i < arr.length; i++) {
    if(callback(arr[i]) == true) {
      newArr[counter] = arr[i];
      counter++;
    }
  }
  return newArr;
};

export const findIndex = (arr, callback) => {
  let counter = 0;
  while(counter <= 0) {
    for(let i = 0; i <= arr.length; i++) {
      if(i === (arr.length - 1)) {
        return -1;
      }
      else if(callback(arr[i]) == true) {
        counter++;
        return i;
      } 
    }
  }
};

/* 4. reduce(arr, callback [, initialValue])
Takes an Array and callback of signature (accumulator, item) => {} and an (optional) second initialValue parameter that is the initial value of the accumulator. After each function call, the return value is passed as the accumulator argument of the next function call.

If the second initialValue parameter is not supplied, the first function call should be the first item as the accumulator, and the second array item as the item.

Any holes in the Array should be skipped (don't call the callback function).

Returns the final accumulator value. */

export const reduce = (arr, callback, initialValue = 0) => {
  let accumulator = initialValue;

  for(const item of arr) {
    accumulator = callback(accumulator, item);
  }
  return accumulator;
};
