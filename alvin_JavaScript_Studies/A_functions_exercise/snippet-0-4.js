// snippet 0-4
let exclaim = function (str) {
  let capitalized = str.toUpperCase();
  return capitalized + "!!";
};

let result = exclaim("potato");
console.log(result); // POTATO!!
console.log(result.length); // 7
console.log(result[0]); // p
console.log(result[result.length - 1]); // !
