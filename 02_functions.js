function calculateCartPrice(val1, val2,...num1){  //rest or spread operator
    return num1  
}

console.log(calculateCartPrice(2, 3, 4, 5));

const user = {
    username : "sunil",
    price : 199
}

function handleObject(anyobject){
    console.log(`username is ${anyobject.username} and price is ${anyobject.price}`);
}

// handleObject(user)
handleObject({
    username : "hitesh",
    price : 299
})

const newArr = [200, 400, 100, 600]

function returnSecondVal(getArray){
    return getArray[1]
}

console.log(returnSecondVal(newArr));

//scope of fun

console.log(addOne(5));
function addOne(num){
    return num+1
}

const addTwo = function(num){
    return num+2
}
console.log(addTwo(7));