// Recursive
/*const fibonacci = function(num) {
    if(num < 0)
        return "OOPS";
    if(num == 0)
        return 0;
    if(num == 1)
        return 1;

    return fibonacci(num - 1) + fibonacci(num - 2);
};*/

// Iterative
const fibonacci = function(num){
    nums = [0, 1];
    if(num < 0)
        return "OOPS";

    for(let i = 2; i <= num; i++)
        nums[i] = nums[i - 1] + nums[i - 2];
    

    return nums[num];
}

// Do not edit below this line
module.exports = fibonacci;
