var exerciseString = "This is dummy string for testing";
var exerciseArray = exerciseString.split(' ');
console.log("Mini-assignment: week 12 day 02");
console.log(`String to use: ${exerciseString}`);
console.log(`Array to use: ${exerciseArray}`);

console.log(`\nPOP function
===========`);
console.log(`Last element: ${arrayPop(exerciseArray)}`);
console.log(`New array: ${exerciseArray}`);

function arrayPop(array) {
  let last = array[array.length-1];
  let temporal = [];
  for (let i = 0; i < array.length - 1; i++) {
    temporal.push(array[i]);
  }
  console.log(temporal);
  array = temporal;
  return last //returns last element
}

console.log(`\nEvery function
===========`);
console.log(`Condition: All elements are strings`);
console.log(`Is exerciseArray all string: arrayEvery(exerciseArray, allString): ${arrayEvery(exerciseArray, allString)}`);
console.log (`Is [1,2,3,4] all string: ${arrayEvery([1,2,3,4], allString)}`);

function arrayEvery(array, anotherFunction) {
  for (let i = 0; i < array.length - 1; i++) {
    if(!anotherFunction(array[i])) {
      return false;
    }
  }
  return true;
}
function allString(elem) {
  return typeof(elem) == "string"
}
// TODO not complete
console.log(`\nSome function
===========`);
console.log(`Condition: All elements are strings`);
console.log(`Has exerciseArray any numbers: arraySome(exerciseArray, allString): ${arraySome(exerciseArray, allNumber)}`);
console.log (`Has [1,2,3,4] any numbers: ${arraySome([1,2,3,4], allNumber)}`);
console.log (`Has [1,"2",3,4] any number: ${arraySome([1,2,3,4], allNumber)}`);


function arraySome(array, anotherFunction) {
  for (let i = 0; i < array.length - 1; i++) {
    if(!anotherFunction(array[i])) {
      return false;
    }
  }
  return true;
}
function allNumber(elem) {
  return typeof(elem) == "number"
}