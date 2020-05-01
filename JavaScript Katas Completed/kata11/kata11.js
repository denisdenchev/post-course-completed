// How do you check if a given string is a palindrome?

const isPalindrome = (givenString) => {
	const regex = /[\W_]/g;
	const clearString = givenString.toLowerCase().replace(regex, "");
	const reversedString = clearString.split("").reverse().join("");

	clearString == reversedString
		? console.log("The string is palindrome")
		: console.log("The string is not a palindrome");
};

isPalindrome("A man, a plan, a canal. Panama");
isPalindrome("hello-man");
isPalindrome("eye-eye");
isPalindrome("ManaM");
