/*
1 , 1/2 , 1/4, 1/8, 1/16

*/
function setup() {
  createCanvas(720, 560);
  noStroke();
  noLoop();
}

function draw() {
  drawCircle(width / 2, height/2, 6);
}

function drawCircle(x, radius, level) {
  // 'level' is the variable that terminates the recursion once it reaches 
  // a certain value (here, 1). If a terminating condition is not 
  // specified, a recursive function keeps calling itself again and again
  // until it runs out of stack space - not a favourable outcome! 
  const tt = (126 * level) / 4.0;
  fill(tt);
  ellipse(x, height / 2, radius * 2, radius * 2);
  if (level > 1) {  
    // 'level' decreases by 1 at every step and thus makes the terminating condition
    // attainable
    level = level - 1;  
    drawCircle(x - radius / 2, radius / 2, level);
    drawCircle(x + radius / 2, radius / 2, level);
  }
}

/*

drawCircle() function:

This function is responsible for drawing concentric circles.

Parameters:
x: x-coordinate of the center of the circle.

radius: radius of the circle.

level: controls the depth of recursion and the number of circles drawn.

It calculates the fill color (tt) based on the level of recursion.

It draws an ellipse (circle) at position (x, height / 2) with a diameter of radius * 2.
If level is greater than 1, it recursively calls itself twice, each time reducing level by 1 and halving the radius, creating smaller circles on either side of the current circle.

The recursive nature of drawCircle() allows it to create a pattern of concentric circles, with each level of recursion drawing smaller circles around the central circle. The fill color tt changes based on the recursion level, creating a gradient effect. The recursion terminates when level reaches 1, preventing an infinite loop.

*/
