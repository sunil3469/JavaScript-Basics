let myDate = new Date()
console.log(myDate.toString());
console.log(myDate.toDateString());
console.log(myDate.toLocaleString());
console.log(typeof myDate);

// let myCreatedDate = new Date(2023, 0, 2);
// let myCreatedDate = new Date(2023, 0, 2, 5, 3);

// month start from 0//
let myCreatedDate = new Date("2023-01-02");
console.log(myCreatedDate.toLocaleString());

let myTimeStamp = Date.now();

console.log(myTimeStamp);

console.log(Math.floor(Date.now()/1000));


let newDate = new Date();
console.log(newDate.getDay());
console.log(newDate.getMonth());

newDate.toLocaleString('default',{
    weekday : 'long',
})