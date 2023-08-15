// add new parameters to the function defning the start and end indexs' of the array
function minHeightBst(array, left = 0, right = array.length - 1) {
  // create a base case stating if the left index is larger than the right (we finish going through the array recursively)
  if (left > right) return null;
  // create the mid index of the array using floor to round down
  const mid = Math.floor((left + right) / 2);
  // create a new node using the middle index
  // first node will be root node
  const bst = new BST(array[mid]);
  // create new left and right nodes recursively
  bst.left = minHeightBst(array, left, mid - 1);
  bst.right = minHeightBst(array, mid + 1, right);
  return bst;
}

class BST {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }

  insert(value) {
    if (value < this.value) {
      if (this.left === null) {
        this.left = new BST(value);
      } else {
        this.left.insert(value);
      }
    } else {
      if (this.right === null) {
        this.right = new BST(value);
      } else {
        this.right.insert(value);
      }
    }
  }
}
