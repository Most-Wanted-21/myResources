// snippet 1-0
let qty = 38;

if (qty > 30 && qty % 5 === 4) {
  console.log("swish");
} else {
  console.log("swoosh"); // swoosh
}

if (qty > 0) {
  console.log("pos"); // pos
}

// snippet 1-1
let a = "celery";
let b = "SQUASH";

if (a === a.toUpperCase()) {
  console.log("alpha");
}

if (b === b.toUpperCase()) {
  console.log("beta"); // beta
}

// snippet 1-2
let number = 9;

if (number > 4) {
  console.log("ding"); // ding
} else if (number % 3 === 0) {
  console.log("dong");
}

// snippet 1-3
let z = 12;

if (z > 10) {
  console.log("vroom"); // vroom
}

if (z % 3 === 0) {
  console.log("skrrt"); // skrrt
}
