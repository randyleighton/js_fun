function chunk(arr, size) {
  finalArr = [];
  loopSize = arr.length / size
  var tempVal = ""
  for ( var i = 0 ; i <= loopSize; i++ ) {
    tempVal = arr.splice(0,size)
    console.log("spliced value: " + tempVal)
    console.log("arr new value: " + arr)
    finalArr.push(tempVal)
    console.log("finalArr value: " + finalArr)
  }
  return finalArr;
}

chunk(['a', 'b', 'c', 'd'], 2);

// Write a function that splits an array (first argument) into groups the length 
// of size (second argument) and returns them as a multidimensional array.