var values = [[180,161,102,31,31,46,175,199,106,89,137,200,199,126,159,114,184,198,10,183,30,150,47,187,35,126,131,159,173,178,174,69,87,157,75,190,181,122,65,19,63,67,56,115,65,162,159,144,77,36],[195,31,102,148,119,28,190,197,145,190,84,91,62,101,72,178,81,92,119,103,183,57,122,47,170,12,19,193,196,199,47,43,85,152,158,151,42,26,112,44,163,186,50,121,152,49,169,136,198,98], [26,98,102,120,105,153,47,167,188,41,121,109,16,199,83,196,188,101,122,121,193,59,77,27,43,55,70,186,24,118,185,63,122,68,119,0,16,44,181,135,102,43,134,91,180,152,94,169,110,96]];

const numberOfColumns = values.length;
let numberOfCells = 0;

for(let column = 0 ; column < values.length; column++) {
    for(let row = 0; row <  values[column].length; row++) {
        numberOfCells += 1;
    }
}

const numberOfRows = numberOfCells/numberOfColumns;

/* HTML Table Creation */

const body = document.getElementsByTagName("body")[0];
const table = document.createElement("table");
const tableBody = document.createElement("tbody");

let cellValue;
for(let row = 0; row < numberOfRows; row++){
    const oneRow = document.createElement("tr");

    for(let column = 0; column < numberOfColumns; column++) {
        cellValue = values[column][row];

        const cell = document.createElement("td");
        const cellText = document.createTextNode(cellValue);
        cell.appendChild(cellText);
        oneRow.appendChild(cell);
    }
    tableBody.appendChild(oneRow);
}

body.appendChild(table);
table.appendChild(tableBody);
table.id = "myTable";

/* Exercise: 1 */

const uniqueValues = [];
const myTable = document.getElementById("myTable");

for(let column = numberOfColumns - 1; column >= 0; column--) {
    for(let row = 0; row < numberOfRows; row++){

        const cell = myTable.rows[row].cells[column];
        const cellValue = cell.innerText;

        if((cellValue < 100) && !(uniqueValues.includes(cellValue))) {
           cell.setAttribute("style", "background-color: red");
            uniqueValues.push(cellValue);
        }
    }
}

/* Exercise: 2 */

const valuesCounter = {};

for(let column = 0; column < numberOfColumns; column++) {
    for(let row = 0; row < numberOfRows; row++) {

        const cell = myTable.rows[row].cells[column];
        const cellValue = cell.innerText;

        if((cellValue > 100) && !(cellValue in valuesCounter)) {
           valuesCounter[cellValue] = 1;
        }

        else if((cellValue > 100) && (cellValue in valuesCounter)) {
            valuesCounter[cellValue] += 1;
        }

        if(valuesCounter[cellValue] < 3) {
            cell.setAttribute("style", "background-color: green");
        }
    }
}