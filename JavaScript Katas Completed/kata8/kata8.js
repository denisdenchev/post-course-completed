// // How do you print duplicate characters from a string?

const aString = " My name is Denis, I am 25 years old";

const sortArray = (givenArray) => {
	const stringDupe = [...givenArray];
	const filteredArray = stringDupe.filter(
		(element, index) => stringDupe.indexOf(element) != index
	);

	console.log(filteredArray);

	let i = filteredArray.length;
	const emptySpaces = /\S/;

	while (i--) !emptySpaces.test(filteredArray[i]) && filteredArray.splice(i, 1);
	console.log(filteredArray);
};

sortArray(aString);
