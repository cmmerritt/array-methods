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

export const reduce = (arr, callback, initialValue = 0) => {
  let accumulator = initialValue;

  for(const item of arr) {
    if(item) {
      accumulator = callback(accumulator, item);
    }
  }
  return accumulator;
};

/* 5. every(arr, callback)
Takes an Array and callback of signature item => {} and returns an overall true value if all callback return true or a truthy value.

Any holes in the Array should be skipped (don't call the callback function).

Returns the true if every item in the Array has returned true, otherwise false. */

export const every = (arr, callback) => {
  for(const item of arr) {
    if(callback(item) == true) {
      return true;
    }
    return false;
  }
};
