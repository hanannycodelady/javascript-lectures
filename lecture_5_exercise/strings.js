// Returns the length of a string. 
// Example:
const my_string = "tennis";
console.log(my_string.length);

// Converts a string to uppercase
const myString ='tennis';
console.log(myString.toUpperCase());

// Converts a string to lowercase
const string ='tennis';
console.log(string.toLowerCase());

// Returns the character at a specific index in a string
const strings ='tennis';
console.log(strings.charAt(2));

// Extracts a section of a string and returns a new string
// string slicing
const about_string =' love tennis';
console.log(about_string.slice("0,4"))

// Indexing Returns the index of the first occurrence of a specified value in a string.
const about_strings = "love tennis";
console.log(about_strings.indexOf("o"));

// trimming removes whitespace from both ends of a string.
const str = "   tennis   ";
console.log(str.trim()); 

// replace replaces a substring with another substring.
const substring = " love tennis ";
console.log(substring.replace("tennis", "singing"));


// separating Splits a string into an array of substrings based on a specified separator.
const substrings = "tennis,swimming,netball";
console.log(substrings.split(","));

// concatinate(adding) Joins two or more strings and returns a new string.
const str1 = "love";
const str2 = "tennis";
console.log(str1.concat(" ", str2)); 

// startsWith this Determines whether a string starts with the specified characters, returning true or false.
const string_one = "love tennis";
console.log(string_one.startsWith("love")); 
console.log(string_one.startsWith("tennis"));

// endsWith(searchString) this determines whether a string ends with the specified characters, returning true or false.
const str_one = "love tennis";
console.log(str_one.endsWith("tennis"));
console.log(str_one.endsWith("love"));

// repeat Returns a new string consisting of the original string repeated a certain number of times.
const str_two = "tennis ";
console.log(str_two.repeat(3));





