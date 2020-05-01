// How do you print the first non-repeated character from a string

const aString = "Hello, my name is Denis Denchev, I am 25 years old";
const newArray = aString.toLowerCase();
let noDupes = []; // This is an array of the letters that doesn't duplicate

for (index = 0; index < newArray.length; index++) {
	newArray.indexOf(newArray.charAt(index)) ==
	newArray.lastIndexOf(newArray.charAt(index))
		? noDupes.push(newArray.charAt(index))
		: null;
}

console.log(noDupes[0]); // First non-repeated letter
