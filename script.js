// Instansiate the library array
const myLibrary = [];

//Book constructor function
function Book(id, title, author, pages, read = Boolean) {
	this.id = id;
	this.title = title;
	this.author = author;
	this.pages = pages;
	this.read = read;
	this.info = function() {
		return ` Book Title: "${title}", Author: "${author}", Pages: ${pages} `;
	};
}

//Add a book to the library
function addBook() {
	let savedName = document.getElementById("saveAs").value;
	let formTitle = document.getElementById("title").value;
	let formAuthor = document.getElementById("author").value;
	let formPages = document.getElementById("pages").value;
	let formRead = document.getElementById("read").checked;

	savedName = new Book(savedName, formTitle, formAuthor, formPages, formRead);
	myLibrary.push(savedName);
	console.log(myLibrary);
	//console.log(savedName);
	displayBook(savedName);
}

// Create and add the elements on the page
function displayBook(book) {
	let card = document.createElement("div");
	card.setAttribute("id", `${book.id}`);
	let cardText = document.createElement("h2");
	let cardContent = document.createTextNode(book.info());
	card.appendChild(cardText).appendChild(cardContent);

	let bookBtn = document.createElement("button");
	let buttonText = document.createTextNode("DELETE");
	bookBtn.setAttribute("onclick", "deleteBook(this)");
	bookBtn.appendChild(buttonText);

	let buttonContainer = document.createElement("div");
	buttonContainer.appendChild(bookBtn);

	let container = document.getElementById("output");
	container.appendChild(card).appendChild(buttonContainer);
}

function deleteBook(button) {
	console.log("book deleted");
	document.getElementById(button.parentNode.parentNode.id).remove();
}
