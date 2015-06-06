function mutation(arr) {
  return arr;
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

*/