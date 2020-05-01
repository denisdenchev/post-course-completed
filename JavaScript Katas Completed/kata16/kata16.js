// How do you check if a string contains only digits?

const checkString = (aString) => {
	const regex = /^\d+$/;
	regex.test(aString)
		? console.log("This string contains digits only")
		: console.log("This string does not contain only digits");
};

checkString("123");
checkString("abc");
checkString("123abc");
