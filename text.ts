// 'use strict';
// const love = '\ud83d\udc99';

// console.log('love', love);
// console.log('love', love.length);

// console.log('code', love.charCodeAt(1));

// const something = async () => {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => resolve(console.log('burek')), 2000);
//   });
// };

// await something();

// console.log();

// console.log(String.raw`karlo`.length);

// const text = 'testing: 1, 2, 3';

// const pattern = /\d+/g; // matches all instances of one or more digits
// console.log(pattern.test(text));

// console.log(text.search(pattern)); // index of 9 - position of first match

// console.log(text.match(pattern)); // [ "1", "2", "3" ]

// console.log(undefined === false); // false
// console.log(null === false); // false
// console.log(0 === false); // false
// console.log(-0 === false); // false
// console.log(NaN === false); // false
// console.log('' === false); // false

// console.log(0 == null);

// const strName = 'string name';

// const symName = Symbol('propname'); // this is a symbol to be used as a key
// const symName2 = Symbol('propname'); // this is a symbol to be used as a key

// console.log(typeof symName); // symbol

// const ob: any = {};
// ob[symName] = 2;
// ob[symName2] = 3;

// console.log(ob[symName]); // 2
// console.log(ob[symName2]); // 3

// console.log(symName.toString()); // // Symbol(propname)
// console.log(symName2.toString()); // Symbol(propname)
// console.log(Symbol().toString());symbol

// console.log('this is ob', ob);

// const s = Symbol.for('karlo');
// const t = Symbol.for('karlo');
// // console.log(s === t); // true // does not work in ts

// console.log(s.toString());

// console.log(Symbol.keyFor(s) === Symbol.keyFor(t)); // true
// console.log(Symbol.keyFor(s)); // karlo

// console.log(globalThis);

// const n = 3333333.789;
// console.log(n.toPrecision(2)); // 3.3e+6
// console.log(n.toPrecision(10)); // 3333333.789

// console.log(parseInt('3 mice')); // 3
// console.log(parseFloat('3 mice')); // 3
// console.log(parseFloat('$3 mice')); // error - NaN
// console.log(parseInt('.3 mice')); // error - NaN - integers cannot start with a dot

// // console.log(n.toString()); // 3
// // console.log(n.toString(2)); // 11
// // console.log(n.toString(8)); // 3

// // console.log(n.toExponential(3)); // 3.000e+0

// console.log({ what: 'no' }.toString()); // [object Object]
// console.log({ what: 'no' }.valueOf()); // { what: "no" }

// console.log([].toString());
// console.log([].valueOf());

// let i, nice; // both undefined
// let sum;

// var metikos = 3;

// let ih: any = globalThis.me;

// console.log(metikos, globalThis);

// const me = undefined;
// const mer = () => console.log('something logged');

// me?.();
// mer();

// const obj = new Object();
// const obj2 = new Object(1);
// const obj3 = new Object({ name: 3 });

// console.log('obj', obj); // {}
// console.log('obj', obj2); // [Number: 1]
// console.log('obj', obj3); // obj { name: 3 }

// const obj = { me: '3', you: '2' };
// console.log('me' in obj); // true

// const arr = [1, 2, 3, 4, 5];
// console.log(2 in arr); // true

// console.log(3 << 4);

// const me = 0;

// const itIsI = me ?? 'not'; // 0
// const itIsI2 = me || 'not'; // not

// console.log(itIsI);
// console.log(itIsI2);

// const arr = [1, 2, 3, 4, 5];

// delete arr[2];
// console.log(arr); // [ 1, 2, <1 empty item>, 4, 5 ]

// const arr = [1, 2, 3, 4, 5];

// for (let i = 0; i < arr.length; arr[i++] = 0); // [ 0, 0, 0, 0, 0 ]

// const newMap = new Map([
//   ['karlo', 'what'],
//   ['no-way', 'to'],
//   ['no-way', 'to'],
// ]);
// newMap.set('mike', 'sure'); // { "karlo" => "what", "mike" => "sure" }

// console.log('new map', newMap);

// const o = { x: 1, y: 2, z: 3 };

// let a: any[] = [],
//   i = 0;

// // we dont declare anything here
// for (a[0] in o) {
//   // for (a[i++] in o) {
//   // maybe it means a[0] = current key of 0
//   /*
//   [ "x" ]
//   [ "x", "y" ]
//   [ "x", "y", "z" ]
//   */
// }
// console.log(a);

// let b: any[] = [];
// let c = 0;
// b[c++];

// console.log('b', b);

// let token = 2;

// mainloop: while (token !== null) {
//   /* ... */
//   // continue mainloop;
//   break mainloop;
// }

/* let matrix = [
  [2, 3],
  [3, 4],
];

let sum = 0,
  success = false;

computeSum: if (matrix) {
  for (let x = 0; x < matrix.length; x++) {
    let row = matrix[x];
    if (!row) break computeSum;

    for (let y = 0; y < row.length; y++) {
      let cell = row[y];
      if (isNaN(cell)) break computeSum;

      sum += cell;
    }
  }

  success = true;
}

console.log(success); */

// function* range(from: number, to: number) {
//   for (let i = from; i <= to; i++) {
//     yield i;
//   }
// }

// const me = range(3, 8); // {} ?!

// console.log(me);

// const o = new Object();
// const a = new Array();
// const d = new Date();
// const m = new Map();

// /*
// { o: {}, a: [], d: 2021-06-21T08:15:22.084Z, m: Map {} }
// */

// console.log(Object.prototype) // {constructor: ƒ, __defineGetter__: ƒ, __defineSetter__: ƒ, hasOwnProperty: ƒ, __lookupGetter__: ƒ, …}

// const me = new Object()
// me.prototype // undefined

// console.log({ o, a, d, m });

// Object.prototype.prototype // undefined

// const obj = Object.create({ a: 'a', b: 'b' }); // prototype of obj is assinged the prototyp of { a: 'a', b: 'b' }, which is Object.prototype
// const obj2 = Object.create(null); // no prototype, no inherited properties

// // obj2.prototype

// console.log(Object.prototype.isPrototypeOf(obj)); // true
// console.log(Object.prototype.isPrototypeOf(obj2)); // false

// const obj3 = Object.create(Object.prototype);
// console.log('obj3', obj3);
// console.log('obj3 is prototype', Object.prototype.isPrototypeOf(obj3)); // true

// const obj4 = Object.create(Date.prototype);
// console.log('obj4', Date.prototype.isPrototypeOf(obj4)); // true

// const obj = {
//   me: 'you',
//   he: 'she',
//   it: 'what',
// };

// obj['me'];

// const o: any = {};
// o.x = 1;

// const b = Object.create(o);
// console.log(b.x); // 1

// console.log(o.isPrototypeOf(b)); // true
// console.log(Object.isPrototypeOf(b)); // false

// const obj: any = {
//   me: 'me',
//   you: 'you',
//   he: 'she',
//   it: 'what',
// };

// const symName = Symbol('propname');
// obj[symName] = '22';

// const d = new Date();

// const dS = JSON.stringify(d); // "2021-06-21T10:41:27.809Z"
// const dSD = JSON.parse(dS); // 2021-06-21T10:41:27.809Z

// console.log(dS);
// console.log(dSD);

// const arr = [1, 2, 3]; // 1,2,3
// console.log(arr.toString());

// const me = () => {
//   console.log('what');
// };

// console.log(JSON.stringify(me)); // undefined
// console.log(JSON.stringify(me.toString())); // "() => {\n    console.log('what');\n}"

// console.log(Number({})); //NaN
// console.log({}.valueOf()); //{}

// const test: any = {
//   x: 'wwhat',
//   y: 'no',
//   valueOf: function () {
//     return Object.keys(this).length;
//   },
//   toString: function () {
//     return `${this.x} - ${this.y}`;
//   },
//   toLocaleString: function () {
//     return `${this.x.toLocaleString()} -- ${this.y.toLocaleString()}`;
//   },
// };

// // before adding toJSON
// console.log(JSON.stringify(test)); // {"x":"wwhat","y":"no"}

// // add toJSON
// test.toJSON = function () {
//   return this.x;
// };
// console.log(JSON.stringify(test)); // "wwhat"

// console.log(test.valueOf()); // 5;
// console.log(Number(test)); // 5;
/* 
{
  x: "wwhat",
  y: "no",
  toString: [Function: toString],
  toLocaleString: [Function: toLocaleString]
}
*/

// console.log(test.toString()); // wwhat -- no

// const da = new Date();

// console.log('da', da.valueOf()); // 1624273038134

// const newer = Object.assign({}, obj, { mine: 'is' }); // { me: "me", you: "you", he: "she", it: "what", mine: "is", [Symbol(propname)]: "22" }
// console.log(newer);
// console.log(Reflect.ownKeys(obj)); // [ "me", "you", "he", "it", Symbol(propname) ]

// console.log(Object.getOwnPropertySymbols(obj)); // [ Symbol(propname) ]

// console.log(Object.getOwnPropertyNames(obj)); // [ "me", "you", "he", "it" ]

// console.log('me' in obj); // true
// console.log(obj.hasOwnProperty('toString')); // false
// console.log(obj.hasOwnProperty('you')); // true
// console.log(obj.propertyIsEnumerable('you')); // true

// const PROP_NAME = 'p1';
// function computePropName() {
//   return 'y' + 2;
// }

// const obj = {
//   [PROP_NAME]: 'must',
//   [computePropName()]: 'something else ',
// };

// console.log(obj); // { p1: "must", y2: "something else " }

// const ext = Symbol('my extension symbol');

// const o: any = {
//   [ext]: {},
// };

// o[ext].x = 3;

// console.log(o); // { [Symbol("my extension symbol")]: { x: 3 } }

// const sym = Symbol('some symbol');
// const nameOF = 'name';

// const o: any = {
//   get thisObject() {
//     return this;
//   },
//   set aProperty(prop: string) {
//     this[prop] = 3;
//   },
//   [sym]() {},
//   [nameOF]() {},
//   something() {},
//   // shorthand
//   fun() {
//     console.log(this);
//   },
//   someOtherFun: function () {
//     console.log('again');
//   },
// };

// console.log(o.thisObject);
// console.log((o.aProperty = '3'));

// const str = 'karlo i renator';

// const arr = [...str];

// console.log(arr);
// // convert to set, and then spread to get array
// console.log([...new Set(str)]);
// /*
// [
//   "k", "a", "r", "l",
//   "o", " ", "i", "e",
//   "n", "t"
// ]

// */

// const arr = new Array();
// const arr10 = new Array(10);
// const arr2 = new Array(2);
// const arrWithElments = new Array(1, 2, 3, 4);

// console.log(arr); // []
// console.log(arr10); // [ <10 empty items> ]
// console.log(arr2); // [ <2 empty items> ]
// console.log(arrWithElments); // [ 1, 2, 3, 4 ]

// const aSet = new Set([1, 2, 3]);

// const arr = Array.from(aSet, (v) => `This is number ${v}`);

// console.log(arr); // [ "This is number 1", "This is number 2", "This is number 3" ]

// const arr: any = [1, 2];
// arr[16] = 4;

// console.log(arr);
// console.log(arr.length);

// for (const [i, letter] of arr.entries()) {
//   console.log({ i, letter });
// }

// const arr = Array.of(10);
// console.log(arr); // [ 10 ]

// const arr = [1, 2, 3, 4, 5];

// console.log(
//   'reduce to biggest',
//   arr.reduce((acc: number, val: number, i: number, arr: number[]) =>
//     acc > val ? acc : val
//   )
// ); // 5
// console.log(
//   'every',
//   arr.every((e) => e < 10)
// ); // true;

// console.log(
//   'some',
//   arr.some((e) => e < 2)
// ); // true;

// console.log(
//   'every',
//   [].every((e) => e > 2)
// ); // true;

// console.log(
//   'some',
//   [].some((e) => e > 2)
// ); // false;

// const arr = [1, [2, 3, 4, [5, 6, 7, [8, 9, 10]]]];
// console.log(arr.flat()); //[ 1, 2, 3, 4, [ 5, 6, 7, [ 8, 9, 10 ] ] ]
// console.log(arr.flat(2));
// /* [
//   1,
//   2,
//   3,
//   4,
//   5,
//   6,
//   7,
//   [ 8, 9, 10 ]
// ]*/

// console.log(arr.flatMap((e) => e)); // [ 1, 2, 3, 4, [ 5, 6, 7, [ 8, 9, 10 ] ] ]

// const arr = [1, 2, 3, 4, 5, 6, 7];
// console.log(arr.splice(3, 2, 45, 46, 101)); // [ 4, 5 ]
// console.log(arr); /*

// [
//    1,   2, 3, 45,
//   46, 101, 6,  7
// ]

/* console.log(arr.slice(-3)); // relative to the lenght - so lenght is 7, so from 7 - 3, to the end [ 5, 6, 7 ]
console.log(arr.slice(-1)); // relative to the lenght - so lenght is 7, so from 7 - 3, to the end [ 7 ]
console.log(arr.slice(-1, 2)); // */

// const a = new Array(5);
// a.fill(0);

// a.fill(18, 1, 4);
// console.log(a); // [ 0, 18, 18, 18, 0 ]

// const a = [1, 2, 3, 4, 5, 2, 6, 7];
// const b = {};

// console.log(Array.isArray(a)); // true
// console.log(Array.isArray(b)); // false

// console.log(a.indexOf(2)); // 1
// console.log(a.indexOf(2, 4)); // 5
// a.copyWithin(3, 4, 7);
// /*
// [
//   1, 2, 3, 5,
//   6, 7, 7
// ]
// */

// console.log(a);

// const obj: Record<string | number, any> = {};

// let i = 0;

// // give it keys that are integers
// while (i < 10) {
//   obj[i] = i * i;
//   i++;
// }

// // give it lenght object
// obj.length = i;

// // for(const e of obj) {

// // }

// for (let i = 0; i < obj.length; i++) {
//   console.log(obj[i]);
// }

// /*
// 0
// 1
// 4
// 9
// 16
// 25
// 36
// 49
// 64
// 81
// */
// // WITH THIS, we call arrays slice thing
// // but we call it on the called object to map this slice method to the array like object
// console.log(Array.prototype.slice.call(obj, 0));
// /*
// [
//    0,  1,  4,  9, 16,
//   25, 36, 49, 64, 81
// ]

// console.log(Array.prototype.join.call('Karlo', ' ')); // K a r l o
// const immutable = Array.prototype.join.call('Karlo', ' ');

// console.log(Array.prototype.sort.call('Karlo')); // Uncaught TypeError: Cannot assign to read only property '0' of object '[object String]'

// const variable = function optionalName(x: string) {
//   console.log('Something');
// };

// console.log('variable', variable.name); // optionalName

// function hypothenuse(a: any, b: any) {
//   function square(x: any) {return x**}
//   return Math.sqrt(square(a) + square(b))
// }

/* const me: any = {
  name: 'karlo',
  lastName: 'marinovic',
  toUpperCase() {
    this.name = this.name.toUpperCase();
    return this;
  },
  toInitials() {
    this.initials = 'KM';
    return this;
  },
};

const what = me.toUpperCase().toInitials();

console.log('what', what);
/* 
what {
  name: "KARLO",
  lastName: "marinovic",
  toUpperCase: [Function: toUpperCase],
  toInitials: [Function: toInitials],
  initials: "KM"
}
} */

// const obj = {
//   me: '3',
//   // what() {
//   //   console.log('this is what', this);
//   // },
//   test() {
//     console.log('this of obj', this); // this object

//     const what = () => {
//       console.log('this is what', this); // this is what { me: '3', test: [Function: test] }
//     };
//     what();
//   },
// };

// function me() {
//   console.log('this is this', this);
// }

// me(); // global object

// me.call(obj); // obj

// const someF = ({ a, b = a * 2 }) => {
//   console.log(b);
// };

// someF({ a: 16 });

// const myF = (first = 3, ...rest) => {
//   let sume = first;

//   for (let a of rest) {
//     sume = sume + a;
//   }

//   return sume;
// };

// myF(11, 3, 4, 2);
// myF(...[11, 3, 4, 2]);

// function me(y) {
//   for (let i = 0; i < arguments.length; i++) {
//     console.log(arguments[i]);
//   }
// }

// me(1, 2, 3, 4);
// /*
// 1
// 2
// 3
// 4

// */

// function timed(f: any) {
//   return function (...args: any[]) {
//     console.log('this is initial args', args);
//     // collect args in ta rest parameter array
//     console.log('Entering function', f.name);

//     try {
//       return f(...args);
//     } finally {
//       console.log('exiting function', f.name);
//     }
//   };
// }

// function mark(n: any) {
//   console.log('in mark', n);
//   let sum = 0;
//   for (let i = 1; i <= n; i++) sum += i;
//   console.log('sum', sum);
//   return sum;
// }

// // SECOND ARGUMENT IS actually passed into the inner function that is returned form this function
// timed(mark)(1000);

// function vectorAdd([x1, y1]: number[], [x2, y2]: number[]) {
//   return [x1 + x2, y1 + y2];
// }

// console.log(vectorAdd([1, 2], [3, 4])); // [4,6]

// function vectorMultiply({ a, b = 3 }: { a: number; b?: number }, n: number) {
//   console.log(b * n);
// }

// vectorMultiply({ a: 3 }, 7); // 21

/* interface ArrayCopyParams {
  from: number[];
  to?: number[];
  n?: number;
  fromIndex?: number;
  toIndex?: number;
}

function arrayCopy({
  from,
  to = from,
  n = from.length,
  fromIndex = 0,
  toIndex = 0,
}: ArrayCopyParams) {
  // TODO here we just get values that need to be copied
  const valuesToCopy = from.slice(fromIndex, toIndex + n);

  // here we add those values to copy - so from to index, 0 items to remove, and then add all values to copy there
  to.splice(toIndex, 0, ...valuesToCopy);

  return to;
}

const a = [1, 2, 3, 4, 5],
  b = [6, 7, 8, 9, 0];
console.log(arrayCopy({ from: a, n: 2, to: b, toIndex: 4 })); */
/* 
[
  6, 7, 8, 9, 1,
  2, 3, 4, 5, 0
]
*/

// const f = ([first, second, ...leftovers]: number[], ...rest: any[]) => {
//   console.log({ leftovers, rest });
// };

// f([1, 2, 3, 4, 5], ['some', 22]); // { leftovers: [ 3, 4, 5 ], rest: [ [ "some", 22 ] ] }

// function square(x: number) {
//   console.log(x * x);
// }

// const me = square;

// console.log(me === square); // true

// const arrOfFunctions = [
//   (e: any) => console.log(e),
//   (e: number) => console.log(e),
// ];

// counter.previous = 0;
// function counter() {
//   return counter.previous++; // first return, than increment
// }

// console.log(counter()); // 0
// console.log(counter()); // 1
// console.log(counter()); // 2

// function incremental(n: any) {
//   (incremental as unknown as number[])[n] = 2;

//   console.log({ incremental });
// }

// incremental(1);
// incremental(2);

// // incremental[1] = 2;

// console.log(incremental); // [Function: incremental] { "1": 2, "2": 2 }

// function increment() {
//   let n = 1;

//   function t() {
//     n++;
//     return n;
//   }

//   // return t();
//   return t;
// }

// console.log(increment());
// console.log(increment());

// const what = increment();
// const what2 = increment();

// console.log(what());
// console.log(what2());

// let scope = 'global';

// function checkScope() {
//   let scope = 'local';
//   function f() {
//     return scope;
//   }

//   // return f();
//   return f;
// }

// console.log(checkScope()()); // local

// this assigns return of the IIFD to the variable
// const uniqueInteger = (function () {
//   let counter = 0;

//   // this returns a funciton defintion
//   return function () {
//     return counter++;
//   };
// })();

// // this invokes the return of the IIFD
// console.log(uniqueInteger());
// console.log(uniqueInteger());

// const uniqueInteger = function () {
//   let counter = 0;

//   // this returns a funciton defintion
//   return function () {
//     return counter++;
//   };
// };

// const what = uniqueInteger();
// console.log(what());
// console.log(what());

// // this invokes the return of the IIFD
// console.log(uniqueInteger()());
// console.log(uniqueInteger()());

// function uniqueInteger() {
//   let counter = 0;

//   // this returns a funciton defintion
//   return function () {
//     return counter++;
//   };
// }

// const what = uniqueInteger();
// console.log(what());
// console.log(what());

// function counter() {
//   let n = 0;

//   return {
//     count: function () {
//       return n++;
//     },
//     reset: function () {
//       n = 0;
//     },
//   };
// }

// const a = counter(),
//   b = counter();

// console.log(a.count());
// console.log(a.count());
// console.log(a.count());

// console.log(b.count());
// console.log(b.count());
// console.log(b.count());
// console.log(b.reset());
// console.log(b.count());

// 0
// 1
// 2
// 0
// 1
// 2
// undefined
// 0

// function counter(n: number) {
//   return {
//     get count() {
//       return n++;
//     },

//     set count(m) {
//       if (m < n) throw new Error('No can do lesser value then current');
//       n = m;
//     },
//   };
// }

// const c = counter(89);

// console.log(c.count);
// console.log(c.count);
// console.log(c.count);
// console.log(c.count);

/* 
89
90
91
92
*/

/* function addPrivateProperty(
  o: any,
  name: string,
  predicate: (x: any) => boolean
) {
  let value: string;

  o[`get${name}`] = function () {
    return value;
  };
  // this function will be used outside to set new value of the value variable
  o[`set${name}`] = function (v: any) {
    // this tests if the predicate function will validate the name as string
    if (predicate && !predicate(v))
      throw new Error(`Invalid object property name: ${v}`);
    value = v;
  };
}

const o: any = {};

// start the function to actually use the object and attach name to it
addPrivateProperty(o, 'Name', (x: any) => typeof x === 'string');

o.setName('Mark'); // sets the name to be mark

console.log(o.getName()); // mark

o.setName(1); // onvalid - 1 is not string */

// function constFuncs() {
//   const funcs = [];
//   // this does not work
//   /*
//   - ok, so it creates a global i variable
//   - i gets globally incremented
//   - and i guess function will always check anew what value of i s, globally?
//   - so i is defined in the scope in the function - and at the end, it will be 10
//   - so all functions share this same variable in the scope, as this is calculated in the runtime?

//   */
//   for (var i = 0; i < 10; i++) {
//     // 10 for all calls
//     // 10 for all
//     // this works
//     // for (let i = 0; i < 10; i++) { // 4 for 4
//     funcs[i] = () => i;
//   }

//   return funcs;
// }

// const funcs = constFuncs();

// // console.log({ funcs });

// console.log(funcs[4]());

// const mer = function me(a: string, b: number, c: boolean, ...rest: any[]) {};
// console.log(mer.length); // 3
// console.log(mer.name); // me

// const withPrototypeExpression = function () {};
// function withPrototypeDeclaration() {}
// const noPrototypeArrow = () => {};

// console.log(withPrototypeExpression.prototype); // withPrototypeExpression {}
// console.log(withPrototypeDeclaration.prototype); // withPrototypeDeclaration {}
// console.log(noPrototypeArrow.prototype); // undefined

// const obj = {
//   a: 'hat',
//   b: 'dress',
// };

// function test(this: any, num: number, str: string) {
//   // ok, so we can type this - and it will always be this
//   console.log(this);
// }

// test(1, ''); // -> this is good - it expects 2 arguments

// test.call(obj, 1, 'karlo'); // { a: "hat", b: "dress" }
// test.apply(obj, [1, 'karlo']); // { a: "hat", b: "dress" }

// console.log(Math.max([1, 2, 3])); // -> does not work
// console.log(Math.max.apply(Math, [1, 2, 3])); // -> works becuase apply accepts array of arguments, and then unlists them i guess - - but we have to call it on Math object
// console.log(Math.max.apply(this, [1, 2, 3])); // -> wthis works too, because Math obj is not needed for .max to do its job

// create object with some test function
// const obj = {
//   test(num: number, n2: number, s: string) {
//     console.log({ num, n2, s });
//   },
// };

// function trace(o: any, name: string) {
//   const original = o[name];

//   // with ...args we make sure we get array, so that we can pass it to apply
//   o[name] = function (...args: any[]) {
//     console.log('Entering', name);

//     console.log('what is this', this);
//     // call the original method, but on current scope
//     let result = original.apply(this, args);

//     console.log('exiting ');
//   };
// }

// // intiiate the chage on the object - the closure, by callinbg the cunction

// trace(obj, 'test');
// // obj now has remapped test function
// // but this remapped function still uses the original funciton avaialble in the closure of trace function
// obj.test(1, 2, 'what');

// function f(this: any, y: number) {
//   return this.x + y;
// }

// const o = { x: 2 };

// // bounding the function to 0
// const g = f.bind(o);

// console.log(g(2)); // 4 - o is this

// // trying to assing the bound function to another object
// const h = { x: 16, g };

// console.log(h.g(11)); // 13 -> g is still bound to o

// const sum = (x: number, y: number) => x + y;
// // binding this wont work with arrow functions, but partial application will
// const succ = sum.bind(null, 1);
// console.log(succ(2)); // 3

// function add(x: number, y: number) {
//   return x + y;
// }

// const adder = add.bind({ x: 18 }, 62);

// console.log(adder(12)); // 74

// const f = new Function('y', 'x', 'console.log(y + x)');

// f(1, 2); // 3

// const scope = 'global';

// function constFunction() {
//   let scope = 'local';

//   return new Function('return scope');
// }

// console.log(constFunction()()); // not defined even, because of module?

// it basically returns a function that will take some arguments
// and then this function will call function passed to the parent not, and apply it with these arguments
// function not(f: Function) {
//   return function (this: any, ...args: any[]) {
//     const result = f.apply(this, args);
//     return !result;
//   };
// }

// const even = (x: number) => x % 2 === 0;
// // this takes not, passes even to it
// // this will return a new function that will accept arguments
// const odd = not(even);

// // and then we can call every on it - every will pass three arguments to odd
// console.log([1, 1, 3, 5, 5].every(odd)); // true

// const map = function (a: any[], f: () => any) {
//   return a.map(f);
// };

// function mapper(f: any) {
//   // the array will be passed to the returned funciton later
//   return (a: any[]) => map(a, f);
// }

// const increment = (x: number) => x + 1;

// const incrementAll = mapper(increment);

// console.log(incrementAll([1, 2, 3])); // 2, 3 ,4

// function compones(f: any, g: any) {
//   return function (...args: any[]) {
//     return f.call(this, g.apply(this, args));
//   };
// }

// const sum = (x: number, y: number) => x + y;
// const square = (x: number) => x * x;

// compones(square, sum)(2, 3);

// this is just a function that does something
// const f = function (x: number, y: number, z: number) {
//   return x * (y - z);
// };

// // here is the function that will reutrn a function

// function partialLeft(f: any, ...outerArgs: any[]) {
//   return function (this: any, ...innerArgs: any[]) {
//     const args = [...outerArgs, ...innerArgs];

//     return f.apply(this, args);
//   };
// }

// console.log(partialLeft(f, 2)(3, 4)); // -2

// function partialRight(f: any, ...outerArgs: any[]) {
//   return function (this: any, ...innerArgs: any[]) {
//     // jere we have 3, 4, 2 = 6
//     const args = [...innerArgs, ...outerArgs];

//     return f.apply(this, args);
//   };
// }
// console.log(partialRight(f, 2)(3, 4)); // 6

// function partial(f: any, ...outerArgs: any[]) {
//   return function (this: any, ...innerArgs: any[]) {
//     const args = [...outerArgs];

//     let innerIndex = 0;
//     // here we will loop thorugh args
//     for (let i = 0; i < args.length; i++) {
//       if (args[i] === undefined) args[i] = innerArgs[innerIndex++];
//     }

//     // if some value is undefined, at that place we will insert inner arg at the current inner index position
//     // at the end, we will push all relaming items from inner args - remaining from the inner index
//     args.push(...innerArgs.slice(innerIndex));

//     // and now we just return funciton with the current arguments
//     return f.apply(this, args);
//   };
// }

// // this undefined is important for this implementation, because it will make first argument from the inner args come into its place
// console.log(partial(f, undefined, 3)(11, 6)); // -33

// const sum = (a: number, b: number) => a + b;

// function memoize(f: any) {
//   const cache = new Map(); // { cache: Map {} }

//   console.log({ cache });

//   return function (this: any, ...args: any[]) {
//     const key = args.length + args.join('+');
//     console.log({ key }); // { key: "23+3" }

//     if (cache.has(key)) {
//       return cache.get(key);
//     }

//     // here we use apply to calculate result
//     const result = f.apply(this, args);
//     // and we store the result in the map
//     cache.set(key, result);

//     return result;
//   };
// }

// const test = memoize(sum);
// console.log(test(2, 3));
// console.log(test(2, 3));
// console.log(test(3, 3));
// console.log(test(3, 3));

/* 
{ cache: Map {} }
{ key: "22+3" }
5
{ key: "22+3" }
5
{ key: "23+3" }
6
{ key: "23+3" }
6
*/

// function range(from: number, to: number) {
//   // this prototype will make sure all objects created this way have all same methods
//   const r = Object.create(range.methods);

//   // store new propertirs on newly created object - these are unique to the created object

//   r.from = from;
//   r.to = to;

//   return r;
// }

// range.methods = {
//   // define includes function to check if a value is included in the range

//   includes(this: any, x: any) {
//     return this.from <= x && x <= this.to;
//   },

//   // this is to make the newly created object iterable
//   *[Symbol.iterator](this: any) {
//     for (let x = Math.ceil(this.from); x <= this.to; x++) {
//       yield x;
//     }
//   },

//   toString(this: any) {
//     return { from: this.from, to: this.to }.toString();
//   },
// };

// const ob = range(2, 3);
// console.log(ob);
// console.log(ob.includes(2));
// console.log([...ob]);

/* 
{ from: 2, to: 3 }
true    
[ 2, 3 ]

*/

// simple funciton

// interface Ranger {
//   from: any;
//   to: any;
// }

// function Ranger(this: Ranger, from: any, to: any) {
//   this.from = from;
//   this.to = to;
// }

// // we have to defined prototype property
// // Ranger.prototype = {
// //   constructor: Ranger,
// //   includes: function (this: any, x: any) {
// //     return this.from <= x && x <= this.to;
// //   },

// //   [Symbol.iterator]: function* (this: any) {
// //     for (let x = Math.ceil(this.from); x <= this.to; x++) yield x;
// //   },
// //   toString: function () {
// //     return 'just a representaiton';
// //   },
// // };

// Ranger.prototype.includes = function (this: any, x: any) {
//   return this.from <= x && x <= this.to;
// };

// const o = new (Ranger as any)(3, 2);
// console.log('are these constructors equal', o.constructor === Ranger); // this is now true again., becuase the construtor that was default stayed in the proptoty object

// console.log('instanceof', o instanceof Ranger); // true
// console.log('prototype', Ranger.prototype);
// /*
// prototype {
//   includes: [Function: includes],
//   toString: [Function: toString],
//   [Symbol(Symbol.iterator)]: [GeneratorFunction: [Symbol.iterator]]
// }
// */

// console.log(Ranger.prototype.isPrototypeOf(o)); // true

// console.log('constructor of o', o.constructor); // [Function: Object]

// const date = new Date();
// console.log(date.constructor === Date); // true

// const me = () => console.log('what');
// console.log(me.prototype); // undefined, but still has it?
// console.log(me.prototype.constructor); // nothing here

// function you() {
//   console.log('what again');
// }
// console.log(you.prototype); // you {} -> actually has a proper prototype
// console.log(you.prototype.constructor); // [Function: you]

// class Ranger {
//   from: any;
//   to: any;
//   constructor(from: any, to: any) {
//     this.from = from;
//     this.to = to;
//   }

//   includes(x: any) {
//     return true;
//   }

//   *[Symbol.iterator]() {
//     for (let x = Math.ceil(this.from); x <= this.to; x++) {
//       yield x;
//     }
//   }

//   toString() {
//     return 'hllo';
//   }
// }

// const r = new Ranger(3, 2);

// console.log('r', r); // r Ranger { from: 3, to: 2 }

// const Square = class What {
//   area: any;
//   constructor(x: any) {
//     this.area = x * x;
//   }
// };

// const s = new Square(3);
// console.log({ s }); // { s: Square { area: 9 } }

// console.log(Square.name); // What
// console.log(s.name); // not possible

// const s = '(1...10)';

// const matches = s.match(/^\((\d+)\.\.\.(\d+)\)$/);

// console.log(matches);

// class What {
//   name: string;

//   constructor(n: string) {
//     this.name = n;
//   }

//   static parse(s: string) {
//     const matches = s.match(/^\((\d+)\.\.\.(\d+)\)$/);

//     return new What('karlo');
//   }
// }

// const me = What.parse('karlo');

// console.log({ me }); // { me: What { name: "karlo" } }

// class Me {
//   me: string;
//   constructor() {
//     this.me = ''; // old way
//   }

//   what = 6; // new way
//   no = 11;

//   static six = 'three';
//   static #noWay = 11; // this is private

//   // get way() {
//   //   const me = #noWay
//   //   return this.#noWay - 4;
//   // }
// }

// const o = new Me();

// console.log({ o });

// class Complex {
//   r: number;
//   i: number;

//   constructor(real: number, imaginary: number) {
//     this.r = real;
//     this.i = imaginary;
//   }

//   // two instance methods for additiona nad multipliucation of complex number
//   // we actually do create a new instance with this
//   // so we can use it from the class, or from an instance

//   plus(that: Complex) {
//     // we return entire new instance here, so we can call all other methods on this returned object
//     return new Complex(this.r + that.r, this.i + that.i);
//   }

//   times(that: Complex) {
//     return new Complex(
//       this.r * that.r - this.i * that.i,
//       this.r * that.i - this.i * that.r
//     );
//   }

//   // some getters here
//   get real() {
//     return this.r;
//   }

//   get imaginary() {
//     return this.i;
//   }

//   get magnitude() {
//     return Math.hypot(this.r, this.i);
//   }

//   toString() {
//     return `{${this.r}, ${this.i}}`;
//   }

//   // defie a method that will test if two instances of a class represent the sae value
//   equals(that: Complex) {
//     return that instanceof Complex && this.r === that.r && this.i === that.i;
//   }

//   static ZERO = new Complex(0, 0);
//   static ONE = new Complex(1, 0);
//   static I = new Complex(0, 1);
// }
// // TODO this is old way, before static fields were available in the class
// // Complex.ZERO = new Complex(0, 0);
// // Complex.ONE = new Complex(1, 0);
// // Complex.I = new Complex(0, 1);

// const c = new Complex(2, 3);

// const d = new Complex(c.i, c.r);

// c.plus(d).toString();
// console.log(c.magnitude); // 3.6055512754639896

// (Complex.prototype as any).conj = function () {
//   // -> ts wont allow this, so have to cast as any
//   return new Complex(this.r, -this.i);
// };

// (Object.prototype as any).what = 'three';

// function Ranger(start: number, end: number) {
//   const inst = Object.create(Ranger.prototype);
//   inst.start = start;
//   inst.end = end;
//   return inst;
// }

// const o = Ranger(4, 2);

// console.log({ o }); // { o: Ranger { start: 4, end: 2 } }

// function SubClass(this: any, start: number, something: number) {
//   this.from = start;
//   this.n = something;
// }

// // now we define subclasses prototype
// SubClass.prototype = Object.create(Ranger.prototype);

// // define our own constructor of Span

// SubClass.prototype.constructor = SubClass;

// // and then we can add our own functions to prototoye
// SubClass.prototype.tester = function (this: any) {
//   return this.start;
// };

// class EZArray extends Array {
//   get first() {
//     return this[0];
//   }

//   get last() {
//     return this[this.length - 1];
//   }
// }

// const a = new EZArray();

// // console.log(a instanceof EZArray); // true
// // console.log(a instanceof Array); // true
// // console.log(Array.isArray(a)); // true

// // console.log(Array.prototype.isPrototypeOf(EZArray.prototype)); // true
// // console.log(Array.isPrototypeOf(EZArray)); // true

// const m = new Map([['a', 'b']]);

// console.log({ m });

// const arr = [[1, 2, 3, 4, 5]];

// // for (const [k, v] of arr) {
// for (const t of arr) {
//   console.log({ arr });
//   // console.log({ k, v });
//   // of course, we get another array here
//   // and then we destructure it with [k, v] -> but only first two elements
//   console.log({ t });
// }

// for(const [k,v] of arr.entries()) {

// }

// class TypedMap extends Map {
//   private keyType: string;
//   private valueType: string;
//   constructor(keyType: string, valueType: string, entries: [any, any][] = []) {
//     if (entries) {
//       for (let [k, v] of entries) {
//         if (typeof k !== keyType || typeof v !== valueType)
//           throw new TypeError(`Wrong type for entry [${k}, ${v}]`);
//       }
//     }

//     // @ts-ignore
//     super(entries);
//     // we need to define this to be able to use it later when setting new values
//     this.keyType = keyType;
//     this.valueType = valueType;

//     // console.log('new target here', new.target); // new target here [Function: TypedMap]
//   }

//   // just redefining set method to type check
//   set(key: any, value: any) {
//     if (this.keyType && typeof key !== this.keyType)
//       throw new TypeError(`${key} is not of type ${this.keyType}`);

//     if (this.valueType && typeof value !== this.valueType)
//       throw new TypeError(`${value} is not of type ${this.valueType}`);

//     return super.set(key, value);
//   }
// }

// const o = new TypedMap('string', 'string', [['karlo', 'name']]);

// console.log({ o });

// const entries: any[][] = [[1, 2]];

// for (let [k, v] of entries) {
//   console.log({ k, v });
// }

// class Histogram {
//   // have a variable of map type
//   map: Map<any, any>;

//   constructor() {
//     this.map = new Map();
//   }

//   // just access property on the map
//   count(key: any) {
//     return this.map.get(key) || 0;
//   }

//   // just return boolean in case value of the key is greater than 0
//   // also, call that count function to count the fileds value
//   has(key: any) {
//     return this.count(key);
//   }

//   // just return size
//   get size() {
//     return this.map.size;
//   }

//   add(key: any) {
//     // just call set
//     // and then call count again, + 1
//     this.map.set(key, this.count(key) + 1);
//   }

//   // note how delete is handled on maps
//   delete(key: any) {
//     const count = this.count(key);
//     if (count === 1) {
//       this.map.delete(key);
//     } else if (count > 1) {
//       this.map.set(key, count - 1);
//     }
//   }

//   // just setting up iteration ability for the histogram
//   // it returns all keys
//   [Symbol.iterator]() {
//     return this.map.keys();
//   }

//   // and other methods, that just delegate to maps methods
//   keys() {
//     return this.map.keys();
//   }

//   values() {
//     return this.map.values();
//   }
//   entries() {
//     return this.map.entries();
//   }
// }

// class AbstractSet {
//   // just throw an error, to force sublcass define their own method
//   has(x: any) {
//     throw new Error('Abstract method');
//   }
// }

// class AbstractEnumerableSet extends AbstractSet {
//   // this is another abstract method - if it is not defined by a concrete implementaiton, it will throw an error when called
//   // it needs to return a number
//   get size(): number {
//     throw new Error('Abstract method');
//   }
//   // define abstract iterator
//   [Symbol.iterator](): Iterable<unknown> {
//     throw new Error('Abstract method');
//   }

//   // this calls the size getter
//   // but this is an issue with typescirpt, because it knows that size will throw an error
//   isEmpty() {
//     return this.size === 0;
//   }

//   toString() {
//     // @ts-ignore
//     return Array.from(this).join();
//   }

//   // equals will check if
//   // - set is an instance of tis particular instance
//   // - if sizes match
//   // - if all elements of this are in the set taht we are achecking against

//   equals(set: Set<any>) {
//     if (!(set instanceof AbstractEnumerableSet)) return false;
//     if (this.size !== set.size) return false;
//     // @ts-ignore
//     for (const element of this) {
//       if (!set.has(element)) return false;
//     }

//     return true;
//   }
// }

// class AbstractWritebleSet extends AbstractEnumerableSet {
//   insert(x: any) {
//     throw new Error('Abstract methodf');
//   }
//   remove(x: any) {
//     throw new Error('Abstract methodf');
//   }

//   add(set: Set<any>) {
//     for (const element of set) {
//       this.insert(element);
//     }
//   }
// }

// // concrete classes

// class SingletonSet extends AbstractEnumerableSet {
//   member: any;
//   constructor(member: any) {
//     super();
//     this.member = member;
//   }

//   has(x: any) {
//     return x === this.member;
//   }

//   // size is always 1
//   get size() {
//     return 1;
//   }

//   // this is the iterator , to make the thing iterable
//   *[Symbol.iterator]() {
//     yield this.member;
//   }
// }

// class RangeSet extends AbstractSet {
//   from: number;
//   to: number;
//   constructor(from: number, to: number) {
//     super();
//     this.from = from;
//     this.to = to;
//   }

//   has(x: number) {
//     return x >= this.from && x <= this.to;
//   }

//   toString() {
//     return `from: ${this.from} | to: ${this.to}`;
//   }
// }

// class NotSet extends AbstractSet {
//   set: Set<any>;
//   constructor(set: Set<any>) {
//     super();
//     this.set = set;
//   }

//   // implement that has method  // just return if the set does not have this value
//   has(x: any) {
//     return !this.set.has(x);
//   }

//   toString() {
//     return [...this.set].join();
//   }
// }

// const BitSet = (function () {
//   // these here now are private impleentaion details
//   function isValid(set: any, n: any) {
//     console.log('what');
//   }
//   function has(set: any, byte: any, bit: any) {
//     console.log('what');
//   }

//   const BITS = new Uint8Array([1, 2, 3, 4, 5]);
//   const MASKS = new Uint8Array([~1, ~2, ~3, ~4, ~5]);

//   // now we define class to be returned here
//   // this class can use the methods and fields from above
//   // and those fields are hidden

//   return class BitSet {
//     a: string;
//     b = has;
//     constructor(a: string) {
//       this.a = a;
//     }
//   };
// })();

// const newBitSet = new BitSet('karlo');

// console.log({ newBitSet }); // { newBitSet: BitSet { a: "karlo", b: [Function: has] } }

// const stats = (function () {
//   // private to the modukle

//   const sum = (x: number, y: number) => x + y;
//   const square = (x: number) => x * x;

//   // public functions from here
//   function mean(data: number[]) {
//     return data.reduce(sum) / data.length;
//   }

//   function stddev(data: any[]) {
//     // using previous function
//     const m = mean(data);
//     return Math.sqrt(
//       data
//         .map((x) => x - m)
//         .map(square)
//         .reduce(sum) /
//         (data.length - 1)
//     );
//   }

//   // export public stuff as properties of the object
//   return { mean, stddev };
// })();

// console.log(stats.mean([1, 2, 3, 4])); // 2.5

// const modules: any = {};

// function require(moduleName: string) {
//   return modules[moduleName];
// }

// // now define modules
// modules['sets.js'] = (function () {
//   const exports: any = {};

//   exports.BitSet = class BitSet {
//     constructor() {}
//   };

//   return exports;
// })();

// // huh, defined my own
// const sets = require('sets.js');

// export {};
