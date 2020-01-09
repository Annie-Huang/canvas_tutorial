const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
//
// // canvas.width = window.innerWidth;
// // canvas.width = 200;
//
// // fillRect()
// // Create rectangle
// ctx.fillStyle = 'red';
// ctx.fillRect(20, 20, 150, 100);
// ctx.fillStyle = 'blue';
// ctx.fillRect(200, 20, 150, 100);
//
// // strokeRect()
// // Create outline of rectangle.
// ctx.lineWidth = 5;
// ctx.strokeStyle = 'green';
// ctx.strokeRect(100, 200, 150, 100);
//
// // clearRect()
// // usually  use to clean the whole canvas
// ctx.clearRect(25, 25, 140, 90);
//
// // fillText()
// ctx.font = '30px Arial';
// // if you don't have this, it will use the last fillStyle which is blue
// ctx.fillStyle = 'purple';
// ctx.fillText('Hello World', 400, 50);
//
// // strokeText()
// // strokeText will take currently lineWidth and strokeStyle, you need to override it if you want changes.
// ctx.lineWidth = 1;
// ctx.strokeStyle = 'orange';
// ctx.strokeText('Hello World1', 400, 100);

// ====================================================================================

// // Paths
// // Triangle
// ctx.beginPath();
// ctx.moveTo(50, 50);
// // draw a straight line
// ctx.lineTo(150, 50);
// // ctx.stroke();
// ctx.lineTo(100, 200);
// // ctx.lineTo(50, 50);
// ctx.closePath(); // This will also go to the original position. Same as above.
// ctx.fillStyle = 'coral';
// // ctx.stroke();
// ctx.fill(); // fill the whole area.
//
//
// ctx.beginPath();
// ctx.moveTo(200, 50);
// ctx.lineTo(150, 200);
// ctx.lineTo(250, 200);
// ctx.closePath();
// ctx.stroke();
//
//
// // Rectangle
// ctx.beginPath();
// // rect + fill = fillRect
// ctx.rect(300, 50, 150, 100);
// ctx.fillStyle = 'teal';
// ctx.fill();

// ====================================================================================

// Arc (circles)
ctx.beginPath();

const centerX = canvas.width / 2;
const centerY = canvas.height / 2;

// Draw head
// ctx.arc(100, 100, 40, 0, Math.PI*2);
ctx.arc(centerX, centerY, 200, 0, Math.PI*2);

// Move to mouth
ctx.moveTo(centerX + 100, centerY); // if you comment this out, you will see the path.

// Draw mouth
// radius = 100 is half of the outer circle which is 200. False meaning it's drawing clockwise.
ctx.arc(centerX, centerY, 100, 0, Math.PI, false);

// Move left eye
ctx.moveTo(centerX-60, centerY-80); // if you comment this out, you will see the path.

// Draw left eye
ctx.arc(centerX-80, centerY-80, 20, 0, Math.PI*2)

// Move right eye
ctx.moveTo(centerX+100, centerY-80); // if you comment this out, you will see the path.

// Draw right eye
ctx.arc(centerX+80, centerY-80, 20, 0, Math.PI*2)

ctx.stroke();




























