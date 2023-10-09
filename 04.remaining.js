//immidiatly invoked function expression (IIFE)


(function ex() {
    console.log(`iife`);
})();

( (name) => {
    console.log(`iife 2 ${name}`);
})("sunil");

