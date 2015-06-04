function chunk(arr, size) {
  numArrs = arr.length / size;
  console.log(numArrs);
  for ( var i = 0 ; i < numArrs ; i++ ) {

  }
  return arr;
}

chunk(['a', 'b', 'c', 'd'], 2);

// Write a function that splits an array (first argument) into groups the length 
// of size (second argument) and returns them as a multidimensional array.