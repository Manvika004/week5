const minMax = (arr) => ({ min: Math.min(...arr), max: Math.max(...arr) });

const userInput = prompt("Enter numbers separated by commas:");
const numberArray = userInput.split(',').map(Number);

if (numberArray.every(num => !isNaN(num))) {
    console.log(minMax(numberArray));
} else {
    console.log("Please enter valid numbers.");
}
