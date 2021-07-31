let divisible = function (num1, num2) {
  return num1 % num2 === 0;
// //Or:
//   if (num1 % num1 === 0) {
//     return true;
//   } else return false;
  // // my lengthy solution:
  // let result = (num1 % num2)
  // if (result > 0) {
  //   return false;
  // } else return true;
}



// Write a function `divisible(num1, num2)` that accepts two numbers as arguments. The function should
// return a boolean indicating whether or not `num1` is divisible by `num2`.

console.log(divisible(12, 3)); // true
console.log(divisible(12, 5)); // false
console.log(divisible(60, 4)); // true
console.log(divisible(60, 11)); // false
console.log(divisible(21, 7)); // true
console.log(divisible(21, 6)); // false
