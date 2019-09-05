// Library

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

let library = {
    myLibrary: [],
    addBookToLibrary: function(title, author, pages, read) {
        this.myLibrary.push(new Book(title, author, pages, read));
    },
}
