function drawHistogram(data) {
    var svg = document.getElementById('svg');
    drawAxis(30, 250, 30, 451);
    drawAxis(30, 450, 600, 450);
    drawOne(100, 500, 100, 200);
    // drawOne(60, 350, 10, 100);
    for (let i = 0; i < data.length; i++) {
        drawOne(60 + i * 40, 450 - data[i], 10, data[i]);
    }
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