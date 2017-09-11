/************************ ES6 ******************************/
// /* Constant */
// const PI = 3.1415926;
// console.log(PI > 3.0);
//
// /* Block-Scoped Variables (and constants) without hoisting */
// for (let i = 0; i < 3; i++) {
//     let x = i;
//     console.log(x);
// }

// /* Arrow Functions */
// let evens = [2, 4, 6, 8, 10];
// console.log(evens);
// let odds = evens.map(v => v + 1);
// let pairs = evens.map(v => ({even:v, odd: v+1}));
// let nums = evens.map((v, i) => i);
// console.log(odds);
// console.log(pairs);
// console.log(nums);
// evens.forEach(v => console.log(v));

// /* Extended Parameter Handling */
// function f1(x, y = 7, z = 42) {
//     return x + y + z;
// }
// console.log(f1(1) === 50);
//
// /* Rest Parameter */
// function f2(x, y, ...a) {
//     return (x + y) * a.length;
// }
// console.log(f2(1, 2, "Hello", true, 7) === 9);

// /* Spreading of elements of an iterable collection (like an array or even a string)
//  * into both literal elements and individual function parameters */
// var params = ["hello", true, 7];
// var other = [1, 2, ...params];
// console.log(other);
// function f3(x, y, ...a) {
//     return (x + y) * a.length;
// }
// console.log(f3(1, 2,...params) === 9);
// var str = "foo";
// var chars = [...str];
// console.log(chars);

// /* Template Literals */
// /* String interpolation */
// let customer = {name : "Foo"};
// let card = {amount: 7, product: "Bar", unitprice: 42};
// var message = `Hello ${customer.name},
// want to buy ${card.amount} ${card.product} for
// a total of ${card.amount * card.unitprice} buck?`;
// console.log(message);



/************************ Other ******************************/
// /* Type conversion */
// var a = 1;
// var b = "2.4";
// console.log(a + b); /* int + string -> String(int) + string */
// console.log(a - b); /* int - string -> int - Number(string) */

/* The let statement declares a block scope local variable, optionally initializing it to a value. */
// for (let i = 0; i < 5; i++) {
//     console.log(i);
// }
// console.log(i); // would report error