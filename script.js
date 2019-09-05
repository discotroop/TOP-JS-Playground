console.log("test");

function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.info = function () {
        let result = title + author + pages + read;
        return result;
    }
}

// TOP NOTES: It is almost always better to return things and console.log them
// later rather than console.log(ing) in a function.

const captain = new Book("Captains Courageous, ", "Rudyard Kipling, ", "200, ", "yes")

console.log(captain.info());