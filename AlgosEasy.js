// Two Number Sum
// Solution 1

function twoNumberSum(array, targetSum) {
  let data = [];
  for (let i = 0; i <= array.length - 1; i++) {
    for (let j = i + 1; j <= array.length - 1; j++) {
      if (array[i] + array[j] === targetSum) data = [array[i], array[j]];
    }
  }
  return data;
}

// Solution 2

function twoNumberSum(array, targetSum) {
  const data = {};
  for (let num of array) {
    let number = targetSum - num;
    console.log(number, num);
    if (number in data) return [num, number];
    else data[num] = true;
  }
  return [];
}

// Validate Subsequence
// Solution 1
