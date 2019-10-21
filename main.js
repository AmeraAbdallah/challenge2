// Use the following helper functions in your solution
function each(coll, f) {
  if (Array.isArray(coll)) {
    for (var i = 0; i < coll.length; i++) {
      f(coll[i], i);
    }
  } else {
    for (var key in coll) {
      f(coll[key], key);
    }
  }
}

function filter(array, predicate) {
  var acc = [];
  each(array, function(element, i) {
    if (predicate(element, i)) {
      acc.push(element);
    }
  });
  return acc;
}

function map(array, func) {
  var acc = [];
  each(array, function(element, i) {
    acc.push(func(element, i));
  });
  return acc;
}

// Remember to relax :)

//=======================================================================
/*                                  Q1                                 */
//=======================================================================

/*
Depending on data modeling concept that you have learned:

Create a factory function called makeComputer that represents computers, 
What different attributes computers may have? 
Create two computers object from your factory function and save them in one array called computers!

Note: please write one or two lines here describing your solution.
*/

/**
 * returned an object, assigned keys for it and the values are the parameters values
 * and then declared an array and pushed to it two objects
 */
function makeComputer(type, color, weight) {
  return {
    type: type,
    color: color,
    weight: weight
  };
}

var computers = [];
computers.push(makeComputer('dell', 'white', '0.5kg'));
computers.push(makeComputer('hp', 'white', '0.6kg'));

// Write a function displayComputer that can be used to display one computer.
/**
 * displayComputer function takes an computer object as a parameter and 
 * return one line string contains all computer information
 */
function displayComputer(computer) {
  return `type: ${computer.type}, color: ${computer.color}, weight: ${computer.weight}.`;
}

//=============================================================================
/*                                  Q2                                       */
//=============================================================================

/*
Write a function that takes an array of strings as a input
and returns an array of all of those strings, but transformed to upper case.

You can use toUpperCase method to convert a string to upper case. 
Solve it using the most appropriate helper functions(each,map,filter).

Note: please write one or two lines here describing your solution.

var strArr = ['hello', 'world', 'whirled', 'peas'];
uppercaseAll(strArr); ==> [ 'HELLO', 'WORLD', 'WHIRLED', 'PEAS' ]
*/
/**
 * I used map because the input is array and the output is array
 * so I passed arrayOfStrings in map and changed each element to element.toUpperCase()
 */

function uppercaseAll(arrayOfStrings) {
  return map(arrayOfStrings, function(element){
    return element.toUpperCase();
  });
}

//=============================================================================
/*                                  Q3                                       */
//=============================================================================

/*
Write a function that takes array of objects as an input and returns an array
with only the countries that have a population higher than 500 million.

Solve it using one of the most appropriate helperthe helpers functions(each,map,filter).

highestPopulation(data); ==> [{country: "China", population: 1409517397},{country: "India", population: 1339180127}]
Note: please write one or two lines here describing your solution.

Here’s the data you’ll work with:
*/

/**
 * I used filter because we need a condition, so we do not want to return all the
 * array elements. I passed arrayOfObjects in filter parameter and returned the condition
 */

var data = [
  {
    country: 'China',
    population: 1409517397
  },
  {
    country: 'India',
    population: 1339180127
  },
  {
    country: 'USA',
    population: 324459463
  },
  {
    country: 'Indonesia',
    population: 263991379
  }
];

function highestPopulation(arrayOfObjects) {
  return filter(arrayOfObjects, function(element, i){
    return element.population > 500000000;
  });
}

//=============================================================================
/*                              Q4                                           */
//=============================================================================

/*
Write a function halveAll that takes an array of numbers as a input 
and returns an array of all of those numbers halved (divided by two).

Note: solve it using the most appropriate helper functions(each,map,filter)

var numsArray = [2, 6, 20, 8, 14];
halveAll(numsArray); ==> [ 1, 3, 10, 4, 7 ]

Note: please write one or two lines here describing your solution.
*/

/**
 * I decided to use map because we need to iterate over all the array and change
 * all the array elements and return an array, so I passed numbers inside map parameter and 
 * returned element / 2 and then returnde the map result which is an array
 */

function halveAll(numbers) {
  return map(numbers, function(element){
    return element / 2;
  });
}

//=============================================================================
/*                                  Q5                                       */
//=============================================================================

/*
Write a function called values that accepts an object as a parameter, and outputs an array of the object's values. 
Solve it using one of the most appropriate helpers functions(each,map,filter).

values({first : 5, second: 'something' , third : 129}) ==> [5, 'something', 129];

Note: please write one or two lines here describing your solution.
*/

/**
 * I decided to go with each because the input is object and returned value is array
 * I guess in this case it simpler to use each.
 * so I iterated over obj and in every iteration push the object value in an array and 
 * then returned the array
 */
function values(obj) {
  var acc = [];
  each(obj, function(val){
    acc.push(val);
  });
  return acc;
}

//Good Luck :))
