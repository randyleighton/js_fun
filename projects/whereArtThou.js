function where(collection, source) {
  var arr = [];
  var sourcekey = Object.getOwnPropertyNames(source);
console.log("sourcekey: " + sourcekey)
console.log("collection keys: " + collection.keys)
console.log("source: " + source)
  // What's in a name?
  return arr;
}

where([{ first: 'Romeo', last: 'Montague' }, 
       { first: 'Mercutio', last: null }, 
       { first: 'Tybalt', last: 'Capulet' }], 
       { last: 'Capulet' });


/* Make a function that looks through a list (first argument) 
and returns an array of all objects that have equivalent 
property values (second argument). 

Here are some helpful links:

Global Object
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object

Object.hasOwnProperty()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/hasOwnProperty

Object.keys()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/keys

*/