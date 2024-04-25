// sorting from ascending
const fruit = ["Banana", "Orange", "Apple", "Mango"];
fruit.sort();
console.log(fruit)

// The reverse() method reverses the elements in an array: 
const fruits2 = ["Banana", "Orange", "Apple", "Mango", "pineapple"];
fruits2.reverse();
console.log(fruits2)

// By combining sort() and reverse(), you can sort an array in descending order:
const fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.sort();
fruits.reverse();
console.log(fruits)

//  keeping the original array unchanged, while the last method alters the original array.
const months = ["Jan", "Feb", "Mar", "Apr"];
const sorted = months.toSorted();
console.log(months)

// keeping the original array unchanged, while the last method alters the original array.
const month = ["Jan", "Feb", "Mar", "Apr"];
const reversed = month.toReversed();
console.log()