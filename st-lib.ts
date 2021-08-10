// const s = new Set(); // an empty set
// const t = new Set([1, s]); // set with 2 memebers - number and an empty set

// const m = new Set('Mississippi');

// console.log(m); // Set { "M", "i", "s", "p" }
// console.log(m.size); // 4 //  we use size to check lenght of a set

// const test = new Set();
// test.add(4);
// console.log(test.size);
// test.add(2);
// console.log(test.size);
// test.delete(2); // delete actual item 2
// console.log(test); // Set { 4 }
// test.add([1, 2, 3]);
// console.log(test); // Set { 4, [ 1, 2, 3 ] }
// test.delete([1, 2, 3]); // this does not work
// // console.log(test); // Set { 4, [ 1, 2, 3 ] }

// const arr = [1, 2, 3];
// test.add(arr);
// console.log({ test });
// test.delete(arr); // this will work - becuase we are deleting specific element for the set
// console.log({ test });

// test.clear();
// test.add(3);
// test.add(4);
// test.add(5);
// test.add(6);
// test.add(7);
// console.log(test.has(3)); // true

/* for (const e of test) {
  console.log(e);
  /* 
  3
4
5
6
7
  
  
}
*/

// test[3]; // Property '3' does not exist on type 'Set<unknown>'.

/* test.forEach((n, i) => {
  console.log({ n, i });
  /* 
{ n: 3, i: 3 }
{ n: 4, i: 4 }
{ n: 5, i: 5 }
{ n: 6, i: 6 }
{ n: 7, i: 7 }
  
  
}); */

// empty map
// const m = new Map();

// // this is map initialled with string keys
// const n = new Map([
//   ['one', 1],
//   ['two', 2],
// ]);

// const copy = new Map(n);

// console.log({ n, copy }); // { n: Map { "one" => 1, "two" => 2 }, copy: Map { "one" => 1, "two" => 2 } }

// const o = { x: '2', y: '3' };

// // because entries will return array of arrays
// const newer = new Map(Object.entries(o)); // Map { "x" => "2", "y" => "3" }

// console.log(newer);

// console.log(newer.get('x')); // 2

// newer.set('z', '54'); // { newer: Map { "x" => "2", "y" => "3", "z" => "54" } }

// // console.log({ newer });

// console.log('has', newer.has('z')); // true

// console.log('delete', newer.delete('z')); // true

// // console.log('clear', newer.clear()); // undefined

// console.log('size', newer.size); // 2

// const m = new Map().set('2', 'x').set('3', '4'); // Map { "2" => "x", "3" => "4" }

// const arr = [1, 2, 3];

// m.set(null, '3');
// m.set(undefined, '3');
// m.set(NaN, '3');
// m.set(arr, '3');

// /* Map {
//   "2" => "x",
//   "3" => "4",
//   null => "3",
//   undefined => "3",
//   NaN => "3",
//   [ 1, 2, 3 ] => "3"
// } */

// // console.log(m);

// for (let what of m) {
//   // console.log(what);
//   /*
//   [ "2", "x" ]
// [ "3", "4" ]
// [ null, "3" ]
// [ undefined, "3" ]
// [ NaN, "3" ]
// [ [ 1, 2, 3 ], "3" ]
//   */
// }

// console.log(...m); // [ "2", "x" ] [ "3", "4" ] [ null, "3" ] [ undefined, "3" ] [ NaN, "3" ] [ [ 1, 2, 3 ], "3" ]

// console.log(...m.keys()); // 2 3 null undefined NaN [ 1, 2, 3 ]
// console.log(...m.values()); // x 4 3 3 3 3

// m.forEach((value, key, map) => {
//   console.log({ value, key, map });

//   /*   { value: "x", key: "2" }
// { value: "4", key: "3" }
// { value: "3", key: null }
// { value: "3", key: undefined }
// { value: "3", key: NaN }
// { value: "3", key: [ 1, 2, 3 ] } */
// });

// Int8Array;
// Uint8Array;
// Uint8ClampedArray; // -> special case, variant on the Uit8Array // does not wrap arround 255 or 0 if values above or below is give - it clamps to 255 or 0
// Int16Array;
// Uint16Array;
// Int32Array;
// Uint32Array;
// BigInt64Array;
// BigUint64Array;
// Float32Array; // - also numbers, but required only half the memoery, but less precision
// Float64Array;

// const arr = new Int8Array([2]); // [2]

// console.log(arr.BYTES_PER_ELEMENT); // 1

// let matrix = new Float64Array(9); // all values are initialized to 0

// // console.log({ matrix });

// // const white = Uint8ClampedArray.of(255, 255, 255, 0);
// // const black = Uint8ClampedArray.from([255, 255, 255, 0]); // make it from an iterable vlaue

// // console.log({ white }); // [ 255, 255, 255, 0 ]
// // console.log({ black }); // [ 255, 255, 255, 0 ]

// // use of to immediately pass values to an array
// const me = Uint8Array.of(3.4, 2.4); // Uint8Array(2) [ 3, 2 ]

// me[2] = 13; // [ 3, 2 ] // -> no new elemnt is added, becuase lenght is predefined

// console.log(me);

// const buffer = new ArrayBuffer(1024 * 1024);

// console.log(buffer); //{}
// console.log(buffer.byteLength); //this is one megabyte of memory

// const me = Uint8Array.from([1, 2, 3, 4]);

// console.log(me[2]); // 3

// console.log(me.join('')); // 1234

// const bytes = new Uint8Array(1024); // this is all zeroes

// const pattern = new Uint8Array([0, 1, 2, 3]);

// bytes.set(pattern); // Uint8Array(1024) [0, 1, 2, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,...
// bytes.set(pattern, 5); // Uint8Array(1024) [0, 1, 2, 3, 0, 0, 1, 2, 3, 0, 0, 0, 0, 0, 0,...
// bytes.set([54, 13], 2); // Uint8Array(1024) [ 0, 1, 54, 13, 0, 0, 1, 2,...

// // console.log(bytes.slice(0, 7));
// /*
//  [
//   0, 1, 54, 13,
//   0, 0,  1
// ]
// */

// const me = bytes.subarray(0, 4);

// // console.log({ me }); // { me: Uint8Array(4) [ 0, 1, 54, 13 ] }

// // console.log({ me });
// // console.log({ bytes });

// /*
// { me: Uint8Array(4) [ 100, 1, 54, 13 ] }
// {
//   bytes: Uint8Array(1024) [
//     100, 1, 54, 13, 0, 0, 1, 2, 3, 0, 0, 0, 0, 0, 0,

//     */

// me[0] = 100;
// console.log('buffer', me.buffer);
// console.log('buffer is the same', me.buffer === bytes.buffer); // true // the underlying buffer object is the same

// console.log(me.byteOffset); // 0

// console.log(me.byteLength); // 4 -> 4 for the subarray
// console.log(me.buffer.byteLength); // 1024 for the buffers bte lenght

// console.log(me.length * me.BYTES_PER_ELEMENT === me.byteLength); // true
// we have lenght of 4, times 1 byte per eleent, is 4 bytes lenght

const bytes = new Uint8Array(1024); // 1024 bytes, because element is 8 bits

console.log(bytes.byteLength); // 1024
console.log(bytes.buffer.byteLength); // 1024

const ints = new Uint32Array(bytes.buffer);

console.log(ints.byteLength); // 1024 // 256 integers, because 32 * 256 = 1024 bytes
console.log(ints.buffer.byteLength); // 1024

const floats = new Float64Array(bytes.buffer);

console.log(floats.byteLength); // 1024 // 128 integers, because 64 * 128 = 1024 bytes
console.log(floats.buffer.byteLength); // 1024
