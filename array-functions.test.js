import { map, filter } from './array-functions';

const array = [1, 2, 3, 4, 5];

const arrayTwo = [-2, 8, -5, 18];

const arrayThree = ['Dorothy', 'Blanche', 'Rose', 'Sophia', 'Miami', 'Minnesota', 'cheesecake', 'mother'];

function multiplyByTwo(num) {
  return num * 2;
}

function powerOfThree(num) {
  return num ** 3;
}

function filterForM(str) {
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
    expect(filter(arrayThree, filterForM)).toEqual(['Miami', 'Minnesota', 'mother']);
  });

});

