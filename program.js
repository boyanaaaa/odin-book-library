function Book(title, author, pagesNumber,hasRead ){
    this.title = title;
    this.author = author;
    this.pagesNumber = pagesNumber;
    this.hasRead = hasRead;

    
    this.info = function() {
    let readStatus = this.hasRead ? "read already" : "not read yet";
    return `${this.title} by ${this.author}, ${this.pagesNumber} pages, ${readStatus}`;
  };

}

const theHobbit = new Book("The hobbit", "J.R.R", 295, false);
console.log(theHobbit.info());

