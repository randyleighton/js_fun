function mutation(arr) {
  arr0 = arr[0].toLowerCase(); 
  arr1 = arr[1].toLowerCase();
  console.log("Array[0]: " + arr0); console.log("Array[1]: " + arr1)

  for ( var i = 0; i < arr1.length; i++ ) {
    if ( arr0.indexOf(arr1[i]) === -1) {
      return false;
    }
  }
  return true;
}

mutation(['hello', 'hey']);

/*
Return true if the string in the first element of the array 
contains all of the letters of the string in the second 
element of the array.

For example, ['hello', 'Hello'], should return true because 
all of the letters in the second string are present in the first, 
ignoring case.

The arguments ['hello', 'hey'] should return false because 
the string 'hello' does not contain a 'y'.

Another example, ['Alien', 'line'], should return true because 
all of the letters in 'line' are present in 'Alien'.

Lastly, ['Mary', 'Aarmy'] should return false because 'Mary' 
is only 4 letters while 'Aarmy' is 5, so 'Mary' can't 
possibly contain 'Aarmy'

Here are some helpful links:

Array.indexOf()

*/