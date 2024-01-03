// Library Array
// Default books
const dune = new Book('Frank Herbert', "Dune", 352, true);
const lotr = new Book('Tolkien', 'Lord of the rings', 450, false);
const hPotter = new Book('Harry Potter', 'J.K. Rowling', 403, true);
let myLibrary = [dune, lotr, hPotter];

function Book(Author, Title, Pages, Read) {
    this.Author = Author;
    this.Title = Title;
    this.Pages = Pages;
    this.Read = Read;
}
Book.prototype.printBookInfo = function() {
    console.log(`${this.Title} by ${this.Author} has ${this.Pages} pages and ${this.Read}`);
}
// change books read status
Book.prototype.readStatus = function() {
    if(this.Read === false) {
        this.Read = true;
    }
    else if (this.Read === true) {
        this.Read = false;
    }
    displayBooks();
}



// Modal function to add Book
let bookToAdd;
function addBookToLibrary() {
    console.log(bookToAdd);
    let author = document.querySelector('.author').value;
    let title = document.querySelector('.name').value;
    let pages = document.querySelector('.pages').value;
    let read = document.querySelector('.read').checked;
    bookToAdd = new Book(author, title, pages, read);
    myLibrary.push(bookToAdd);
    displayBooks();
}
//Reset book function
function resetBookButton() {
    if (bookToAdd !== undefined) {
        bookToAdd = undefined;
    }
    

}

const showButton = document.querySelector('#showDialog');
const outputBox = document.querySelector('output');
const confirmBtn = favDialog.querySelector('#confirmBtn');
confirmBtn.addEventListener('click', () => {
    addBookToLibrary()
    resetBookButton();
    favDialog.close();
});

// Upon clicking confirm button try to run function add book to library calling variables assigned
// "Show the dialog" button opens the <dialog> modally
showButton.addEventListener('click', () => {
    favDialog.showModal();
});

let button;
let tdReadAll;
function displayBooks() {
    // Clear existing table content
    let table = document.querySelector('table');
    table.innerHTML = '';

    // Function to generate table head
    function generateTableHead(table, data) {

        let thead = table.createTHead();
        let row = thead.insertRow();
        for (let key of data) {
            let th = document.createElement('th');
            let text = document.createTextNode(key);
            th.appendChild(text);
            row.appendChild(th);
        }

    }

    // Function to generate table rows
    function generateTable(table, data) {
        for (let element of data) {
            let row = table.insertRow();

            let button = document.createElement('button');
            button.innerText = 'Delete';
            button.classList.add('btn');
            let readButton = document.createElement('button');
            readButton.innerText = 'Toggle read';
            readButton.classList.add('btn');
            for (let key in element) {
                if (typeof element[key] !== 'function') {
                    let cell = row.insertCell();
                    let text = document.createTextNode(element[key]);
                    cell.appendChild(text);
                }
            }

            row.appendChild(button);
            row.appendChild(readButton);
            button.addEventListener('click', removeFromLibrary);
            // readButton.addEventListener('click', readStatus);
        }
    }

    let data = Object.keys(myLibrary[0]);
    generateTableHead(table, data);
    generateTable(table, myLibrary);
}





let displayBooksBtn = document.querySelector('.display-books');
displayBooksBtn.addEventListener('click', displayBooks);

// function to remove books from table
// button.addEventListener('click', () => {
    // const books = myLibrary
// })
const books = myLibrary.children;
function removeFromLibrary(event) {
    const button = event.target;
    const row = button.parentNode.parentNode;
    const indexToRemove = row.rowIndex - 1;

    myLibrary.splice(indexToRemove, 1);

    row.remove();
    displayBooks();
}






