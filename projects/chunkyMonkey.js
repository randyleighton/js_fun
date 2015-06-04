function chunk(arr, size) {
  outerArr = [];
  innerArr = [];
  for ( var i = 0 ; i < arr.length ; i++ ) {
    for (var j = 0; j < size ; j++ ) {
      innerArr[i].push(arr[i])
    }
    console.log(innerArr);
    // outerArr.push(innerArr)
  }
  return arr;
}

chunk(['a', 'b', 'c', 'd'], 2);

// Write a function that splits an array (first argument) into groups the length 
// of size (second argument) and returns them as a multidimensional array.