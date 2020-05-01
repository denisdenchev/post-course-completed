// How do you remove duplicates from an array in place?

const myArray = [2, 1, 3, 3, 4, 5, 7, 6, 5, 8, 9];

//Use the variable "duplicates" as it doesn't contain the duplicate numbers
let arrayWithoutDupes = [...new Set(myArray)].sort();
console.log(arrayWithoutDupes);
