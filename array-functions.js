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

/* 3. findIndex(arr, callback)
Takes an Array and callback of signature item => {} and returns the index of the first item whose callback returns true or a truthy value.

Any holes in the Array should be skipped (don't call the callback function, it always "fails" predicate).

Returns the index of the found item, -1 if no item is found. */

export const findIndex = (arr, callback) => {
  let counter = 0;
  while(counter <= 0) {
    for(let i = 0; i <= arr.length; i++) {
      if(callback(arr[i]) == true) {
        counter++;
        return i;
      }
    }
  }
};

