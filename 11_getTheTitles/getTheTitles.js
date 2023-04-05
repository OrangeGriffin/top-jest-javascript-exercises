const getTheTitles = function(books) {
 const titles = []
 for (book in books) {
    titles.push(books[book].title)
 }
 return titles;
};

// Do not edit below this line
module.exports = getTheTitles;
