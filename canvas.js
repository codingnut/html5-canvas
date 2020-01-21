console.log("Hello");
var canvas = document.querySelector('canvas');


canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

var c = canvas.getContext('2d');

//reactangle
//c.fillStyle = "rgba(255, 0, 0, 0.5)";
//c.fillRect(100, 100, 50, 500); // draw reactable

//line
c.beginPath();
c.moveTo(50,50);   
c.lineTo(100, 50);
c.lineTo(100, 100);
c.strokeStyle = "#020123";
//c.stroke(); // draw line

//arc - circle
c.beginPath();
c.arc(300, 300, 30, 0, Math.PI *2, false);
//c.strokeStyle = "#020123";
//c.stroke(); // draw circle

// for(var i=0; i<10; i++){
//      let  x = Math.random() * window.innerWidth; 
//      let  y = Math.random() * window.innerHeight; 
//     c.beginPath();
//     c.arc(x, y, 30, 0, Math.PI *2, false);
//     c.strokeStyle = "#020123";
//     c.stroke();
// }

// animate
function animateCircle(){
    requestAnimationFrame(animateCircle);
    let  x = Math.random() * window.innerWidth; 
    let  y = Math.random() * window.innerHeight; 
    //clear canvas
    //c.clearRect(0,0, innerWidth, innerHeight);
    c.beginPath();
    c.arc(x, y, 10, 0, Math.PI *2, false);
    c.fill();
    c.fillStyle = "blue";
    c.strokeStyle = "red";
    
    
    c.stroke();


}
animateCircle();
