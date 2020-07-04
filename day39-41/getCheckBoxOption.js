import sourceData from "./ife31data.js"

function getCheckboxOption (item, node) {
    let regions = sourceData.map(x => x[item]);
    for (let region of new Set(regions)) {
        let option = document.createElement('input');
        option.value = region;
        option.name = item;
        let label = document.createElement('label');
        label.innerHTML = region;
        option.type = 'checkbox';
        node.append(option);
        node.append(label);
    }
    let option = document.createElement('input');
    option.name = item + '-all';
    let label = document.createElement('label');
    label.innerHTML = '全选';
    option.type = 'checkbox';
    node.append(option);
    node.append(label);
}

export default getCheckboxOption;