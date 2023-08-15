class BST {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }

  insert(value) {
    let currentNode = this;
    while (true) {
      if (value < currentNode.value) {
        if (currentNode.left === null) {
          currentNode.left = new BST(value);
          break;
        } else {
          currentNode = currentNode.left;
        }
      } else {
        if (currentNode.right === null) {
          currentNode.right = new BST(value);
          break;
        } else {
          currentNode = currentNode.right;
        }
      }
    }
    console.log(this);
    return this;
  }

  contains(value) {
    let current = this;
    while (current !== null) {
      if (value < current.value) {
        current = current.left;
      } else if (value > current.value) {
        current = current.right;
      } else {
        return true;
      }
    }
    return false;
  }

  remove(value, parent = null) {
    let current = this;

    while (current !== null) {
      if (value < current.value) {
        parent = current;
        current = current.left;
      } else if (value > current.value) {
        parent = current;
        current = current.right;
      } else {
        current.shuffleNodes(current, parent);
        break;
      }
    }

    return this;
  }

  shuffleNodes(current, parent) {
    if (current.left && current.right) {
      current.value = current.right.getMinValue();
      current.right.remove(current.value, current);
    } else if (parent === null) {
      if (current.left) {
        current.value = current.left.value;
        current.right = current.left.right;
        current.left = current.left.left;
      } else if (current.right) {
        current.value = current.right.value;
        current.left = current.right.left;
        current.right = current.right.right;
      } else {
      }
    } else if (parent.left === current) {
      parent.left = current.left ? current.left : current.right;
    } else if (parent.right === current) {
      parent.right = current.right ? current.left : current.right;
    }
  }

  getMinValue() {
    let current = this;
    while (current.left !== null) {
      current = current.left;
    }
    return current.value;
  }
}
