// let keepItQuiet = function (str) {
//     let lowerCase = str.toLowerCase();
//     return lowerCase + "...";
// }

//OR
let keepItQuiet = function (str) {
    return str.toLowerCase() + '...';
}

console.log(keepItQuiet("HOORAY")); // 'hooray...'
console.log(keepItQuiet("Doggo")); // 'doggo...'
console.log(keepItQuiet("WHAT?!?!")); // 'what?!?!...'