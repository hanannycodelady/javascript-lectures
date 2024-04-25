//Alert "John" by extracting information from the person object.
// showing john because it is the key name and person is the object name.
const person = {
    firstName: "John",
    lastName: "Doe"
};
console.log(person.firstName)


//Add the following property and value to the person object: country: Uganda.
const person1 = {
    firstName: "Jane",
    lastName: "Doe"
}
//adding the key name country
person1.country="uganda"
console.log(person1);

//Create an object called person with name = John, age = 50. Then, access the object to alert("John is 50").
const person3 ={
    name: "John",
    age: 50
}
// Am access the object to alert("John is 50")
console.log(person3.name + "is" + person3.age);
