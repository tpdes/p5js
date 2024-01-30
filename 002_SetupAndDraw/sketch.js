 y = 100;

// The statements in the setup() function
// execute once when the program begins
function setup() {
  
  // createCanvas must be the first statement
  createCanvas(720, 400);
  stroke(155,200,100); // Set line drawing color to white
  frameRate(60);
}
// The statements in draw() are executed until the
// program is stopped. Each statement is executed in
// sequence and after the last line is read, the first
// line is executed again.
function draw() {
  background(0); // Set the background to black
  y = y - 2;
  if (y < 0) {
    y = height;
  }
  line(0, y, width, y);
}

/*

Initialization:

y = 100; initializes a global variable y with a value of 100.

setup() function:

createCanvas(720, 400); creates a canvas with a width of 720 pixels and a height of 400 pixels.

stroke(155, 200, 100); sets the stroke color to a light greenish color.

frameRate(60); sets the frame rate of the animation to 60 frames per second.

draw() function:

background(0); sets the background color to black, effectively clearing the canvas on each frame.

y = y - 2; decrements the value of the global variable y by 2 on each frame. This causes the line to move upward by 2 pixels every frame, giving the appearance of vertical motion.

The if statement checks if y is less than 0. If it is, meaning the line has moved off the top of the canvas, it resets y to height. This ensures that the line reappears at the bottom of the canvas, creating a continuous scrolling effect.

line(0, y, width, y); draws a line from the left edge of the canvas (x = 0) to the right edge of the canvas (x = width) at the current value of y. As y changes over time due to the animation loop, the line appears to move vertically.

In summary, this code creates a canvas, sets up a greenish stroke color, and draws a line that continuously scrolls from the bottom to the top of the canvas, giving the impression of motion. The black background is constantly redrawn to create the illusion of continuous movement.


*/
