const path = require('path');

const me = require('./text');

import * as all from './text';
import { burek as notBurek } from './text';

import {
  default as ThisWasDefaultExport,
  somethingNamed1,
  somethingNamed2,
} from './text';

import './text';

const fullExportedObject = require('./text');
const { justSingleObject, anotherSingleObject } = require('./text'); // these are nested inside the full exported object

const sum = (x: number) => x * x;
const square = (x: number, y: number) => x * y;

// // so expots is jsut an objec, to which we attach data
// exports.mean = (data: any[]) => data.reduce(sum) / data.length;
// exports.sttdev = function (d: any[]) {
//   // note how we use mean from exports in this code, and that is ok
//   const m = exports.mean(d);
//   return Math.sqrt(
//     d
//       .map((x) => x - m)
//       .map(square)
//       .reduce(sum) /
//       (d.length - 1)
//   );
// };

const mean = (data: any[]) => data.reduce(sum) / data.length;
function stddev(d: any[]) {
  // note how we use mean from exports in this code, and that is ok
  const m = exports.mean(d);
  return Math.sqrt(
    d
      .map((x) => x - m)
      .map(square)
      .reduce(sum) /
      (d.length - 1)
  );
}

module.exports = {
  mean,
  stddev,
};

const OBJECT = {
  mean: 3,
};
// export { OBJECT.mean as somethingElse2 }; // --> not good!!

export { mean as somethingElse };

// module.exports = class BitSet {
//   constructor() {}
// };
