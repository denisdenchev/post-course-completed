// How do you check if two strings are a rotation of each other?

const checkRotation = (str1, str2) => {
	const concat = str1.concat(str1);
	return concat.includes(str2);
};

console.log(checkRotation("abcd", "bcda"));
console.log(checkRotation("abcd", "cbda"));
