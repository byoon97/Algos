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
