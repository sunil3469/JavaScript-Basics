const user = {
    username : "sunil",
    price : 999,

    welcomeMessage : function() {
        console.log(`${this.username} welcome to website`);
        console.log(this);
    }
}

// user.welcomeMessage()
// user.username = "sam"
// user.welcomeMessage()

// console.log(this);

// function chai() {4
//     let x = 3
//     console.log(this.x);  //print undefined
//     //this works only in object not in fun
// }

// chai()

// const chai = function () {
//     let x = 10
//     console.log(this.x);
// }
// chai()  //undefined


const chai = () => {  // arrow function
    console.log(this);
}
chai()  //undefined


// const addTwo = (num1, num2) => {
//     return num1 + num2
// }
// console.log(addTwo(2,3));

const addTwo = (num1, num2) => num1 + num2
console.log(addTwo(2,3));

const random = () => ({user : "sunil"})
console.log(random())








