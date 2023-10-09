// singleton -> object.create()

//object literals
const mySym = Symbol("key1")

const jsUser = {
    name : "sunil",
    //mySym : "myKey1",  /takes as string
    [mySym] : "myKey1",
    age : 22,
    location : "jodhpur",
    email : "sunil@google.com",
    isLoggedIn : false,
    lastLoginDays : ["mon","wed"]
}

// console.log(jsUser.email);
// console.log(jsUser["email"]);
console.log(jsUser.mySym); // error -> undefined
console.log(jsUser[mySym]);

jsUser.emial = "sunil@tcs.com"
// Object.freeze(jsUser)
jsUser.emial = "sunil@microsoft.com"
console.log(jsUser);


jsUser.greeting = function(){
    console.log(`hello js user, ${this.name}`);
}

console.log(jsUser.greeting);
console.log(jsUser.greeting());




 
