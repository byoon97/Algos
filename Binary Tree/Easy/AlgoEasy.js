// Branch Sums
// Solution 1

function branchSums(root) {
  const sums = [];
  calculateBranchSums(root, 0, sums);
  return sums;
}

function calculateBranchSums(node, runningSum, sums) {
  if (!node) return;

  const newRunningSum = runningSum + node.value;
  if (!node.left && !node.right) {
    sums.push(newRunningSum);
  }

  calculateBranchSums(node.left, newRunningSum, sums);
  calculateBranchSums(node.right, newRunningSum, sums);
}

// Depth Sum
// Solution 1

function nodeDepths(root) {
  return calculateDepthSum(root, 0);
}

function calculateDepthSum(root, sum) {
  if (!root) return 0;

  return (
    sum +
    calculateDepthSum(root.left, sum + 1) +
    calculateDepthSum(root.right, sum + 1)
  );
}
