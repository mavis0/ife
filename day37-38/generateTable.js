import getSelectedData from "./getSelectedData.js"

function generateTable (node) {
    node.innerHTML = '';
    // let data = localStorage.getItem('saleData') === null ? getSelectedData() : JSON.parse(localStorage.getItem('saleData'));
    let data = getSelectedData();
    let table = document.createElement('table');
    table.border = '1';
    table.cellSpacing = '0';
    let headerTr = document.createElement('tr');
    table.append(headerTr);
    let map = [['product', '商品'], ['region', '地区']]
    let regionNum = Array.from(document.getElementsByName('region')).filter(s => s.checked).length;
    let productNum = Array.from(document.getElementsByName('product')).filter(s => s.checked).length;
    if (regionNum == 1 && productNum > 1) {
        map.reverse();
    }
    for (let m of map) {
        let headerTh = document.createElement('th');
        headerTh.innerHTML = m[1];
        headerTr.append(headerTh);
    }
    for (let i = 1; i < 13 ; i++) {
        let headerTh = document.createElement('th');
        headerTh.innerHTML = i + '月';
        headerTr.append(headerTh);
    }
    node.append(table);
    let rowNum = Array.from(document.getElementsByName("product")).filter(s => s.checked).length;
    for (let i = 0; i < data.length; i++) {
        let item = data[i];
        let tr = document.createElement('tr');

        if (i % rowNum == 0) {
            let td = document.createElement('td');
            td.rowSpan = rowNum;
            td.innerHTML = item[map[0][0]];
            tr.append(td);
        }

        let td = document.createElement('td');
        td.innerHTML = item[map[1][0]];
        tr.append(td);
        for (let i = 0; i < 12; i++) {
            let td = document.createElement('td');
            // td.innerHTML = item.sale[i];
            tr.append(td);
            let input = document.createElement('input');
            input.value = item.sale[i];
            input.onblur = x => {
                console.log(input.value);
                if (isNaN(Number(input.value))) {
                    alert("please input a number")
                }
            };
            td.append(input);
        }
        table.append(tr);
    }
}
export default generateTable;