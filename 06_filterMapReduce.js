// const myNums = [1,2,3,4,5,6,7,8,9,10]

// const newNums = myNums.filter( (num) => num>4)

// const newNums = myNums.filter( (num) => {
//     return num >4
// })

// const newNums = []
// myNums.forEach( (num) => {
//     if(num > 4){
//         newNums.push(num)
//     }
// })

// const newNums = myNums.map( (num) => num+10)

// const newNums = myNums.map( (num)=> num*10).map((num)=>num+1).filter((num)=>num>40)

// console.log(newNums);


//reduce

const myNums =  [1,2,3,4,5]

// const myTot = myNums.reduce(function (acc, cur){
//     console.log(`acc: ${acc} cur: ${cur}`);
//     return acc+cur
// },0)

const myTot = myNums.reduce( (acc, cur)=> acc+cur, 0)
console.log(myTot);


const shoppingCart = [
    {
        itemName : "js course",
        price : 299
    },
    {
        itemName : "py course",
        price : 499
    },
    {
        itemName : "data science",
        price : 1299
    }
]

const ans = shoppingCart.reduce((acc,item) => acc+item.price, 0)


console.log(ans);