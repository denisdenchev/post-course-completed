//How can a given string be reversed using recursion?

const recursionReverse = (string) => {
	if (string === "") {
		return "";
	} else {
		return recursionReverse(string.substr(1)) + string.charAt(0);
	}
};

console.log(recursionReverse("hello"));
console.log(recursionReverse("Hello world"));
console.log(recursionReverse("hello-how-are-you"));
