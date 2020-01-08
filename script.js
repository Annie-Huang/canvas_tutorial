const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

// canvas.width = window.innerWidth;
// canvas.width = 200;

// fillRect()
// Create rectangle
ctx.fillStyle = 'red';
ctx.fillRect(20, 20, 150, 100);
ctx.fillStyle = 'blue';
ctx.fillRect(200, 20, 150, 100);

// strokeRect()
// Create outline of rectangle.
ctx.lineWidth = 5;
ctx.strokeStyle = 'green';
ctx.strokeRect(100, 200, 150, 100);


