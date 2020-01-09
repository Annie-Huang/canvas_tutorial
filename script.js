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

// Paths
ctx.beginPath();
ctx.moveTo(50, 50);
// draw a straight line
ctx.lineTo(150, 50);
// ctx.stroke();
ctx.lineTo(100, 200);
// ctx.lineTo(50, 50);
ctx.closePath(); // This will also go to the original position. Same as above.
ctx.fillStyle = 'coral';
// ctx.stroke();
ctx.fill(); // fill the whole area.















