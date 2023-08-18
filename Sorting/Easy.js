// Bubble Sort
// Solution 1

function bubbleSort(array) {
  let checked;
  do {
    checked = false;
    for (let i = 0; i <= array.length; i++) {
      if (array[i] > array[i + 1]) {
        let curr = array[i];
        array[i] = array[i + 1];
        array[i + 1] = curr;
        checked = true;
      }
    }
  } while (checked);
  return array;
}

// insertion sort
// solution 1

function insertionSort(array) {
  for (let i = 1; i < array.length; i++) {
    let curr = array[i];
    console.log("selected ele", curr);
    let idx = null;
    for (idx = i - 1; idx >= 0 && array[idx] > curr; idx--) {
      console.log("swapping", array[idx + 1], array[idx]);
      array[idx + 1] = array[idx];
    }
    console.log("2nd", array[idx + 1], curr);
    array[idx + 1] = curr;
    console.log(array);
  }
  return array;
}
