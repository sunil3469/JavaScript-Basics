const myArr = [0, 1, 2, 3, 4]
const myHeros = ["batman", "ironman"]

const myArr2 = new Array(9, 8, 7, 6)

//console.log(myArr);

// array methods

myArr.push(6)
myArr.pop()

myArr.unshift(9) // add first
myArr.shift()

console.log(myArr);

console.log(myArr.includes(9));
console.log(myArr.indexOf(9));

const newArr = myArr.join("-")
console.log(newArr);  // string



//slice, splice

console.log("A ",myArr);
const myn1 = myArr.slice(1,3)

console.log(myn1);
console.log("B ",myArr);

const myar2 = myArr.splice(1,3)
console.log(myar2);
console.log("C ",myArr);




