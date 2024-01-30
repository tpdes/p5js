let y = 0;

// The statements in the setup() function
// execute once when the program begins
function setup() {
  createCanvas(400, 400); // Size must be the first statement
  stroke(255); // Set line drawing color to white
  frameRate(30);
  noLoop();
}
// The statements in draw() are executed until the
// program is stopped. Each statement is executed in
// sequence and after the last line is read, the first
// line is executed again.
function draw() {
  background(0); // Set the background to black
  y = y - 1;
  if (y < 0) {
    y = height;
  }
  line(0, y, width, y);
}

function mousePressed(){
  loop();
}

function mouseReleased(){
  noLoop();
}

/*

Mouse Interaction:

function mousePressed() { loop(); }: This function is called when the mouse is pressed. It resumes the animation loop by calling the loop() function, allowing the draw() function to run continuously again.

function mouseReleased() { noLoop(); }: This function is called when the mouse is released. It stops the animation loop by calling the noLoop() function, freezing the animation.


In summary, this code creates a canvas with a black background and a white horizontal line that continuously scrolls upward. The animation can be paused and resumed by clicking the mouse.

*/