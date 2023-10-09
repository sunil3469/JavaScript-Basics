let score = "33"

console.log(typeof(score));

let valueInNumber = Number(score)
console.log(typeof valueInNumber);
console.log(valueInNumber);

/*
"33" = 33
"33abc" = Nan  -> Not a Number
true = 1; false = 0
*/

let isLoggedIn = 10
let booleanIsLoggedIn = Boolean(isLoggedIn)
console.log(booleanIsLoggedIn);

/*
1, 10, ... => true ; 0 => false
"" => false ; "asas" => true
*/

let someNum = 33
let stringNum = String(someNum);
console.log(typeof stringNum);


// *************** Operations *************//

let value = 3
let negValue = -value
console.log(negValue);

let str1 = "hello"
let str2 = "sunil"

let str3 = str1 + " " + str2
console.log(str3);

console.log("1" + 2 + 2);
console.log(1 + 2 + "2");

console.log(+true);

let x = 100
x++
console.log(x);

// ************* comparison **************//
 
console.log("2" < 3);

// ===  strict check
console.log("2" === 2);
