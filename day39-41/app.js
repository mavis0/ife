import getCheckboxOption from "./getCheckBoxOption.js"
import generateTable from "./generateTable.js"
import addListener from "./addListener.js"

function index() {
    let tableWapper= document.getElementById('table-wrapper');
    let regionCheckbox = document.getElementById('region-checkbox');
    let productCheckbox = document.getElementById('product-checkbox');
    getCheckboxOption('region', regionCheckbox);
    getCheckboxOption('product', productCheckbox);
    addListener('region', regionCheckbox, tableWapper);
    addListener('product', productCheckbox, tableWapper);
    generateTable(tableWapper);
}

export default index;