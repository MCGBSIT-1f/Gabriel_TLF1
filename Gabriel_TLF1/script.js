var colors = ["images/red.jpg", "images/yellow.jpg", "images/green.jpg"]; 
var index = 0;
var intervalId;

function startTrafficLight() {
    intervalId = setInterval(changeColor, 60000);
}

function changeColor() {
    index = (index + 1) % colors.length;
    document.getElementById('trafficlight').src = colors[index];
}

startTrafficLight();
