var canvas = document.getElementById('myCanvas_1');
var d = canvas.getContext('2d'); 

d.beginPath();
d.strokeStyle = "black";
d.width = 7;
d.moveTo(0, 50);
d.lineTo(400, 50);
d.stroke();

d.beginPath();
d.font = "30px Comic Sans MS";
d.fillText("How to use", 100, 30);

d.beginPath();
d.font = "20px Comic Sans MS";
d.fillText("(max_x - min_x)/dis < 15", 10, 100);
d.fillText("(max_y - min_y)/dis < 15", 10, 150);
d.fillText("min_x <= begin_x, end_x <= max_x ", 10, 200);
d.fillText("min_y <= begin_y, end_y <= max_y", 10, 250);