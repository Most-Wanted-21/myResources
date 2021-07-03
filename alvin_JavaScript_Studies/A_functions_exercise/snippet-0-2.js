let howMany = function () {
  return 42;
};

console.log(howMany); // function
console.log(howMany()); //

const theAnswer = howMany();
console.log(theAnswer); // function

let howMuch = function () {
  5;
};
console.log(howMuch()); // undefined
