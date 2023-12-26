// Library Array
// const dune = new Book('Frank Herbert', "Dune", 352, true);
// const lotr = new Book('Tolkien', 'Lord of the rings', 450, false);

let myLibrary = [];


function Book(author, title, pages, read) {
    this.author = author;
    this.title = title;
    this.pages = pages;
    this.read = read;
}
Book.prototype.printBookInfo = function() {
    console.log(`${this.title} by ${this.author} has ${this.pages} pages and ${this.read}`);
}



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
