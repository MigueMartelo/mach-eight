const findPairsNumbers = require('./findPairsNumbers');

describe('findPairsNumbers', () => {
  it('returns an array of pairs that sum up to the target', () => {
    const numbers = [1, 9, 5, 0, 20, -4, 12, 16, 7];
    const targetSum = 12;
    const expected = ['12, 0', '16, -4', '7, 5'];
    const result = findPairsNumbers(numbers, targetSum);
    expect(result).toEqual(expected);
  });

  it('returns an empty array if no pairs are found', () => {
    const numbers = [1, 2, 3, 4, 5];
    const targetSum = 20;
    const result = findPairsNumbers(numbers, targetSum);
    expect(result).toEqual([]);
  });

  it('handles negative numbers correctly', () => {
    const numbers = [-1, -2, 3, 5, 6];
    const targetSum = 4;
    const expected = ['5, -1', '6, -2'];
    const result = findPairsNumbers(numbers, targetSum);
    expect(result).toEqual(expected);
  });

  it('handles zero correctly', () => {
    const numbers = [-1, 0, 1, 2];
    const targetSum = -1;
    const expected = ['0, -1'];
    const result = findPairsNumbers(numbers, targetSum);
    expect(result).toEqual(expected);
  });

  it('handles single-element array', () => {
    const numbers = [5];
    const targetSum = 5;
    const result = findPairsNumbers(numbers, targetSum);
    expect(result).toEqual([]);
  });
});
