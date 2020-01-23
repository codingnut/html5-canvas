var canvas = document.querySelector('canvas');


canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

var c = canvas.getContext('2d');

//reactangle
/*
c.fillStyle = "rgba(255, 0, 0, 0.5)";
c.fillRect(100, 100, 50, 500); 
*/

//line
/*
c.beginPath();
c.moveTo(50,50);   
c.lineTo(100, 50);
c.lineTo(100, 100);
c.strokeStyle = "#020123";
c.stroke(); 
*/

//arc - circle
/*
c.beginPath();
c.arc(300, 300, 30, 0, Math.PI *2, false);
c.strokeStyle = "#020123";
c.stroke(); 
*/

/* create multiple circles
for(var i=0; i<10; i++){
     let  x = Math.random() * window.innerWidth; 
     let  y = Math.random() * window.innerHeight; 
    c.beginPath();
    c.arc(x, y, 30, 0, Math.PI *2, false);
    c.strokeStyle = "#020123";
    c.stroke();
}
*/

function clearCanvas(){
    c.clearRect(0,0, innerWidth, innerHeight);
}
function randomBubles(){
 
    let  x = Math.random() * window.innerWidth; 
    let  y = Math.random() * window.innerHeight; 
    c.beginPath();
    c.arc(x, y, 10, 0, Math.PI *2, false);
    c.fill();
    c.fillStyle = "blue";
    c.strokeStyle = "blue"; 
    c.stroke(); 
    requestAnimationFrame(randomBubles);
    
}
// animate
var x = 50;
var y = 50;
var dx = 1;
var dy = 1;
function bouncingBall(){
    //clear canvas
    clearCanvas();
    c.beginPath();
    c.arc(x, y, 50, 0, Math.PI *2, false);
    c.fill();
    c.fillStyle = "blue";
    c.strokeStyle = "blue";  
    c.stroke();
    if(y >= window.innerHeight-50){
        dy = -20;
    }
    else if(y <= 50){
        dy = 10;
    }
  
    if(x >= window.innerWidth){
        dx = -1;
    }else if(x <= 50){
        dx = 1;
    }
    x += dx;
    y += dy; 
    
    requestAnimationFrame(bouncingBall);
  
}

