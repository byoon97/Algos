// Binary Search
// solution 1

function binarySearch(array, target) {
  let lower = 0;
  let higher = array.length - 1;

  while (lower <= higher) {
    let mid = Math.floor((higher + lower) / 2);
    if (array[mid] === target) return mid;
    if (array[mid] > target) {
      higher = mid - 1;
    } else if (array[mid] < target) {
      lower = mid + 1;
    }
  }
  return -1;
}

// Find Three Largest Numbers
// Solution 1

function findThreeLargestNumbers(array) {
  const hash = [];
  while (array.length > 0) {
    let curr = array.shift();
    if (hash.length < 3) {
      hash.push(curr);
    } else {
      let min = Math.min(...hash);
      let idx = hash.indexOf(min);
      if (curr >= min) {
        hash.splice(idx, 1, curr);
      }
    }
  }
  return hash.sort((a, b) => (a > b ? 1 : -1));
}
