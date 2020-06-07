function drawHistogram(data) {
    var svg = document.getElementById('svg');
    svg.innerHTML = '';
    let x = 30, y = 200;
    drawAxis(x, 20, x, y+1, svg);
    drawAxis(x, y, 600, y, svg);
    let longest = Math.max(...data);
    let scale = longest / 180;
    data.forEach((x, i) => {
        drawOne(60 + i * 40, y - x / scale, 10, x / scale, svg);
    })
}

function drawAxis(x1, y1, x2, y2, svg) {
    var line = document.createElementNS("http://www.w3.org/2000/svg", "line");
    line.setAttribute("x1", x1);
    line.setAttribute("y1", y1);
    line.setAttribute("x2", x2);
    line.setAttribute("y2", y2);
    line.setAttribute("style", "stroke: black; stroke-width: 2;")
    svg.appendChild(line);
}

function drawOne(x, y , w, h, svg) {
    var rect = document.createElementNS("http://www.w3.org/2000/svg", "rect");
    rect.setAttribute("x", x);
    rect.setAttribute("y", y);
    rect.setAttribute("width", w);
    rect.setAttribute("height", h);
    rect.setAttribute("style","stroke: black; stroke-width: 2;");
    svg.appendChild(rect);
}

export default drawHistogram;