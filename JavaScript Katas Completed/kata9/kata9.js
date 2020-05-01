// How do you check if two strings are anagrams of each other?

const sortStrings = (string, targetString) => {
	aString1 = string.split("").sort().join("");
	aString2 = targetString.split("").sort().join("");
	aString1.value == aString2.value && aString1.length == aString2.length
		? console.log("string are anagrams")
		: console.log("strings are not anagrams");
};

sortStrings("octopus", "supotco");
sortStrings("lovely", "balloon");
sortStrings("I love you", "you I love");
