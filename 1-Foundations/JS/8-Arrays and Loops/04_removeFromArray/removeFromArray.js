const removeFromArray = function(array, ...number) {
    return array.filter(num => !number.includes(num))
};

// Do not edit below this line
module.exports = removeFromArray;
