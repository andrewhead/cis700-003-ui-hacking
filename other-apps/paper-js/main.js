// Issue with constructing PointerEvent from paper-full.js
var myPath;

function onMouseDown(event) {
    myPath = new Path();
    myPath.strokeColor = 'black';
}

function onMouseDrag(event) {
    myPath.add(event.point);
}

// Also, clear the canvas...
// Also, add different types of shapes.
// Is there a way to support "undo"?
// Then, use Rete.js...

// function onMouseUp(event) {
//     var myCircle = new
// }

// var path = new Path();
// path.strokeColor = "black";
// var start = new Point(100, 100);
// path.moveTo(start);
// path.lineTo(start + [ 100, -50 ]);