function drawLineChart (data, numOfLines) {
    var c = document.getElementById("canvas");
    var ctx = c.getContext("2d");
    c.height = c.height;
    ctx.beginPath();
    ctx.moveTo(30, 30);
    ctx.lineTo(30, 200);
    ctx.lineTo(600, 200);
    ctx.stroke();

    if (numOfLines == 1) {
        let longest = Math.max(...data);
        let scale = longest / 180;
        data.forEach((x, i) => {
            drawCircle(60 + i * 40, 200 - x / scale, ctx, i /scale);
        });
    } else {
        let longest = Math.max(...data.map(x => Math.max(...x)))
        let scale = longest / 180;
        data.forEach(y => {
            y.forEach((x, i) => {
                drawCircle(60 + i * 40, 200 - x / scale, ctx, i /scale);
        })
        })
    }

}

function drawCircle (x, y, ctx, i) {
    if (i != 0) {
        ctx.lineTo(x, y);
        ctx.stroke();
    } 
    ctx.beginPath();
    ctx.arc(x, y, 3, 0, 2 * Math.PI)
    ctx.fill()
    ctx.lineTo(x, y);
    ctx.stroke();
}

export default drawLineChart;