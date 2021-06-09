import { map, filter, findIndex, reduce, every } from './array-functions';

const array = [1, 2, 3, 4, 5];

const arrayTwo = [-2, 8, -5, 18];

const arrayThree = ['Dorothy', 'Blanche', 'Rose', 'Sophia', 'Miami', 'Minnesota', 'cheesecake', 'mother'];

const arrayFour = ['Dorothy', 'Blanche', 'Rose', 'Sophia'];

const arrayFive = ['Miami', 'mom', 'many', 'Minnesota'];

function multiplyByTwo(num) {
  return num * 2;
}

function powerOfThree(num) {
  return num ** 3;
}

function trueIfM(str) {
  if(str.charAt(0).toUpperCase() === 'M') {
    return true;
  }
}

describe('map function', () => {
  it('maps multiplyByTwo on array', () => {
    expect(map(array, multiplyByTwo)).toEqual([2, 4, 6, 8, 10]);
  });
  it('maps powerOfThree on array', () => {
    expect(map(array, powerOfThree)).toEqual([1, 8, 27, 64, 125]);
  });
  it('maps multiplyByTwo on arrayTwo', () => {
    expect(map(arrayTwo, multiplyByTwo)).toEqual([-4, 16, -10, 36]);
  });
});

describe('filter function', () => {
  it('filters arrayThree', () => {
    expect(filter(arrayThree, trueIfM)).toEqual(['Miami', 'Minnesota', 'mother']);
  });
});

describe('find index function', () => {
  it('returns index of first match', () => {
    expect(findIndex(arrayThree, trueIfM)).toEqual(4);
  });
  it('returns -1 if no match', () => {
    expect(findIndex(arrayFour, trueIfM)).toEqual(-1);
  });
});

describe('reduce function', () => {
  it('reduces array and returns a value with first item as accumulator', () => {
    expect(reduce(array, (accumulator, item) => item + accumulator)).toEqual(15);
  });
  it('can take initial value as third parameter', () => {
    expect(reduce(array, (accumulator, item) => item * accumulator, 5)).toEqual(600);
  }); 
});

describe('every function', () => {
  it('returns false if not every item in array returns true', () => {
    expect(every(arrayThree, trueIfM)).toEqual(false);
  });
  it('returns true if every item in array returns true', () => {
    expect(every(arrayFive, trueIfM)).toEqual(true);
  });
});
