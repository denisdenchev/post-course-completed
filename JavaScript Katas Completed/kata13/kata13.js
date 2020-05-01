// How do you check if two strings are a rotation of each other?

const checkStrings = (string1, string2) => {
	string1.toLowerCase().split("").reverse().join("") === string2
		? console.log("Strings are rotation of each other")
		: console.log("Strings are not rotation of each other");
};

checkStrings("hello", "olleh");
checkStrings("you", "me");
checkStrings("you-me", "em-uoy");
checkStrings("Eye", "eye");
