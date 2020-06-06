function drawHistogram(data) {
    drawAxis(30, 250, 30, 451);
    drawAxis(30, 450, 600, 450);
    let longest = Math.max(...data);
    let scale = longest / 200;
    data.forEach((x, i) => {
        drawOne(60 + i * 40, 450 - x / scale, 10, x / scale);
    })
}

function drawAxis(x1, y1, x2, y2) {
    var svg = document.getElementById('svg');
    var line = document.createElementNS("http://www.w3.org/2000/svg", "line");
    line.setAttribute("x1", x1);
    line.setAttribute("y1", y1);
    line.setAttribute("x2", x2);
    line.setAttribute("y2", y2);
    line.setAttribute("style", "stroke: black; stroke-width: 2;")
    svg.appendChild(line);
}

function drawOne(x, y , w, h) {
    var svg = document.getElementById('svg');
    var rect = document.createElementNS("http://www.w3.org/2000/svg", "rect");
    rect.setAttribute("x", x);
    rect.setAttribute("y", y);
    rect.setAttribute("width", w);
    rect.setAttribute("height", h);
    rect.setAttribute("style","stroke: black; stroke-width: 2;");
    svg.appendChild(rect);
}

export default drawHistogram;