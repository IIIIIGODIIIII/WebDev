const palindromes = function (string) {
    string = string.toLowerCase().replace(/[^A-Za-z-0-9]/g, '');
    if(string === string.split('').reverse().join(''))
        return true;
    else 
        return false;
};

// Do not edit below this line
module.exports = palindromes;
