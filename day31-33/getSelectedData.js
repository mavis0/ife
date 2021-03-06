import sourceData from "./ife31data.js"

function getSelectedData () {
    let regionSet = new Set();
    let productSet = new Set();
    let regionSelected = document.getElementsByName("region");
    let productSelected = document.getElementsByName("product");
    for (let region of regionSelected) {
        if (region.checked) regionSet.add(region.value);
    }
    for (let product of productSelected) {
        if (product.checked) productSet.add(product.value);
    }
    return sourceData.filter(s => regionSet.has(s.region) && productSet.has(s.product));
}
export default getSelectedData;