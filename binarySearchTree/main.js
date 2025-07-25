class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  insert(value) {
    const node = new Node(value)

    // there are 4 option to insert
    // 1. tree is empty, root is null
    if (this.root === null) {
      this.root = node;
      return
    }

    // 2. tree is not empty
    // 2.1 loop throught the tree
    let current = this.root;

    while (true) {
      // condition: if current node is the same
      if (current.value === node.value) break;

      // condition: if the new value is less than current value
      if (node.value < current.value) {
        if (current.left === null) {
          current.left = node;
          break;
        }

        current = current.left;
      } else { // condition: if the new value is greater than current
        if (current.right === null) {
          current.right = node;
          break
        }

        current = current.right;
      }
    }
  }

  search(value) {
    if (this.root === null) return false;

    // loop through the binary tree
    let current = this.root;

    while (current) {
      if (value === current.value) return current;

      if (value < current.value) {
        current = current.left;
      } else {
        current = current.right;
      }

      return false;
    }
  }

  inOrder() {
    if (this.root === null) return false;
    function recursive(node) {
      if (node.left) {
        recursive(node.left)
      }
      console.log(node.value)
      if(node.right) {
        recursive(node.right)
      }
    }

    recursive(this.root)
  }

  preOrder(node = this.root) {
    if( node !== null) {
      console.log(node.value)

      this.preOrder(node.left)
      this.preOrder(node.right)
    }
  }

  postOrder( node = this.root) {
    if( node !== null) {
      this.postOrder(node.left)
      this.postOrder(node.right)
      console.log(node.value)
    }
  }
}

  

// Recursividad
function recursiveShowMessage(n) {
  if (n === 0) return; // stop the recursive function


  recursiveShowMessage(n - 1)

  console.log(`Resusive number: ${n}`)
}

// recursiveShowMessage(8)

const tree = new BinarySearchTree();
tree.insert(5)
tree.insert(9)
tree.insert(1)
tree.insert(10)
tree.insert(11)
tree.insert(8)
tree.insert(4)
tree.insert(3)
console.log(tree.search(8))
tree.inOrder()
tree.preOrder()
tree.postOrder()

// e.g. Binary Search Tree
const treeNumbers = new BinarySearchTree();

let json = [];

console.time('fill')
for( let i = 1; i <= 1000000; i++) {
  json.push(i)
  treeNumbers.insert(i);
}
console.timeEnd('fill')

const numberToSearch = 1000000;

console.time('for')
for( let n of json) {
  if( n === numberToSearch) {
    break;
  }
}
console.timeEnd('for')

console.time('tree');
treeNumbers.search(numberToSearch);
console.timeEnd('tree')

