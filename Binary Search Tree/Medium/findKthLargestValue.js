class BST {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

function findKthLargestValueInBst(tree, k) {
  // store every value from the tree into an array using in-order traversal
  let valArr = inOrderTraverse(tree, []).reverse();
  console.log(valArr);
  return valArr[k - 1];
}

function inOrderTraverse(tree, array) {
  // start by calling inOrderTraverse function on rootNode
  // if root node is not null, we are calling IOT on tree.left.left until we hit the leaf node
  if (!tree) return array;
  inOrderTraverse(tree.left, array);
  array.push(tree.value);
  inOrderTraverse(tree.right, array);
  return array;
}
