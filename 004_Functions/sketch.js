function setup() {
  createCanvas(720, 400);
  background(51);
  noStroke();
 // noLoop();
}

function draw() {
  drawTarget(width * 0.15, height * 0.4, 200, 4);
  drawTarget(width * 0.5, height * 0.5, 300, 10);
  drawTarget(width * 0.75, height * 0.3, 120, 6);
}

function drawTarget(xloc, yloc, size, num) {
  const grayvalues = 255 / num;
  const steps = (size/4) / num;
  for (let i = 0; i < num; i++) {
    fill(i * grayvalues);
    ellipse(xloc, yloc, size - i * steps, size - i * steps);
  }
}

/*

drawTarget() function:

This function is responsible for drawing a single target.
Parameters:
xloc: x-coordinate of the target's center.
yloc: y-coordinate of the target's center.
size: diameter of the largest circle in the target.
num: number of circles in the target.
It calculates the color and size of each circle in the target based on the parameters provided.
It uses a loop to draw the circles of decreasing size and increasing shade of gray towards the center.
The drawTarget() function iterates through a loop num times, drawing circles with decreasing size and increasing shade of gray as the loop progresses. The shade of gray is calculated based on i * grayvalues, where grayvalues is determined by dividing 255 (the maximum value for a color channel) by num. The size of each circle is also decreased as i increases using the size - i * steps expression. The circles are drawn using the ellipse() function centered at (xloc, yloc).

*/