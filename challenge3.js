(function(length, width) {
    const area = length * width;
    console.log(`The area of a rectangle with a length of ${length} and a width of ${width} is ${area}.`);
})(parseFloat(prompt("Enter the length of the rectangle:")), parseFloat(prompt("Enter the width of the rectangle:")));
