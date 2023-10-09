const score = 400
console.log(score);

const balance = new Number(100)
console.log(balance);

console.log(balance.toString().length);
console.log(balance.toFixed(2));

const hundreds = 1000000;
console.log(hundreds.toLocaleString('en-IN'));

// ************ MATHS *******************//

console.log(Math);
console.log(Math.abs(-2));

console.log(Math.round(1.22));

console.log(Math.ceil(1.22)); // floor

console.log(Math.min(1,2,34,5));  //max

console.log(Math.random());
console.log(Math.random()*10 + 1);

const min = 10
const max = 20
console.log(Math.floor(Math.random() * (max-min + 1))+ min) // 10 - 20 random num


