// Find Closest Value in BST
// Solution 1

function findClosestValueInBst(tree, target) {
  let num = tree.value;

  const traverse = (node) => {
    if (node === null) return;
    if (Math.abs(target - num) > Math.abs(target - node.value)) {
      num = node.value;
    }

    if (target < node.value) {
      traverse(node.left);
    }

    if (target > node.value) {
      traverse(node.right);
    }
  };

  traverse(tree);
  return num;
}

// Solution 2

function findClosestValueInBst(tree, target) {
  let currentNode = tree;
  let num = 100000000;
  while (currentNode !== null) {
    if (Math.abs(target - currentNode.value) < Math.abs(target - num))
      num = currentNode.value;

    if (currentNode.value > target) currentNode = currentNode.left;
    else currentNode = currentNode.right;
  }

  return num;
}
