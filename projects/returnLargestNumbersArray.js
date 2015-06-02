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