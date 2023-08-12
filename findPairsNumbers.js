function findPairsNumbers(numbers, target) {
  let result = [];
  let map = new Map();

  for (let i = 0; i < numbers.length; i++) {
    let diff = target - numbers[i];
    if (map.has(diff)) {
      result.push(`${numbers[i]}, ${diff}`);
    }
    map.set(numbers[i], true);
  }
  return result;
}

module.exports = findPairsNumbers;
