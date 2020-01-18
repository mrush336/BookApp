
let table = document.querySelector("table");
generateTableHead(table);

function generateTableHead(table, data) {
  let thead = table.createTHead();
  let row = thead.insertRow();
  for (let key of data) {
    let th = document.createElement("th");
    let text = document.createTextNode(key);
    th.appendChild(text);
    row.appendChild(th);
  }
}
let table = document.querySelector("table");
let data = Object.keys(mountains[0]);
generateTableHead(table, data);


Book.prototype.info = function(){
  return (`${title}, written by ${author}, ${pages} pages, has been read? ${read}`);
}

 let storedLibrary = JSON.stringify(sample, null,);
  localStorage.setItem(`${saveAs}`, storedLibrary);

  