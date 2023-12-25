// Library Array
const myLibrary = [];


function Book(author, title, pages, read) {
    this.author = author;
    this.title = title;
    this.pages = pages;
    this.read = read;
}
Book.prototype.printBookInfo = function() {
    console.log(`${this.title} by ${this.author} has ${this.pages} pages and ${this.read}`);
}
// const dune = new Book('Frank Herbert', "Dune", 352, true);
// const lotr = new Book('Tolkien', 'Lord of the rings', 450, false);


let addBookButton = document.querySelector('.add-book');
addBookButton.addEventListener('click', addBookToLibrary);


// Creates new book and adds it to myLibrary array
let bookToAdd;
function addBookToLibrary() {
    let bookToAdd = new Book(prompt('Author?'), prompt('Title?'), parseInt(prompt('Pages?')), prompt('Read? True or False'));
    // parse true/false string
    switch(bookToAdd.read) {
        case 'True' || 'true': // lowercase not working
            bookToAdd.read = 'has been read!';
            break;
        case 'False' || 'false':
            bookToAdd.read = 'has not been read!';
            break;
    }
    myLibrary.push(bookToAdd);
    console.log(bookToAdd.printBookInfo());
}

// Function to loop through array and display books
function displayBooks() {
    for (let i = 0; i < myLibrary.length; i++) {
        console.log(myLibrary[i]);
    }
}
