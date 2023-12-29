// Library Array
// Default books
const dune = new Book('Frank Herbert', "Dune", 352, true);
const lotr = new Book('Tolkien', 'Lord of the rings', 450, false);


let myLibrary = [dune, lotr];


function Book(Author, Title, Pages, Read) {
    this.Author = Author;
    this.Title = Title;
    this.Pages = Pages;
    this.Read = Read;
}
Book.prototype.printBookInfo = function() {
    console.log(`${this.Title} by ${this.Author} has ${this.Pages} pages and ${this.Read}`);
}



// let addBookButton = document.querySelector('.add-book');
// addBookButton.addEventListener('click', addBookToLibrary);


// Creates new book and adds it to myLibrary array
// let bookToAdd;
// function addBookToLibrary() {
//     let bookToAdd = new Book(prompt('Author?'), prompt('Title?'), parseInt(prompt('Pages?')), prompt('Read? True or False'));
//     // parse true/false string
//     switch(bookToAdd.read) {
//         case 'True' || 'true': // lowercase not working
//             bookToAdd.read = 'has been read!';
//             break;
//         case 'False' || 'false':
//             bookToAdd.read = 'has not been read!';
//             break;
//     }
//     myLibrary.push(bookToAdd);
//     console.log(bookToAdd.printBookInfo());
// }

// Modal function to add Book
let bookToAdd;
function addBookToLibrary() {
    console.log(bookToAdd);
    let author = document.querySelector('.author').value;
    let title = document.querySelector('.name').value;
    let pages = document.querySelector('.pages').value;
    let read = document.querySelector('.read').value;
    bookToAdd = new Book(author, title, pages, read);
    myLibrary.push(bookToAdd);
}

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

//





















// Function to loop through array and display books
function displayBooks() {
    for (let i = 0; i < myLibrary.length; i++) {
        console.log(myLibrary[i]);
    }
    // Table to display books on webpage
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

    function generateTable(table, data) {
        for (let element of data) {
            let row = table.insertRow();
            for (key in element) {
                if (typeof element[key] !== 'function') {
                    let cell = row.insertCell();
                    let text = document.createTextNode(element[key]);
                    cell.appendChild(text);
                }
            }
        }
    }


    let table = document.querySelector('table');
    let data = Object.keys(myLibrary[0]);
    generateTableHead(table, data);
    generateTable(table, myLibrary);
    
    
}





let displayBooksBtn = document.querySelector('.display-books');
displayBooksBtn.addEventListener('click', displayBooks);
