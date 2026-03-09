a = true;
b = false;
c = true;

let bt1 = a && b && c;
let bt2 = (a && b) || c;

console.log("a && b && c = " + bt1); // false
console.log("a && b || c = " + bt2); // true