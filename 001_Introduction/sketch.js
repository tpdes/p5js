/* 
Programming is similar to writing a story. You will need the characters, environment, events etc. As p5js is a web based program, we will need : 

1) A html file "index.html"
2) A javascript file "sketch.js"
3) A css file "style.css"


*/

//Function setup declares the initial setting of the sketch
function setup() {
  createCanvas(400, 400); // this 
}

//Function draw is a continous event. For example, we will include other "events" within function draw
function draw() {
  background(220); // this describes the background colour. 
  
  circle(200,200,15);
  // We draw a circle by typing out "circle" and the coordinates and values.
  // Firstly, we declare the X coordinate of the object.
  // Next, we declare the Y coordinate of the object.
  // Finally, we declare the diameter of the circle.
  // You can refer to the p5js' reference page : https://p5js.org/reference/
  // for more information
}