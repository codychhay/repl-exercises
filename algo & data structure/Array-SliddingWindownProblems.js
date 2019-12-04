//Slidding window problem

function findAvgs_ofSubArray(k, array) {

  const result = [];
  let sum = null; //note: cannot set to undefined or let sum; --> NAN
  

  //  i + k <= array.length --> give us the lastSubArray still in-bound
  for(let i = 0; i + k <= array.length ; i++) {
    if(!sum) {
      //calculate the sum of first subarray
      sum  = calculateFirstSubArraySum(k,array);
      result.push(sum/k);
    } else {
      //for subsequent sum, leverage previous sum
      sum = sum - array[i-1] + array[i+k-1];
      result.push(sum/k);
    }
  }
  return result;
}

function calculateFirstSubArraySum(k, array) {
  let sum = 0;
  for(let j = 0; j < k; j++) {
        sum += array[j];
  }
  return sum;
}



const result = findAvgs_ofSubArray(5, [1, 3, 2, 6, -1, 4, 1, 8, 2]);
console.log(`Averages of subarrays of size K: ${result}`);

//Expected Result: 2.2,2.8,2.4,3.6,2.8