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

Book.prototype.info = function() {
	return `${title}, written by ${author}, ${pages} pages, has been read? ${read}`;
};

let storedLibrary = JSON.stringify(sample, null);
localStorage.setItem(`${saveAs}`, storedLibrary);

//Display books on screen
const table = document.querySelector("tbody");
function generateTable(table, data) {
	let rowCount = data.length;
	for (let i = 0; i < rowCount; i++) {
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
