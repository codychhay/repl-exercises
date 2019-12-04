function BinarySearch_Recursive(array, input) {
  return BS_Recursive(array, input, 0, array.length-1);
}

function BS_Recursive(array, input, left, right) {
  // NOTE : [] and 1-element array are handled automatically.
  if(left > right) {
    return false;
  }

  const midIndex = Math.floor((left + right) / 2);
  if(array[midIndex] === input) {
    return true;
  } else if(array[midIndex] > input) {
    // go left: leftIndex stays same, rightInex need update
    return BS_Recursive(array,input,left, midIndex-1);
  } else {
    // go right: update leftIdex, rightIndex stays the same.
    return BS_Recursive(array, input, midIndex + 1, right);
  }

}


// Given a sorted array, do binary search to find input.
// Return true if found, otherwise false
function BinarySearch_Iterative(array, input) {
  //NOTE: this way, don't even need handle special cases-- [] -> return false, array with 1 element, loop still works.
  let left = 0;
  let right = array.length - 1;
  while (left <= right) {
    const midIndex = Math.floor((left + right)/2);
    if(array[midIndex] === input) {
      return true;
    } else if (array[midIndex] > input) {
      // go left
      right = midIndex - 1;
    } else {
      // go right
      left = midIndex + 1;
    }
  }
  return false;
}


// Given a sorted array, do binary search to find input.
// Return true if found, otherwise false
function MyOld_BinarySearch(array, input) {
  //Corner cases
  if(!array.length) return false;
  if(array.length === 1) return input === array[0];

  //General cases 
  let midIndex = findMindPointIndex(0, array.length);
  let lowerIndex = 0;
  let upperIndex = array.length;

  while(midIndex >=0 && midIndex <array.length) {
    console.log(midIndex)
    const currentElement = array[midIndex];
    
    // input < currentElement, go left
    if(input < currentElement) {
      // when go left, you need to update upperindex, lowerIndex doesn't change.
      upperIndex = midIndex - 1;
      midIndex = findMindPointIndex(lowerIndex, upperIndex);
      continue;
    }

    // input > currentElement, go right
    if(input > currentElement) {
      lowerIndex = midIndex + 1;
      midIndex = findMindPointIndex(lowerIndex, upperIndex);
      continue;
    }

    if (input === currentElement) {
      return true;
    }
  }
  return false;
}

function findMindPointIndex(startIndex, endIndex) {
  return Math.floor((startIndex + endIndex) / 2);
}

console.log(MyOld_BinarySearch([1,2,3,4,5,6,7,8,9,10], 10))