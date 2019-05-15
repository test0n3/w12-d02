var exerciseString = "This is a dummy string for testing";
var exerciseArray = exerciseString.split(" ");

console.log("Mini-assignment: week 12 day 02");
console.log("===============================\n");
console.log(`String to use: ${exerciseString}`);
console.log(`Array to use: ${exerciseArray}`);

console.log(`\nPOP function
===========`);
console.log(`Last element: ${arrayPop(exerciseArray)}`);
console.log(`New array: ${exerciseArray}`);

function arrayPop(array) {
  let last = array[array.length - 1];
  let temporal = [];
  for (let i = 0; i < array.length - 1; i++) {
    temporal.push(array[i]);
  }
  console.log(temporal);
  array = temporal;
  return last; //returns last element
}

console.log(`\nEvery function
==============`);
console.log(`Condition: All elements are strings`);
console.log(
  `Is exerciseArray all string: arrayEvery(exerciseArray, allString): ${arrayEvery(
    exerciseArray,
    allString
  )}`
);
console.log(`Is [1,2,3,4] all string: ${arrayEvery([1, 2, 3, 4], allString)}`);

function arrayEvery(array, anotherFunction) {
  for (let i = 0; i < array.length - 1; i++) {
    if (!anotherFunction(array[i])) {
      return false;
    }
  }
  return true;
}
function allString(elem) {
  return typeof elem == "string";
}
console.log(`\nSome function
=============`);
console.log(`Condition: All elements are strings`);
console.log(
  `Has exerciseArray any numbers: arraySome(exerciseArray, allNumber): ${arraySome(
    exerciseArray,
    allNumber
  )}`
);
console.log(`Has [1,2,3,4] any numbers: ${arraySome([1, 2, 3, 4], allNumber)}`);
console.log(
  `Has [1,"2",3,4] any number: ${arraySome([1, 2, 3, 4], allNumber)}`
);

function arraySome(array, anotherFunction) {
  for (let i = 0; i < array.length - 1; i++) {
    if (anotherFunction(array[i])) {
      return true;
    }
  }
  return false;
}
function allNumber(elem) {
  return typeof elem == "number";
}
console.log(`\nFind function
=============`);
console.log(`Condition: Find first number > 10`);
console.log(
  `Show first number that fulfills condition from exerciseArray: arrayFind(exerciseArray, firstNumber): ${arrayFind(
    exerciseArray,
    firstNumber
  )}`
);
console.log(
  `Show first number from ["1","2",3,40]: ${arrayFind(
    ["1", "2", 3, 40],
    firstNumber
  )}`
);

function arrayFind(array, anotherFunction) {
  for (let i=0; i < array.length; i++) {
    if (anotherFunction(array[i])) {
      return array[i];
    }
  }
  void 0;
}

function firstNumber(elem) {
  return elem > 10;
}

console.log(`\nConcat function
===============`);

console.log(`Join two arrays: arrayConcat(exerciseArray, [1,2,3]): ${arrayConcat(exerciseArray, [1, 2, 3])}`);
console.log(`Join two arrays: arrayConcat(exerciseArray, [1,[2,3],"4"]): ${arrayConcat(exerciseArray, [1, [2, 3], "4"])}`);
console.log("Join two arrays: arrayConcat(exerciseArray, [1,[2,3],'4']):", arrayConcat(exerciseArray, [1, [2, 3], "4"]));
function arrayConcat(array1, array2) {
  let temporal = Array.from(array1);
  for (let i = 0; i < array2.length; i++) {
    temporal.push(array2[i]);
  }
  return temporal;
}

console.log(`\nJoin function
============`);
console.log(`Join array content: arrayJoin(exerciseArray, ""): ${arrayJoin(exerciseArray, "")}`);
console.log(`Join array content: arrayJoin(exerciseArray, " "): ${arrayJoin(exerciseArray, " ")}`);

function arrayJoin(array, element) {
  var temporal = "";
  for (let i = 0; i < array.length; i++) {
    temporal = temporal.concat(array[i]).toString(); // concatenating strings
    temporal = temporal.concat(element);
  }
  return temporal;
}

console.log(`\nFor Each function
=================`);

console.log(`For each element, apply function allUpperCase: arrayForEach(exerciseArray, allUppercase):`);
arrayForEach(exerciseArray, allUppercase);

function arrayForEach(array, anonymous) {
  for (let i = 0; i < array.length; i++) {
    anonymous(array[i]);
  }
}

function allUppercase(elem) {
  console.log(elem.toUpperCase());
}

console.log(`\nPush function
=============`);
let firstTemporal = [1,2,3];
console.log(`Add element [4,5,6] to exerciseArray: arrayPush(firstTemporal, [4, 5, 6]): ${arrayPush(firstTemporal, [4, 5, 6])}`);
console.log("firstTemporal:", firstTemporal);
console.log(`Add element 4 to firstTemporal: arrayPush(firstTemporal, 4): ${arrayPush(firstTemporal, 4)}`);
console.log("firstTemporal: ", firstTemporal);

function arrayPush(array1, element) {
  array1[array1.length] = element;
  return array1.length;
}

console.log(`\nMap function
===========`);
firstTemporal = [1, 2, 3];
console.log(`Turn firstTemporal: arrayMap(firstTemporal, byTwo): ${arrayMap(firstTemporal, byTwo)}`);

function arrayMap(array, anonFunction) {
  let temporal = [];
  for (let i = 0; i < array.length; i++) {
    temporal[i] = anonFunction(array[i]);
  }
  return temporal;
}

function byTwo(elem) {
  return elem * 2;
}
console.log(`\nFilter function
===========`);
console.log(`Look for words with length more than 3 in exerciseArray: arrayFilter(exerciseArray, wordBigger): ${arrayFilter(exerciseArray, wordBigger)}`);

function arrayFilter(array, anonFunction) {
  let temporal = [];
  for (let i = 0; i< array.length; i++) {
    if(anonFunction(array[i])) {
      temporal.push(array[i]);
    }
  }
  return temporal;
}

function wordBigger(elem) {
  return elem.length > 3;
}


console.log(`\nReduce function
===========`);

console.log("Addition of array [1, 2, 3] elements: ", arrayReduce([1,2,3], reduceAddition));
console.log("Multiplication of array [1, 2, 3] elements: ", arrayReduce([1,2,3], reduceMulti, 1));


function arrayReduce(array, reducer, initial) {
  let accu = initial || 0;
  for (let i = 1; i < array.length; i++) {
    accu = reducer + reducer(array[i]);
  }
}

function reduceAddition(accum, curre) {
  return accum + curre;
}

function reduceMulti(accum, curre) {
  return accum * curre;
}