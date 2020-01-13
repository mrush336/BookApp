//Book constructor function
function Book(title, author, pages, read = Boolean){
  
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
  this.info = function (){
    return (`${title}, written by ${author}, ${pages} pages, has been read? ${read}`);
    
  }
  
}
//Get input from user
let myLibrary = [];

function addBook(){
  const saveAs = document.getElementById('saveAs').value;
  const formTitle = document.getElementById('title').value;
  const formAuthor = document.getElementById('author').value;
  const formPages = document.getElementById('pages').value;
  const formRead = document.getElementById('read').checked;
 
  let sample = new Book(formTitle, formAuthor, formPages, formRead);
  myLibrary.push(sample);
  //console.log(myLibrary);
  let storedLibrary = JSON.stringify(sample, null, 1);
  localStorage.setItem(`${saveAs}`, storedLibrary);
  console.log(localStorage);
}

//localStorage.clear();
function getBook(){
  
}