/* Implement select array functions from scratch. Only use:

array.length (read)
array.length = x (assignment)
array[i] (read)
array[i] = value (assignment) 

1. map(arr, callback)

Takes an Array and callback of signature item => {} and creates a new Array with the return value of each called callback.

Skips any holes in the Array, and mapped Array should have hole in same spot. The mapped Array should have the same .length value as the original Array.

Returns the "mapped" new array. */

export const map = (arr, callback) => {
  const newArr = [];
  for(let i = 0; i < arr.length; i++) {
    const newElement = callback(arr[i]);
    newArr[i] = newElement;
  }
  return newArr;
};


/* 2. filter(arr, callback)
Takes an Array and callback of signature item => {} and creates a new Array with all items whose callback returned true or a truthy value.

Any holes in the Array should be skipped (don't call the callback function, it always "fails" predicate).

Returns the new Array of "filtered" items. */

