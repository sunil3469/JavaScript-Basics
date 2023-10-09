const marver_heros = ["thor","ironman","spiderman"]

const dc_heros = ["superman","batman","flash"]

// marver_heros.push(dc_heros)  //
// const allHeros = marver_heros.concat(dc_heros)
// console.log(allHeros);

// or we can use spred method
const all_new_heros = [...marver_heros,...dc_heros]
console.log(all_new_heros);

const another_arr = [1,2,3,[4,5,6],7,[6,7,[4,5]]]
console.log(another_arr);

const real_another_arr = another_arr.flat(Infinity)
console.log(real_another_arr);

console.log(Array.isArray("sunil"));
console.log(Array.from("sunil"));

console.log(Array.from({name : "sunil"}));



let s1 = 100;
let s2 = 200;
let s3 = 300;

console.log(Array.of(s1, s2, s3));