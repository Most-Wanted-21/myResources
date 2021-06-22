if (true) {
  console.log("foo"); // foo
}
if (false) {
  console.log("bar");
}

if (false || false) {
  console.log("boop");
}
if (true || false) {
  console.log("beep"); // beep
}

let num = 40;
if (num > 0) {
  console.log("zip"); // zip
}
if (num % 2 === 0) {
  console.log("zoop"); // zoop
}

let word = "jeep";
if (word[0] === "d") {
  console.log("yer");
} else {
  console.log("nah"); // nah
}

let sentence = "roger that";
if (sentence[sentence.length - 1] === "t") {
  console.log("ends in t"); // ends in t
} else {
  console.log("does not end in t");
}
if (sentence.length <= 4) {
  console.log("shorts");
} else {
  console.log("long"); // long
}
