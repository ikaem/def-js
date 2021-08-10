// const pattern = /s$/;
// const pattern2 = new RegExp('s$');

// const javaMatch = /java/;

// const bothSs = /s$/i;
// const bothSs2 = new RegExp('s$', 'i');

// const anyBackslashedString = /\\/;
// // const anyBackslashedString2 = new RegExp('\\');

// const anyABC = /[abc]/;
// const noABC = /[^abc]/;
// // console.log('t'.match(noABC)); //['t'];

// // console.log('a'.match(anyABC)); //['a'];

// const charsRange = /[a-z]/;

// const charsRangeAll = /[a-zA-Z0-9]/;
// const hyphen = /[a-zA-Z0-9-]/;

// // console.log('-'.match(hyphen)); // ['e'];
// // console.log('e'.match(charsRangeAll)); // ['e'];
// // console.log('e'.match(charsRange)); // ['e'];

// const whiteSpace = /\s/;
// console.log(' '.match(whiteSpace)); // [" "]

// const nonUnicodeWhiteSpace = /\S/;

// console.log(' '.match(nonUnicodeWhiteSpace)); // null, because " " is unicode

// const anyBetweenBrackets = /[aa]/;

// console.log('[what]'.match(anyBetweenBrackets));

// const anyCharacterExceptUnicodeLineTerminator = /./;
// const anyCharacter = /./s;

// console.log('me'.match(anyCharacterExceptUnicodeLineTerminator)); // ["m"]
// console.log(`\nwhat`.match(anyCharacterExceptUnicodeLineTerminator)); // ["w"] - because te new line does not match
// console.log(`\nwhat`.match(anyCharacter)); // ["\n"] - because te new line matches now

// const anyASCIIWordCharacter = /\w/; // tjhis is same as [a-zA-Z0-9_] //
// const anyNonASCIIWordCharacter = /\W/; // tjhis is same as [^a-zA-Z0-9_]

// console.log('3'.match(anyASCIIWordCharacter)); // ["3"]
// console.log('3'.match(anyNonASCIIWordCharacter)); // null - because 3 is asci

// const anyASCIIDigit = /\d/; // same as [0-9]
// const anyNonASCIIDigitCharacter = /\D/; // same as [^0-9]

// console.log('3'.match(anyASCIIDigit)); // ["3"]
// console.log('f'.match(anyNonASCIIDigitCharacter)); // ["f"]

// const literalBackspace = /[\b]/;

// console.log('\b'.match(literalBackspace)); //["\b"]

const whiteSpaceOrDigit = /[\s\d]/;

console.log(' '.match(whiteSpaceOrDigit)); // [" "]
