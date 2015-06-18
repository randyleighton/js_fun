function where(collection, source) {
  var arr = [];
  var sourcekey = Object.getOwnPropertyNames(source);
  var collect = Object.getOwnPropertyNames(collection[0]);
  console.log("Object Property Names for Collection: " + collect )
  console.log("Object Property names for source: " + sourcekey)
  console.log("collection keys: " + Object.keys(collection) )
  console.log("collection[0]: " + Object.keys(collection)[0] )
  console.log("collection[1]: " + Object.keys(collection)[1] )
  console.log("collection[2]: " + Object.keys(collection)[2] )
  console.log("source.last: " + source.last); console.log("source.first: " + source.first)

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