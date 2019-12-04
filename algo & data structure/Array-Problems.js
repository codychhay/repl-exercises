//Given an array of number and desired sum, return the first pair that gives you the desired sum

//Example input-- [3,5,10,15,20] , sum=13
//        output--> [3,10];


//NOTE: cannot use set, cause complication with duplicate key.

//TO-DO: can we iterate over array differently from for-loop?
function FindFirstPair(array, sum) {
  const result = [];

  //handle special cases
  if(array.length <= 1) {
    return result;
  }

  // turn array into map
  const map = new Map();
  for(let i = 0; i < array.length; i++) {
    const element = array[i];
    if(!map.has(element)) {
      map.set(element, 1);
    } else {
      map.set(element, map.get(element) + 1);
    }
  }

  //iterate over array, for each element check if there's a complement exists in the map
  for(let i = 0; i < array.length; i++) {
    const currentElement = array[i];
    const complement = sum - currentElement;
    if(map.has(complement)) {
      // if a[i] === complement, we only want to return anything if duplicate actually exists. Otherwise, don't return anything, continue.
      // if a[i] !== complement, nothing to worry about.
      if((currentElement === complement && map.get(complement) > 1) ||
          currentElement !== complement) {
        result.push(currentElement);
        result.push(complement);
        return result;
      }
    }
  }
  //if out of loop and still no return, pair doesn't exist, so just return result.
  return result;
}

//After solution--
  // run through with example and special cases
  // how can I clean up the code / refactor?

console.log(FindFirstPair([3,5,10,15,20] ,13));
console.log(FindFirstPair([3,5,10,15,20] ,6));
console.log(FindFirstPair([3,3,10,15,20] ,6));