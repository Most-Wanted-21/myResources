let endsInLy = function (str) {
    // let secondLast = str[str.length - 2];
    // let last = str[str.length - 1];
    // return secondLast === 'l' && last === 'y';

    // OR
    return str.endsWith('ly');
    //my solution below does not work!
    // if (str[str.length - 1] === 'y' && [str.length -2 === 'l']) {
    //     return true;
    // }   else {
    //     return false;
    // }
}



// Write a function `endsInLy` that accepts a string as an argument and returns a boolean indicating
// whether or not the string ends in the substring 'ly'.

console.log(endsInLy("pretty")); // false
console.log(endsInLy("instant")); // false
console.log(endsInLy("analytic")); // false
console.log(endsInLy("timidly")); // true
console.log(endsInLy("fly")); // true
console.log(endsInLy("gallantly")); // true
