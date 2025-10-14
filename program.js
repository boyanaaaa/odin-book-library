
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

const mainContainer = document.querySelector(".mainContainer");

addBookToLibrary("The Hobbit", "J.R.R. Tolkien", 295, false);
addBookToLibrary("Harry Potter", "J.K. Rowling", 500, true);
displayBooks();

console.log(myLibrary);
console.log(myLibrary[0].info());




function displayBooks(){
    mainContainer.innerHTML = "";

    for ( let i = 0; i < myLibrary.length; i++){
        const book = myLibrary[i];

        const divBook = document.createElement("div");

        const bookTitle = document.createElement("h2");
        bookTitle.innerText = book.title;
        divBook.appendChild(bookTitle);
        mainContainer.appendChild(divBook);

        const bookAuthor = document.createElement("h3");
        bookAuthor.innerText = book.author;
        divBook.appendChild(bookAuthor);

        const bookPages = document.createElement("p");
        bookPages.classList.add("bookPagesp");
        bookPages.innerText = book.pagesNumber + " pages";
        divBook.appendChild(bookPages);

        const readStatus = document.createElement("p");
        readStatus.classList.add("readStatusp");
        readStatus.innerText = book.hasRead ? "Read already" : "Not read yet";
        divBook.appendChild(readStatus);


    }
}




const submitBtn = document.querySelector(".submitBtn");
submitBtn.addEventListener("click", (e) =>{
    e.preventDefault();

    const titleInput = document.querySelector(".titleiInput");
    const title = titleInput.value;
    const authorInput = document.querySelector(".authorInput");
    const author= authorInput.value;
    const pagesInput = document.querySelector(".pagesInput");
    const pages = pagesInput.value;
    const hasReadInput = document.querySelector(".hasReadInput");
    const hasRead = hasReadInput.checked;

    addBookToLibrary(title,author,pages,hasRead);
    displayBooks();

    titleInput.value = "";
    authorInput.value = "";
    pagesInput.value = "";
    hasReadInput.checked = false;
})