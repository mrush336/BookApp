function generateTableHead(table) {
  let thead = table.createTHead();
}

function generateTableHead(table) {
  let thead = table.createTHead();
}
let table = document.querySelector("table");
generateTableHead(table);

let mountains = [
  { name: "Monte Falco", height: 1658, place: "Parco Foreste Casentinesi" },
    //
];

function generateTableHead(table) {
  let thead = table.createTHead();
  let row = thead.insertRow();
}

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