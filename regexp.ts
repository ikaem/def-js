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

// const whiteSpaceOrDigit = /[\s\d]/;

// console.log(' '.match(whiteSpaceOrDigit)); // [" "]

// const anyDecimalDigit = /\p{Decimal_Number}/u;
// console.log('3.2'.match(anyDecimalDigit)); // ["3"]

// const anyNonDecimalDigitCharacter = /\P{Decimal_Number}/u;
// console.log('T'.match(anyNonDecimalDigitCharacter)); //["T"]

// const anyNumberLikeCharacter = /\p{Number}/u;
// console.log('¼'.match(anyNumberLikeCharacter)); // [ "¼" ]

// const anyUnicodeCharacter =
//   /[\p{Alphabetic}\p{Decimal_Number}\p{Mark}\p{Connector_Punctuation}\p{Join_Control}]/u;
// console.log('!'.match(anyUnicodeCharacter)); //["k"]

// const cyrillicScript = /\p{Script=Cyrillic}/u;
// console.log('Б'.match(cyrillicScript)); // [ "Б" ]

// const anyTwoDigitNumber = /\d\d/;

// console.log('23'.match(anyTwoDigitNumber)); // [ "23" ]

// const betweenTwoAndFourDigits = /\d{2,4}/;
// console.log('123'.match(betweenTwoAndFourDigits)); // ["123"]

// const threeCharsOptionalDigit = /\w{3}\d?/;
// console.log('wa44'.match(threeCharsOptionalDigit)); // [ "wa44" ]

// const spacesArondJava = /\s+java\s+/;
// console.log(' java  '.match(spacesArondJava)); // [ " java  " ]

// const zeroOrMoreNotBracket = /[^(]*/;
// console.log('333'.match(zeroOrMoreNotBracket)); // [ "333" ]

// const zeroOrMoreBracket = /[(]*/;
// console.log('ttt'.match(zeroOrMoreNotBracket)); // [ "ttt" ]

// const nonGreedyA = /a+?/;

// console.log('aaa'.match(nonGreedyA)); // [ "a" ]

// const nonGreedyAB = /a+?b/;
// console.log('aaab'.match(nonGreedyAB)); // [ "aaab" ]

// const alternativeStrings = /ab|cd|ef/;
// console.log('cd'.match(alternativeStrings)); // [ "cd" ]

// const threeDigsOrFourLetters = /\d{3}|[a-z]{4}/;
// console.log('333'.match(threeDigsOrFourLetters)); // [ "333" ]

// const optionalScript = /java(script)?(no)?/;
// console.log('javascript'.match(optionalScript)); // [ "javascript", "script", undefined ]

// const alternativeSubexpressions = /(ab|cd)+|(ef)/;
// console.log('ef'.match(alternativeSubexpressions)); // [ "ef", undefined ]

// const lowercaseLettersEndWithDigits = /[a-z]+(\d+)/;
// console.log('karlo23tss23sag123'.match(lowercaseLettersEndWithDigits)); // [ "karlo23", "23" ]

// const nestedSubexpressions = /([Jj]ava([Ss]cript)?)\sis\s(fun\w*)/;

// const charsInsideQuotes = /['"][^'"]*['"]/;
// console.log("'my name is karlo'".match(charsInsideQuotes)); // [ "'my name is karlo'" ]

// const charsInsideQuotesSubex = /(['"])[^'"]*['"]/;
// console.log("'my name is karlo'".match(charsInsideQuotesSubex)); // [ "'my name is karlo'", "'" ]

// const charsInsideQuotesSubexRef = /(['"])[^'"]*\1/;
// console.log("'my name is karlo'".match(charsInsideQuotesSubexRef)); // [ "'my name is karlo'", "'" ]

// const subexpWNNumbering = /([Jj]ava(?:[Ss]cript)?)\sis\s(fun\w*)/;

const namedCaptureGroupAddress = /(?<city>\w+)(?<state>[A-Z]{2})/;

const namedQuotes = /(?<quote>['"])[^'"]*\k<quote>/;

console.log("'what is'".match(namedQuotes)); // [ "'what is'", "'" ]
