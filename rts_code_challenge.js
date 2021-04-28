//Excercise 1
//Print the number of integers in an array that are above the given input and the number that are below, e.g. for the array [1, 5, 2, 1, 10] with input 6, print “above: 1, below: 4”.


console.log("1. Above Below Function");
function aboveBelow(arr, num) {
  tracker = {};
  tracker["above"] = 0;
  tracker["below"] = 0;
  for (i = 0; i < arr.length; i++) {
    let current_num = arr[i];
    if (current_num < num) {
      tracker["below"]++;
    } else {
      tracker["above"]++;
    }
  }
  return tracker;
}

let arr = [1, 5, 2, 1, 10];
let num = 6;

console.log(aboveBelow(arr, num));



//Excercise 2
// Rotate the characters in a string by a given input and have the overflow appear at the beginning, e.g. “MyString” rotated by 2 is “ngMyStri”.

console.log("2. String Rotation Function");
function rotateByTwo(str, num) {
  lastNum = str.slice(-num); 
  stringStart = str.slice(0, -num); 
  for (i = 0; i < str.length; i++) {
    newStr = lastNum.concat(stringStart);
  }
  return newStr;
}
str = "MyString";
num = 2;
console.log(rotateByTwo(str, num));


