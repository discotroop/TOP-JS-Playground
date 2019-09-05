// Library
let handlers = {
    getLibraryDiv: document.querySelector("#library"),

}

// Book constructor.
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
    books: [],

    addBookToLibrary: function(title, author, pages, read) {
        this.books.push(new Book(title, author, pages, read));
    },

    render: function(libraryArray, libraryDOM) {
        libraryArray.forEach(function(book) { /*this.books can be used in place of library array */
            let libraryCard = document.createElement("div");
            libraryCard.innerHTML = 
                `<p> Title: ${book.title} </p>
                <p> Author: ${book.author} </p>
                <p> Pages: ${book.pages} </p>
                <p> Read: ${book.read} </p>`;
            libraryCard.setAttribute("class", "libraryCard");
            // libraryCard.innerText = book;
            console.log(libraryCard.innerText);
            libraryDOM.appendChild(libraryCard);

        })

        // write function createBooksCard
    }
}
library.addBookToLibrary("hucklyberry finn", "mark twain", "800", "read");

library.render(library.books, handlers.getLibraryDiv)
