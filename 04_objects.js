//const tinderUser = new Object()
const tinderUser = {}

tinderUser.id = "123abc"
tinderUser.name = "sam"
tinderUser.isLoggedIn = false;

// console.log(tinderUser);

const regularUser = {
    email : "some@gmail.com",
    fullname : {
        userfullname : {
            firstname : "sunil",
            lastname : "choudhary"
        }
    }
}

console.log(regularUser.fullname.userfullname);
console.log(regularUser.fullname.userfullname.firstname);

const obj1 = { 1 : "a", 2 : "b"}
const obj2 = { 3 : "a", 4 : "b"}

// const obj3 = {obj1, obj2}
// const obj3 = {...obj1, ...obj2}
const obj3 = Object.assign({}, obj1, obj2)
console.log(obj3);

const user = [
    {
        id : 1,
        name : "sam"
    },
    {
        id : 2,
        name : "amms"
    }
]
console.log(user[0].name);

console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));

console.log(tinderUser.hasOwnProperty("isLoggedIn"));


// de-structuring
const course = {
    coursename : "js in hindi",
    price : 999,
    courseInstructor : "jitesh"
}

// course.courseInstructor
const {courseInstructor : ci} = course
console.log(ci);


// api's


