const getTheTitles = function(books) {
    res = [];
    for (let i = 0; i < books.length; i++) 
        res.push(books[i].title);
    return res;
};

// Do not edit below this line
module.exports = getTheTitles;
