function syMyName(){
    console.log("s");
    console.log("u");
    console.log("n");
    console.log("i");
    console.log("l");
}

// syMyName()

// function addTwoNum(num1, num2){
//     console.log(num1+num2)
// }

// const res = addTwoNum(2, 3)
// console.log(res);
// addTwoNum(2,"3")


function addTwoNum(num1, num2){
    return num1+num2;
}

const res = addTwoNum(2, 3)
// console.log(res);

function loginUserMessage (username){
    return `${username} just logged in`
}
// console.log(loginUserMessage("sunil"))
console.log(loginUserMessage())

