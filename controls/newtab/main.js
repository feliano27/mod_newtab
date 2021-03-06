document.addEventListener('DOMContentLoaded', startTimer);
 
function startTimer() {
  setInterval(displayTime, 500);
  displayTime();
} 
 
function displayTime() {
    var now = new Date();
    var h = now.getHours();
    var m = now.getMinutes();
    var s = now.getSeconds();
     
    var timeString = formatHour(h) + ":" + padZero(m) + ":" + padZero(s) + " " + getTimePeriod(h);
    document.querySelector("#current-time").innerHTML = timeString;
     
    // --- Analog clock ---//
    var canvas = document.querySelector("#clock");
    var context = canvas.getContext("2d");
     
    // You can change this to make the clock as big or small as you want.
    // Just remember to adjust the canvas size if necessary.
    var clockRadius = 100;
     
    // Make sure the clock is centered in the canvas
    var clockX = canvas.width / 2;
    var clockY = canvas.height / 2;
     
    // Make sure TAU is defined (it's not by default)
    Math.TAU = 2 * Math.PI;
     
    /*
    function draw0() {
      
      context.strokeStyle = 'grey';
      context.beginPath();
      context.moveTo(canvas.width/2, 0);
      context.lineTo(canvas.width/2, 10);
      context.stroke(); 
      
    }  
    
    function draw6() {
    
      context.strokeStyle = 'grey';
      context.beginPath();
      context.moveTo(canvas.width/2, canvas.height);
      context.lineTo(canvas.width/2, canvas.height-10);
      context.stroke();
        
    }
    
    function draw9() {
      
      context.strokeStyle = 'grey';
      context.beginPath();
      context.moveTo(0, canvas.height/2);
      context.lineTo(10, canvas.height/2);
      context.stroke();
    
    }
    
    function draw3() {
      
      context.strokeStyle = 'grey';
      context.beginPath();
      context.moveTo(canvas.width, canvas.height/2);
      context.lineTo(canvas.width-10, canvas.height/2);
      context.stroke();
      
    } */
     
     
     
     
    function drawArm(progress, armThickness, armLength, armColor) {
        var armRadians = (Math.TAU * progress) - (Math.TAU/4);
        var targetX = clockX + Math.cos(armRadians) * (armLength * clockRadius);
        var targetY = clockY + Math.sin(armRadians) * (armLength * clockRadius);
     
        context.lineWidth = armThickness;
        context.strokeStyle = armColor;
     
        context.beginPath();
        context.moveTo(clockX, clockY); // Start at the center
        context.lineTo(targetX, targetY); // Draw a line outwards
        context.stroke();
    }
     
    
    
     
     
    context.clearRect(0, 0, canvas.width, canvas.height);
     
    
    
     
     
    drawArm(h / 12, 2, 0.50, '#ffffff'); // Hour
    drawArm(m / 60,  2, 0.75, 'lightgrey'); // Minute
    drawArm(s / 60,  2, 1.00, '#FF0000'); // Second
    
    /*draw0();
     draw3();
     draw6();
     draw9();*/
    
}

function padZero(num) {
    if (num < 10) { 
        return "0" + String(num);
    }
    else {
        return String(num);
    }
}

function formatHour(h) {
    var hour = h % 12;
 
    if (hour == 0) { 
        hour = 12; 
    }
     
    return String(hour)
}

function getTimePeriod(h) {
    return (h < 12) ? "AM" : "PM"; 
}