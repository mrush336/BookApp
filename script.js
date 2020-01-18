//Book constructor function
function Book(title, author, pages, read = Boolean){
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
  
  }

//Add a book to the library
const myLibrary = [];
function addBook(){
  const formTitle = document.getElementById('title').value;
  const formAuthor = document.getElementById('author').value;
  const formPages = document.getElementById('pages').value;
  const formRead = document.getElementById('read').checked;
 
  let sample = new Book(formTitle, formAuthor, formPages, formRead);
  myLibrary.push(sample);
 
  generateTable(table, myLibrary);
}

//Display books on screen
const table = document.querySelector('tbody');
function generateTable(table, data) {
  let rowCount = data.length;
  for (let i=0; i < rowCount; i++){
  table.deleteRow(-1);
  }
  for (let element of data) {
    let row = table.insertRow();
    for (key in element) {
      let cell = row.insertCell();
      let text = document.createTextNode(element[key]);
      cell.appendChild(text);
    }
  }
}
