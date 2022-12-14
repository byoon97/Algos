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

function isValidSubsequence(array, sequence) {
  for (let num of array) {
    if (num === sequence[0]) sequence.splice(0, 1);
  }
  return !sequence.length;
}

// Sorted Square Array
// Solution 1
function sortedSquaredArray(array) {
  let newArr = [];
  for (let num of array) {
    newArr.push(num * num);
  }
  return newArr.sort(function (a, b) {
    return a - b;
  });
}

// Tournament Winner
// Solution 1

function tournamentWinner(competitions, results) {
  let hash = {};
  competitions.forEach((match, index) => {
    // go through each match and check if the team exists on hash table
    // if it dosent, add to hash table with a score of 0
    !hash[match[0]] ? (hash[match[0]] = 0) : null;
    !hash[match[1]] ? (hash[match[1]] = 0) : null;
    // check the corresponding results array and use the index to find the winner
    // increment the score by 1 for the winner
    results[index] === 1 ? (hash[match[0]] += 1) : (hash[match[1]] += 1);
  });
  // iterate through hash table and return key with highest value
  return Object.keys(hash).reduce((a, b) => (hash[a] > hash[b] ? a : b));
}
