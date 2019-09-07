// Library
let handlers = {
    getLibraryDiv: document.querySelector("#library"),
    newBookForm: document.querySelector("#newBookForm"),
    newBookClicked: function() {
        clicked = document.querySelector("#newBook"),
        clicked.addEventListener("click", function() {
            library.setFormDisplay();
        });
    },
    tester: function() {
        submitForm = document.querySelector("#submit");
        submitForm.addEventListener("click", function() {
            console.log(submitForm.value);
            console.log("clicked submit");
            library.addBookFromDOM();
            library.setFormDisplay();
        });
    },
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
        libraryDOM.innerHTML = "";
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
    },

    setFormDisplay: function () {
        let formDisplayed = handlers.newBookForm.hidden;
        
        // I can get it with formDisplayed but I can't set it with formDisplayed
        if (formDisplayed === false) {
            handlers.newBookForm.hidden = true;
        } else if (formDisplayed === true) {
            handlers.newBookForm.hidden = false;
        }
    },

    addBookFromDOM: function () {
        let title = document.querySelector("#title").value;
        let author = document.querySelector("#author").value;
        let pages = document.querySelector("#pages").value;
        let read = "yes";
        this.addBookToLibrary(title, author, pages, read);
        this.render(this.books, handlers.getLibraryDiv);
    },


}
library.addBookToLibrary("hucklyberry finn", "mark twain", "800", "read");

library.render(library.books, handlers.getLibraryDiv)

handlers.newBookClicked();

library.setFormDisplay();

handlers.tester();
