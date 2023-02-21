let greet = require("./greet1");

//let greet2 = require("./greet2").greet; // Forma mas comun
let greet2a = require("./greet2");


let greet3 = require("./greet3");
const {greeting} = require("./greet3");

greet();

// greet2(); // Notacion del punto con require (Forma mas comun)

greet2a.greet() // Forma sin el punto en require

greet3.greet()
greet3.greating = "Hello from the app"

let greet3b = require("./greet3");
greet3b.greet();

const greet4 = require("./greet4");
let myGreet = new (greet4)
myGreet.greet();

const greet5 = require("./greet5");
greet5.greet();
// greet5.test1.jump();
// greet5.test1.run();
greet5.test1()