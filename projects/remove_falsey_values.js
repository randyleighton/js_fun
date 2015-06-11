function bouncer(arr) {
arrLength = arr.length

var test="";
for ( var i = 0 ; i < arrLength ; i++ ) {
  test = new Boolean(arr[i])
  if (test != true) {
    arr.splice(i, 1);  
  } 
}
  return arr;
}

bouncer([7, 'ate', '', false, 9]);

/* 

Remove all falsey values from an array.
Falsey values in javascript are false, null, 0, "", undefined, and NaN.

Here are some helpful links:

Boolean Objects
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Boolean

Array.filter()

*/
/* Some good tests to see Boolean */
var a = new Boolean(0);
var b = new Boolean(undefined);
var c = new Boolean(false);
var d = new Boolean(7);
var e = new Boolean('ate');
var f = new Boolean(9);