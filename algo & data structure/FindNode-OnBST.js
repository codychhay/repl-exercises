class Node {
  constructor(value){
    this.left = null;
    this.right = null;
    this.value = value;
  }
}

//NOTE : recursive vs iterative solution. Use iterative because we don't really need to keep track of state to go to the other side of the tree.


function findNodeOnBSTIterative(rootNode, targetVal) {
  //NOTE- import to create currentNode, so we're not modifying where rootNode points after the function is called.
  let currentNode = rootNode;
  while(currentNode) {
    if (targetVal === currentNode.value) {
      return true;
    } else if (targetVal < currentNode.value) {
      currentNode = currentNode.left;
    } else if (targetVal > currentNode.value) {
      currentNode = currentNode.right;
    }
  }
  return false;
}

function findNodeOnBSTRecursive(rootNode, targetVal) {
  // rootNode === null
  if(!rootNode) {
    return false;
  }
  
  if(rootNode.value === targetVal) {
    return true;
  }

  if(targetVal < rootNode.value) {
    return findNodeOnBSTRecursive(rootNode.left, targetVal);
  } else {
    return findNodeOnBSTRecursive(rootNode.right, targetVal);
  }
}

//Tree construction : 
let tree = new Node(15);
tree.left = new Node(5);
tree.right = new Node(25);
tree.left.left = new Node(1);
tree.left.right = new Node(10);
tree.right.left = new Node(20);
tree.right.right = new Node(35);
//console.log(tree);

//Test iterative approach
console.log(findNodeOnBSTIterative(tree, 0))

//Test recursive approach
//console.log(findNodeOnBSTRecursive(tree,0))