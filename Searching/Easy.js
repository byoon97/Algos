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
