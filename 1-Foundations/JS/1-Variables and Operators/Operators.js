// 1. Add 2 numbers together
function addTwoNumbers(num1, num2) {
    return num1 + num2;
}


console.log(addTwoNumbers(23, 97));  // Example usage

// 2. Add a sequence of 6 different numbers together
function addSequence(num1, num2, num3, num4, num5, num6) {
    return num1 + num2 + num3 + num4 + num5 + num6;
}


console.log(addSequence(4, 8, 15, 16, 23, 42));  // Example usage

// 3. Print the value of the expression: (4 + 6 + 9) / 77
function calculateExpression() {
    return (4 + 6 + 9) / 77;
}


console.log(calculateExpression());  // Example usage

// 4. Using variables
function multiplyByNine(a) {
    return 9 * a;
}

function setB(a) {
    return 7 * a;
}

let a = 10;
console.log(a);  // Should print 10
console.log(multiplyByNine(a));  // Should print 90
let b = setB(a);
console.log(b);  // Should print 70


// 5. Working with constants and calculations
function calculatePercentage() {
    const MAX = 57;
    let actual = MAX - 13;
    let percentage = actual / MAX;

    return percentage;
}

console.log(calculatePercentage());  // Should print approximately 0.7719
