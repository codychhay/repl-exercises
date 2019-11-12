
// Given a sorted array, do binary search to find input.
// Return true if found, otherwise false
function BinarySearch(array, input) {
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

console.log(BinarySearch([1,2,3,4,5,6,7,8,9,10], 10))