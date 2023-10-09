// for of

const arr = [10,20,30,40,50]

for (const itr of arr){
    console.log(itr);
}

const greetings = "hello world"
for (const greet of greetings){
    console.log(greet);
}


// maps
const map = new Map();
map.set('IN', 'India')
map.set('US','USA')

console.log(map);

for(const [key,val] of map){
    console.log(key,';-',val);
}

const obj = {
    'game1' : 'nfs',
    'game2' : 'gta'
}

for(const key in obj){
    console.log(obj[key]);
}

//for in

for(const key in arr){
    console.log(key);  // for in gives index 
}

const coding = ['js','java','py','cpp']

coding.forEach(function (item) {
    console.log(item);
})

coding.forEach( (item) => {
    console.log(item);
})

function print (item){
    console.log(item);
}

coding.forEach(print)

const myCoding = [
    {
        langName : 'java',
        langFileName : '.java'
    },
    {
        langName : 'python',
        langFileName : '.py'
    },
    {
        langName : 'javaScript',
        langFileName : '.js'
    }
]

myCoding.forEach( (item) => {
    console.log(item.langName);
})