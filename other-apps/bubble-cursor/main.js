window.addEventListener("load", function() {
    var canvas = document.querySelector("#interaction-canvas");
    var canvasWidth = canvas.clientWidth;
    var canvasHeight = canvas.clientHeight;

    var numTargets = 10;
    var maxRadius = 30;
    var minRadius = 1;
    console.log("hullo");

    for (var i = 0; i < numTargets; i++) {
        var target = document.createElementNS("http://www.w3.org/2000/svg", "circle");
        target.setAttribute("cx", Math.random() * canvasHeight);
        target.setAttribute("cy", Math.random() * canvasWidth);
        target.setAttribute("fill", "green");
        target.setAttribute("r", minRadius + (Math.random() * (maxRadius - minRadius)));
        canvas.appendChild(target);
    }
});