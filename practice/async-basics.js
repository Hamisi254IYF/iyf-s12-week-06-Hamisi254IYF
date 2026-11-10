// Exercise 1
console.log("A");
setTimeout(() => console.log("B"), 0);
console.log("C");
setTimeout(() => console.log("D"), 100);
console.log("E");

//<details> <summary>✅ The correct answer (A, C, E, B, D)</summary>
// A
// C
// E
// B
// D
//</details>
