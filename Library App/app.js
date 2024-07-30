// Array of Books
const myLibrary = [];
var bookIDCounter = 1;
let libContainer        = document.querySelector(".container");
const submitButton      = document.querySelector("#submitButton");
const modalCloseButton  = document.querySelector("#closeButton");
const addBookModal      = document.querySelector("#addBookModal");
const openModalButton   = document.querySelector("#openModalButton");

openModalButton.onclick = function () {
  addBookModal.showModal();
}

modalCloseButton. onclick = function () {
  addBookModal.close();
}

submitButton.onclick = function (e) {
  e.preventDefault();
  let title = document.querySelector("#titleInput");
  let description = document.querySelector("#descInput");
  let isbn = document.querySelector("#isbnInput");
  let author = document.querySelector("#authorInput");
  let yearReleased = document.querySelector("#yearInput");

  let newBook = new Book(
    title.value,
    author.value,
    isbn.value,
    description.value,
    yearReleased.value
  );
  console.log(newBook);
  addBookToLibrary(newBook);

  title.value = "";
  author.value = "";
  isbn.value = "";
  description.value = "";
  yearReleased.value = "";

};

function Book(title, author, ISBN, description, yearReleased) {
  this.title = title;
  this.author = author;
  this.ISBN = ISBN;
  this.description = description;
  this.yearReleased = yearReleased;
  this.read = false;
}

Book.prototype.setReadStatus = function (boolVal) {
  this.read = boolVal;
}

function addBookToLibrary(book) {
  myLibrary.push(book);
  libContainer.append(createBookHTML(book));
}

// Populate the library with sample books
for (let index = 0; index < 10; index++) {
  myLibrary.push(
    new Book(
      "Arif",
      "Adam",
      1234 + index,
      "Test Description Test DescriptionTest DescriptionTest DescriptionTest DescriptionTest DescriptionTest DescriptionTest DescriptionTest DescriptionTest DescriptionTest DescriptionTest DescriptionTest DescriptionTest DescriptionTest DescriptionTest DescriptionTest DescriptionTest DescriptionTest DescriptionTest DescriptionTest DescriptionTest DescriptionTest DescriptionTest DescriptionTest DescriptionTest Description",
      2021
    )
  );
}

for (const book of myLibrary) {
  const bookHTMLElement = createBookHTML(book);
  libContainer.append(bookHTMLElement);
}

function createBookHTML(book) {
  const bookCard = createHTMLElement("div", ["book-card"]);

  const bookTitle = createHTMLElement("div", ["title"]);
  bookTitle.textContent = `${book.title}`;

  const bookAuthor = createHTMLElement("div", ["author"]);
  bookAuthor.textContent = `${book.author},`;

  const bookISBN = createHTMLElement("div", ["isbn"]);
  bookISBN.textContent = `${book.ISBN}`;

  const bookYear = createHTMLElement("div", ["year"]);
  bookYear.textContent = `${book.yearReleased}`;

  const bookDesc = createHTMLElement("div", ["description"]);
  bookDesc.textContent = `${book.description}`;

  const authorYear = createHTMLElement("div", ["author-year"]);
  const buttonControl = createHTMLElement("div",["control-button"]);

  const remButton = createHTMLElement("button", []);
  remButton.textContent = "Remove";
  
  const readButton = createHTMLElement("button", []);
  readButton.textContent = "Read";

  buttonControl.append(remButton);
  buttonControl.append(readButton);

  remButton.onclick = function () {
    bookCard.remove();
  };
  readButton.onclick = function () {
    
    if(bookCard.classList.contains("read")){
      bookCard.classList.remove("read");
      book.setReadStatus(false)
    }
    else {
      bookCard.classList.add("read");
      book.setReadStatus(true)
    }

  }
  authorYear.append(bookAuthor);
  authorYear.append(bookYear);

  // Append elements to the book card
  bookCard.append(bookTitle);
  bookCard.append(bookDesc);
  bookCard.append(bookISBN);
  bookCard.append(authorYear);
  bookCard.append(buttonControl);
  return bookCard;
}

function createHTMLElement(type, classArr) {
  const res = document.createElement(type);
  classArr.forEach((className) => res.classList.add(className));

  return res;
}
