console.log("hello world");

let user = {
    name : "John",
    years : "30"
};
let {name, years: age, isAdmin = false} = user;
console.log("user");

alert ( name ); //John
alert ( age ); //30
alert ( is admin ); //false