class Book {
  constructor(title, author) {
    this.title = title;
    this.author = author;
  }
}

class Library {
  constructor() {
    this.books = [];
  }

  addBook(book) {
    this.books.push(book);
  }

  getBooks() {
    return this.books;
  }
}

const book1 = new Book("1984", "George Orwell");
const book2 = new Book("To Kill a Mockingbird", "Harper Lee");
const library = new Library();

library.addBook(book1);
library.addBook(book2);

console.log(library.getBooks());
console.log(book1);
