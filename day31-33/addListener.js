import generateTable from "./generateTable.js"

function addListener(item, node, t) {
    node.addEventListener('click', (e) => {
        if (e.target.name == undefined) return;
        let regionAll = document.getElementsByName(item + '-all')[0];
        let regions = document.getElementsByName(item);
        let checkNum = Array.from(regions).filter(s => s.checked).length;
        if (e.target.name !== item + '-all') {
            if (!e.target.checked && checkNum == 0) e.target.checked = true;
            // if (!e.target.checked && checkNum == 0) e.preventDefault();
            if (checkNum == 3) regionAll.checked = true;
            if (!e.target.checked && checkNum == 2) regionAll.checked = false;
        } else {
            regions.forEach(x => x.checked = true);
        }
        generateTable(t);
    })
}

export default addListener;