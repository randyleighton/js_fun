function bouncer(arr) {

  var filterArr = arr.filter(function(value) {
    return !(value == false || value === "" || typeof value == "undefined" || value === null);
  });
  return filterArr;
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