const text = "Please locate where 'locate' occurs!";
const index = text.indexOf("locate");
console.log(index)



let text2 = "The rain in SPAIN stays mainly in the plain";
//  showing the first ain
console.log(text2.match("ain"))
// bringing the all strings with ain
console.log(text2.match(/ain/g))
// bringing all the strings with ain and the ones of capital
console.log(text2.match(/ain/gi))


let text3 = "I love cats. Cats are very easy to love. Cats are very popular."
const iterator = text3.matchAll("Cats");
console.log(Array.from(iterator))


let text4 = "Hello world, welcome to the universe.";
// looking for a string in position 12
const startAt12=text4.includes("world",12);
console.log(startAt12)
// looking for a string in position 
const startAt0=text4.includes("world",);
console.log(startAt0)

// need to add example for startswith
// startsWith this Determines whether a string starts with the specified characters, returning true or false.
const string_one = "love tennis";
console.log(string_one.startsWith("love"));


// need to add example for endswith
// endsWith(searchString) this determines whether a string ends with the specified characters, returning true or false.
const str_one = "love tennis";
console.log(str_one.endsWith("tennis"));

// javascript template strings


const text6=
`
my
name
is hananny
`
// variable don't work with courts both double and single

// javascript interpolation
let firstName = "John";
let lastName = "Doe";
let text7 = `Welcome ${firstName}, ${lastName}!`;


const student = {
    name: "hananny",
    age: 20,
    class: 2023,
};
console.log(`My name is ${student.name}, I am ${student.age} years old.`)

const statement = `I am in the ${student.class} class, studying JavaScript`;
console.log(statement);







