// How do you find the duplicate number on a given integer array? (Kata2)
// How do you find duplicate numbers in an array if it contains multiple duplicates? (Kata3)
const givenArray1 = ["3", "5", "1", "4", "2", "2", "1", "4"];
const givenArray2 = ["2", "5", "3", "1", "4", "6", "8", "7", "2", "7", "3"];

const sortArray = (givenArray) => {
	const filteredArray = givenArray
		.sort()
		.filter((element, index) => givenArray.indexOf(element) != index);

	console.log(filteredArray);
};

sortArray(givenArray1);
sortArray(givenArray2);
