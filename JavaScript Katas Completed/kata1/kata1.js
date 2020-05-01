// 01. How do you find the missing numbers in a given integer array?


const missingNumberInArray = (number) => {
    const numsInOrder = number.sort((a, b) => a - b);
    const highestNum = Math.max(...numsInOrder)
    const lowestNum = Math.floor(...numsInOrder)
    
    let missingNum = [];

    for (index = lowestNum; index < highestNum; index++) {
        !number.includes(index) ? missingNum.push(index) : null
    } ;
    return missingNum
}

console.log(missingNumberInArray([1, 5]),"2,3,4")
console.log(missingNumberInArray([1, 3, 5]), "2, 4")
console.log(missingNumberInArray([1, 3, 5, 4, 2]), "empty")
console.log(missingNumberInArray([5, 2, 4, 8, 0]), "1, 3, 6, 7")



