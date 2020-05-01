// How do you find the largest and smallest number in an unsorted integer array?

const myArray = ["1", "2", "4", "3", "5", "7", "6"];
const myArray1 = [
	"3",
	"5",
	"8",
	"7",
	"4",
	"9",
	"6",
	"1",
	"900",
	"1000",
	"-5",
	"-2.5",
];

const nums = (givenArray) => {
	const highestNum = Math.max(...givenArray);
	const lowestNum = Math.min(...givenArray);
	console.log(`Highest Number : ${highestNum}`, `Lowest Number: ${lowestNum}`);
};

nums(myArray);
nums(myArray1);
