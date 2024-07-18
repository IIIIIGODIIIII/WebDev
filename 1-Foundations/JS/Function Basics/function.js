// Write a function called add7 that takes one number and returns that number + 7.
function add7(number){
    return number + 7;
}

// Write a function called multiply that takes 2 numbers and returns their product.
function multiply(num1, num2){
    return num1 * num2;
}

// Write a function called capitalize that takes a string and returns that string with only the first letter capitalized. Make sure that it can take strings that are lowercase, UPPERCASE or BoTh.
function capitalize(str){
    if(str.length == 0)
        return ""
    return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
}

// Write a function called lastLetter that takes a string and returns the very last letter of that string
function lastLetter(str){
    if(str.length == 0)
        return ""
    return str.charAt(str.length - 1);
}


// Test cases for add7
console.assert(add7(0) === 7, `Expected 7, but got ${add7(0)}`);
console.assert(add7(-7) === 0, `Expected 0, but got ${add7(-7)}`);
console.assert(add7(10) === 17, `Expected 17, but got ${add7(10)}`);
console.assert(add7(100) === 107, `Expected 107, but got ${add7(100)}`);

// Test cases for multiply
console.assert(multiply(0, 10) === 0, `Expected 0, but got ${multiply(0, 10)}`);
console.assert(multiply(2, 5) === 10, `Expected 10, but got ${multiply(2, 5)}`);
console.assert(multiply(-1, 8) === -8, `Expected -8, but got ${multiply(-1, 8)}`);
console.assert(multiply(7, 3) === 21, `Expected 21, but got ${multiply(7, 3)}`);

// Test cases for capitalize
console.assert(capitalize("hello") === "Hello", `Expected "Hello", but got ${capitalize("hello")}`);
console.assert(capitalize("HELLO") === "Hello", `Expected "Hello", but got ${capitalize("HELLO")}`);
console.assert(capitalize("hELLO") === "Hello", `Expected "Hello", but got ${capitalize("hELLO")}`);
console.assert(capitalize("world") === "World", `Expected "World", but got ${capitalize("world")}`);
console.assert(capitalize("") === "", `Expected "", but got ${capitalize("")}`);

// Test cases for lastLetter
console.assert(lastLetter("abcd") === "d", `Expected "d", but got ${lastLetter("abcd")}`);
console.assert(lastLetter("hello") === "o", `Expected "o", but got ${lastLetter("hello")}`);
console.assert(lastLetter("A") === "A", `Expected "A", but got ${lastLetter("A")}`);
console.assert(lastLetter("") === "", `Expected "", but got ${lastLetter("")}`);
console.assert(lastLetter("xyz") === "z", `Expected "z", but got ${lastLetter("xyz")}`);

console.log("All tests completed");
