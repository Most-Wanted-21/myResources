let keepItQuiet = function (str) {
    let lowerCase = str.toLowerCase();
    return lowerCase + "...";
}

console.log(keepItQuiet("HOORAY")); // 'hooray...'
console.log(keepItQuiet("Doggo")); // 'doggo...'
console.log(keepItQuiet("WHAT?!?!")); // 'what?!?!...'