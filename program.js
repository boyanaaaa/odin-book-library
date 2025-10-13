
const myLibrary = [];


function Book(title, author, pagesNumber,hasRead){
    this.id = crypto.randomUUID();
    this.title = title;
    this.author = author;
    this.pagesNumber = pagesNumber;
    this.hasRead = hasRead;

    
    this.info = function() {
    let readStatus = this.hasRead ? "read already" : "not read yet";
    return `${this.title} by ${this.author}, ${this.pagesNumber} pages, ${readStatus}`;
  };

}

function addBookToLibrary(title, author, pagesNumber,hasRead) {
  // take params, create a book then store it in the array
    const newBook = new Book(title, author, pagesNumber,hasRead);
   myLibrary.push(newBook);
}



addBookToLibrary("The Hobbit", "J.R.R. Tolkien", 295, false);
addBookToLibrary("Harry Potter", "J.K. Rowling", 500, true);

console.log(myLibrary);
console.log(myLibrary[0].info());


const mainContainer = document.querySelector(".mainContainer");

function displayBooks(){
    for ( let i = 0; i < myLibrary.length; i++){
        const book = myLibrary[i];
        

        const divBook = document.createElement("div");
        const bookTitle = document.createElement("h3");
        bookTitle.innerText = book.title;
        divBook.appendChild(bookTitle);
        mainContainer.appendChild(divBook);


    }
}

displayBooks();