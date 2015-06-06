function largestOfFour(arr) {
  largestNums = [];
  var tempVal = "";
  for (var i = 0; i < arr.length; i++) {
    arr[i].sort(function(a, b) {
      return a - b;
    });
    arr[i].reverse();
    tempVal = arr[i].slice(0,1).join();
    largestNums.push(parseInt(tempVal));
  }
  return largestNums;
}
largestOfFour([
              [4, 5, 1, 3], 
              [13, 27, 18, 26], 
              [32, 35, 37, 39], 
              [1000, 1001, 857, 1]
              ]);

/* Return an array consisting of the largest number from each 
provided sub-array. For simplicity, the provided array will 
contain exactly 4 sub-arrays.

Remember, you can iterate through an array with a simple for loop, 
and access each member with array syntax arr[i] . */