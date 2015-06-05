function chunk(arr, size) {
  outerArr = [];
  innerArr = [];
  for ( var i = 0 ; i <= arr.length ; i + size ) {
    innerArr.push[arr.slice(0,size)]
  }
  return arr;
}

chunk(['a', 'b', 'c', 'd'], 2);

// Write a function that splits an array (first argument) into groups the length 
// of size (second argument) and returns them as a multidimensional array.