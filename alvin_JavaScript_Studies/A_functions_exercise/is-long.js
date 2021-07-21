// let isLong = function(str) {
// if (str.length > 5) {
//     return true;
// }   else {
//     return false;
// }
// }

//OR
let isLong = function (str) {
    return str.length > 5;
}


console.log(isLong("pie")); // false
console.log(isLong("kite")); // false
console.log(isLong("kitty")); // false
console.log(isLong("telescope")); // true
console.log(isLong("thermometer")); // true
console.log(isLong("restaurant")); // true