const getCelsius = (fahrenheit) => (fahrenheit - 32) * 5 / 9;

const userInput = prompt("Enter a temperature in Fahrenheit:");
const fahrenheitTemp = parseFloat(userInput);

if (!isNaN(fahrenheitTemp)) {
    console.log(`The temperature is ${getCelsius(fahrenheitTemp).toFixed(2)} \xB0C`);
} else {
    console.log("Please enter a valid number.");
}
