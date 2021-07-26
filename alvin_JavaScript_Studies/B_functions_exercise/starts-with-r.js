let startsWithR = function (str) {
    let firstChar = str.indexOf[0];
    if (firstChar === 'r' || 'R') {
        return true;
    } else {
        return false;
    }
}


// Write a function `startsWithR` that accepts a string as an argument and returns a boolean indicating
// whether or not the string starts with 'r' or 'R'.

console.log(startsWithR("roger that")); // true
console.log(startsWithR("Row, row, row your boat")); // true
console.log(startsWithR("slip")); // false
console.log(startsWithR("Taxicab")); // false
