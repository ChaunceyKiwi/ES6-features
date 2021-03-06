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

// /* Enhanced Object Properties */
// /* Property Shorthand */
// let a = 'foo', b = 42, c = {};
// let obj1 = {a, b , c};
// console.log(obj1);
//
// /* Computed Property Names */
// function quux() {return "StringFromFunction";}
// let obj2 = {
//     foo: "bar",
//     ["Hi" + quux()]: 42
// };
// console.log(obj2);

// /* Destructing Assignment */
// /* Array Matching */
// let list = [1, 2, 3];
// let [a, , b] = list;
// console.log([a, b]);
// console.log([b, a]);
// [a, b] = [b, a];
// console.log([a, b]);
// console.log([b, a]);

// /* Object and Array matching */
// let obj = {a : 1};
// let list = [1];
// let {a, b = 2} = obj;
// let [x, y =2] = list;
// console.log(a, b, x, y);
//
// /* Parameter Context Matching */
// function f([name, val]) {
//     console.log(name, val);
// }
// function g({name: n, val: v}) {
//     console.log(n, v);
// }
// function h({name, val}) {
//     console.log(name, val);
// }
// f(["bar", 42]);
// g({name: "foo", val: 7});
// h({name: "bar", val: 42});

// /* Fail-Soft destructing, optionally with defaults */
// var list = [7, 42];
// var [a = 1, b = 2, c = 3, d] = list;
// console.log(a === 7, b === 42, c === 3, d === undefined);

// /* Class */
// class Shape {
//     constructor (id, x, y) {
//         this.id = id;
//         this.move(x, y);
//     }
//     move(x, y) {
//         this.x = x;
//         this.y = y;
//     }
//     toString() {
//         return `Shape($(this.id))`
//     }
// }
//
// class Rectangle extends Shape {
//     constructor(id, x, y, width, height) {
//         super(id, x, y);
//         this.width = width;
//         this.height = height;
//     }
//     toString() {
//         return "Rectangle >" + super.toString();
//     }
//     static defaultRectangle() {
//         return new Rectangle("default", 0, 0, 200, 300);
//     }
//     get area() {
//         return this.width * this.height;
//     }
// }
// class Circle extends Shape {
//     constructor(id, x, y , radius) {
//         super(id, x, y);
//         this.radius = radius;
//     }
//     toString() {
//         return "Circle >" + super.toString();
//     }
//     static defaultCircle() {
//         return new Circle("default", 0, 0, 100);
//     }
// }
//
// let defRectangle = Rectangle.defaultRectangle();
// let defCircle = Circle.defaultCircle();
// console.log(defCircle.radius);
// console.log(defRectangle.width);
// console.log(defRectangle.height);
// console.log(defRectangle.area);

// /* Symbol Type */
// console.log(Symbol("foo") !== Symbol("foo"));
// console.log(Symbol.for("app.foo") === Symbol.for("app.foo"));

// /* Iterators */
// /* Support iterable protocol to allow objects to customize their iteration behaviour.
//  * Additionally, support "iterator" protocol to produce sequence of values (either finite or infinite).
//   * Finally, provide convenient of operator to iterate over akk values of an iterable object */
// let fabonacci = {
//     [Symbol.iterator]() {
//         let pre = 0, cur = 1;
//         return {
//             next() {
//                 [pre, cur] = [cur, pre + cur];
//                 return {done: false, value: cur};
//             }
//         };
//     }
// };
//
// for (let n of fabonacci) {
//     if (n > 1000) {
//         break;
//     }
//     console.log(n);
// }

/* Generators */
// /* Generator Function, Iterator Protocol */
// let fibonacci = {
//     *[Symbol.iterator]() {
//         let pre = 0, cur = 1;
//         for (; ;) {
//             [pre, cur] = [cur, pre + cur];
//             yield cur;
//         }
//     }
// };
//
// for (let n of fibonacci) {
//     if (n > 1000) {
//         break;
//     }
//     console.log(n);
// }

// /* Generator Function, Direct Use */
// function* range(start, end, step) {
//     while (start < end) {
//         yield start;
//         start += step;
//     }
// }
//
// for (let i of range(0, 10, 2)) {
//     console.log(i);
// }

// /* Generator Matching */
// let fibonacci = function* (numbers) {
//     let pre = 0, cur = 1;
//     while (numbers-- > 0) {
//         [pre, cur] = [cur, pre + cur];
//         yield cur;
//     }
// };
//
// for (let n of fibonacci(1000)) {
//     console.log(n);
// }
//
// let numbers = [...fibonacci(1000)];
// let [n1, n2, n3, ...others] = fibonacci(1000);

/* Map/Set & WeakMap/WeakSet */
// /* Set Data-Structure */
// let s = new Set();
// s.add("hello").add("goodbye").add("hello");
// console.log(s.size === 2);
// console.log(s.has("hello") === true);
// for (let key of s.values()) {
//     console.log(key);
// }

// /* Map Data-Structure */
// let m = new Map();
// let s = "world";
// m.set("hello", 42);
// m.set(s, 34);
// console.log(m.get(s) === 34);
// console.log(m.size === 2);
// for (let [key, val] of m.entries()) {
//     console.log(key + " = " + val);
// }

// /* Object Property Assignment */
// let dest = {quux: 0};
// var src1 = {foo: 1, bar: 2};
// var src2 = {foo: 3, baz: 4};
// Object.assign(dest, src1, src2);
// console.log(dest.quux === 0);
// console.log(dest.foo === 3);
// console.log(dest.bar === 2);
// console.log(dest.baz === 4);
//
// /* Array Element Finding */
// console.log([1, 3, 4, 2].find(x => x > 3));
// console.log([1, 3, 4, 2].findIndex(x => x > 3));
//
// /* String Repeating */
// console.log("foo".repeat(3));
//
// /* String Searching */
// console.log("hello".startsWith("ello", 1));
// console.log("hello".endsWith("hell", 4));
// console.log("hello".includes("ell"));
// console.log("hello".includes("ell", 1));
// console.log("hello".includes("ell", 2) == false);
//
// /* Number Type Checking */
// console.log(Number.isNaN(42) === false);
// console.log(Number.isNaN(NaN) === true);
// console.log(Number.isFinite(Infinity) === false);
// console.log(Number.isFinite(-Infinity) === false);
// console.log(Number.isFinite(NaN) === false);
// console.log(Number.isFinite(123) === true);
//
// /* Number Comparison */
// console.log(0.1 + 0.2 === 0.3);
// console.log(Math.abs((0.1 + 0.2) - 0.3) < Number.EPSILON);
//
// /* Number Truncation */
// console.log(Math.trunc(42.7));
// console.log(Math.trunc(0.1));
// console.log(Math.trunc(-0.1));
//
// /* Number Sign Determination */
// console.log(Math.sign(7));
// console.log(Math.sign(0));
// console.log(Math.sign(-0));
// console.log(Math.sign(-7));
// console.log(Math.sign(NaN));

/* Promises */
function msgAfterTimeout(msg, who, timeout) {
    return new Promise((resolve, reject) => {
       setTimeout(() => resolve(`${msg} Hello ${who}!`, timeout));
    });
}

msgAfterTimeout("", "foo", 100).then((msg) =>
    msgAfterTimeout(msg, "Bar", 200)
).then((msg) => {
    console.log(`done after 300ms:${msg}`);
});

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