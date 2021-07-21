var canvas = document.getElementById('myCanvas');
var c = canvas.getContext('2d'); 

// draw coordinate axis
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

// draw X,Y
c.beginPath();
c.font = "20px Comic Sans MS";
c.fillText("X", 950, 570);
c.fillText("Y", 30, 50);
c.endPath();


// x-axis
function horizontal(){
    max_x = document.getElementById("max_x").value;
    min_x = document.getElementById("min_x").value;
    kc_x = document.getElementById("kc_x").value;
    var val = Math.floor((max_x - min_x)/kc_x);
    if (max_x > min_x && val <= 14){
        distance_x = Math.floor(750/val);
        for (let i = 0; i <= val; i++){
            c.beginPath();
            c.strokeStyle = "black";
            c.width = 7;
            c.moveTo(100 + (i * distance_x),550);
            c.lineTo(100 + (i * distance_x), 540);
            c.stroke();
            c.font = "15px Comic Sans MS";
            c.fillText(parseInt(min_x) + kc_x * i, 100 + (i * distance_x), 570);
        }
    }
}

// y-axis
function vertical(){
    max_y = document.getElementById("max_y").value;
    min_y = document.getElementById("min_y").value;
    kc_y = document.getElementById("kc").value;
    var val = Math.floor((max_y - min_y)/kc_y);
    distance_y = Math.floor(450/val);
    if (max_y > min_y && val <= 14){
        for (let i = 0; i <= val; i++){
            c.beginPath();
            c.strokeStyle = "black";
            c.width = 7;
            c.moveTo(50, 550 - (i * distance_y));
            c.lineTo(60, 550 - (i * distance_y));
            c.stroke();
            c.font = "10px Comic Sans MS";
            c.fillText(parseInt(min_y) + kc_y *i, 10,550 - (i * distance_y));
        }
    }
}

// draw line
function draw(){
    var begin_x = document.getElementById("begin_x").value;
    var begin_y = document.getElementById("begin_y").value;
    var end_x = document.getElementById("end_x").value;
    var end_y = document.getElementById("end_y").value;
    var x1 = 100 + (parseInt(begin_x) - parseInt(min_x))/kc_x * distance_x;
    var x2 = 100 + (parseInt(end_x) - parseInt(min_x))/kc_x * distance_x;
    var y1 = 550 - (parseInt(begin_y) - parseInt(min_y))/kc_y * distance_y;
    var y2 = 550 - (parseInt(end_y) - parseInt(min_y))/kc_y * distance_y;
    if (parseInt(begin_x) < parseInt(end_x)){
        c.beginPath();
        c.strokeStyle = "black";
        c.width = 7;
        c.moveTo(x1,y1);
        c.lineTo(x2,y2);
        c.stroke();
    }
}

//clear all lines
function clear_lines(){
    if (confirm("Are you sure that you want to clear it ?")){
        c.clearRect(60, 100, 900, 440);
    }
}

// clezr all
function clear_all(){
    if (confirm("Are you sure that you want to clear it ?")){
        c.clearRect(51, 100, 850, 449);
        c.clearRect(1, 90, 45, 470);
        c.clearRect(90, 551, 850, 45);
    }
}





