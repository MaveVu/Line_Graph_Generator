var canvas = document.getElementById('myCanvas');
var c = canvas.getContext('2d'); 

c.beginPath();
c.strokeStyle = "black";
c.width = 5;
c.moveTo(50,50);
c.lineTo(40,60);
c.moveTo(50,50);
c.lineTo(60,60);
c.moveTo(50,50);
c.lineTo(50,550);
c.lineTo(950,550);
c.lineTo(940,540);
c.moveTo(950,550);
c.lineTo(940,560);
c.stroke();

c.beginPath();
c.font = "20px Comic Sans MS";
c.fillText("X", 950, 570);
c.fillText("Y", 30, 50);
c.endPath();


function draw(){
    begin_x = document.getElementById("begin_x").value;
    var begin_y = document.getElementById("begin_y").value;
    var end_x = document.getElementById("end_x").value;
    var end_y = document.getElementById("end_y").value;
    var x1 = parseInt(begin_x) + 50;
    var y1 = 550 - parseInt(begin_y);
    var x2 = parseInt(end_x) + 50;
    var y2 = 550 - parseInt(end_y);
    if (parseInt(begin_x) < parseInt(end_x)){
        c.beginPath();
        c.strokeStyle = "black";
        c.width = 7;
        c.moveTo(x1,y1);
        c.lineTo(x2,y2);
        c.stroke();
    }
    else{
        document.getElementById("warning").innerHTML = "There is something wrong, check input again";
    }
    
}


