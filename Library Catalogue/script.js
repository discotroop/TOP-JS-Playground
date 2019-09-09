let handlers = {
    getLibraryDiv: document.querySelector("#library"),
    newBookForm: document.querySelector("#newBookForm"),
    newBookClicked: function() {
        clicked = document.querySelector("#newBook"),
        clicked.addEventListener("click", function() {
            library.setFormDisplay();
        });
    },
    submitNewBook: function() {
        submitForm = document.querySelector("#submit");
        submitForm.addEventListener("click", function() {
            library.addBookFromDOM();
            library.setFormDisplay();
        handlers.removeBook();
        handlers.toggleRead();    
        });
    },
    removeBook: function() {
        let books = document.querySelectorAll(".remove");
        books.forEach(function (book) {
            book.addEventListener("click", function(e) {
                let index = e.srcElement.parentNode.data;
                library.removeBook(index);
            });
        });
    },
    toggleRead: function() {
        let buttons = document.querySelectorAll(".read");
        buttons.forEach(function (button) {
            button.addEventListener("click", function(e) {
                let index = e.srcElement.parentNode.data;
                library.toggleRead(index);
            });
        });
    }
}
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
    books: [], /* easy to miss */
    addBookToLibrary: function(title, author, pages, read) {
        this.books.push(new Book(title, author, pages, read));
    },
    render: function(libraryArray, libraryDOM) {
        libraryDOM.innerHTML = "";
        for (let i = 0; i < libraryArray.length; i++) {
            let libraryCard = document.createElement("div");
            libraryCard.data = i;
            libraryCard.innerHTML = 
                `<p> Title: ${libraryArray[i].title} </p>
                <p> Author: ${libraryArray[i].author} </p>
                <p> Pages: ${libraryArray[i].pages} </p>
                <p> Read: ${libraryArray[i].read} </p>
                <button class="remove">Remove</button>
                <button class="read">Read</button>`;
            libraryCard.setAttribute("class", "libraryCard");
            libraryDOM.appendChild(libraryCard);
        }
    },
    setFormDisplay: function () {
        let formDisplayed = handlers.newBookForm.hidden;
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
    removeBook: function (index) {
        this.books.splice(index, 1);
        this.render(this.books, handlers.getLibraryDiv);
        handlers.removeBook();
    },
    toggleRead: function(index) {
        let readStatus = this.books[index].read;
        if (readStatus === "yes") {
            this.books[index].read = "no";
        } else {
            this.books[index].read = "yes";
        }
        this.render(this.books, handlers.getLibraryDiv);
        handlers.toggleRead();
    },
    init: function () {
        library.render(library.books, handlers.getLibraryDiv)
        handlers.newBookClicked();
        library.setFormDisplay();
        handlers.submitNewBook();
        handlers.removeBook();
        handlers.toggleRead(); 
    }
}

library.init();