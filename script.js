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
    books: ["this", "is", "a", "test", "me"],

    addBookToLibrary: function(title, author, pages, read) {
        this.books.push(new Book(title, author, pages, read));
    },

    render: function(libraryArray, libraryDOM) {
        this.books.forEach(function(book) {
            let libraryCard = document.createElement("p");
            libraryCard.setAttribute("class", "libraryCard");
            libraryCard.innerText = book;
            console.log(libraryCard.innerText);
            libraryDOM.appendChild(libraryCard);
        })

        // for (let i = 0; i < libraryArray.length; i++) {
        //     console.log(i);
        //     libraryDOM.appendChild(libraryCard.cloneNode());
        // };
        // let i = 0;
        // while (i < libraryArray.length) {
        //     libraryDOM.appendChild(libraryCard.cloneNode());
        //     i++;
        // }

    }
}
library.addBookToLibrary("hucklyberry finn", "mark twain", "800", "read");

library.render(library.books, handlers.getLibraryDiv)
