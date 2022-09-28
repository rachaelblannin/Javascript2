console.log("hello world");

let user = {
    name : "John",
    years : "30"
};
let {name, years: age, isAdmin = false} = user;
console.log("user");

const welcome = function(name,age,gender){
    return console.log(`my name is (name), I am (age) years old and of gender (gender)`); 
}

welcome ("Felix Cited", "20", "male");