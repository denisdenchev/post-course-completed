// How do you reverse the words in a sentence?
const sentence = "hello darling, how are you?";

const reverseWords = (givenSentence) => {
	console.log(givenSentence.split(" ").reverse());
};

reverseWords(sentence);
