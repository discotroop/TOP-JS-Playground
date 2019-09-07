Playground for Javascript Projects for The Odin Project.

Library:
// Basic Set Up:
// 1. files structures
// 2. git integration.

// Version 1: Console:
// 1. Build a Book constructor/prototype.
// 2. Set array to stores book(s)
// 3. write addBookToLibrary

Version 2: Moving to the DOM.
Part 1:
// 1. write render() to loop through myLibrary and display the contents on the page.
    a. display items either in table or on their own "card"

2. add "New Book" button.
//    a. It should bring up a form.
//    b. form should have inputs for author, title, and page number
//    c. form should have radial for read/not read.
    d. form should call addBookToLibrary with proper inputs.
    e. form should call render after addBookToLibrary has run.

Part 2.: Removing Elements:
1. Add "remove" button to each book in catalogue.
    a. "you will need to associate your DOM elements with the actual boook obects."
    b. "you can give them a data-attribute that corresponds to the index in the library array.

2. Add a button on each book to change its read status.
    a. write function to toggle read status
    b. hook up "read" button to read function.

Version 3: Optional.
1. Send shit to local storage.

    Optional -we haven’t learned any techniques for actually storing our data anywhere, so when the user refreshes the page all of their books
     will disappear! If you want, you are capable of adding some persistence to this library app using one of the following techniques:

        localStorage (docs here) allows you to save data on the user’s computer. The downside here is that the data is ONLY accessible on the computer that it was created on. Even so, it’s pretty handy! Set up a function that saves the whole library array to localStorage every time a new book is created, and another function that looks for that array in localStorage when your app is first loaded. (make sure your app doesn’t crash if the array isn’t there!)
        Firebase (check it out!) is an online database that can be set up relatively easily, allowing you to save your data to a server in the cloud! Teaching you how to use it is beyond the scope of this tutorial, but it is almost definitely within your skill set. If you’re interested, check out this video to see what it’s all about.


