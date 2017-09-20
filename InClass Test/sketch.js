/*var x = 20;
var y = 600;

function setup() {
  createCanvas(windowWidth,windowHeight);
}

function draw() {
  background(153,230,235);

  ellipse(x++,y--,30,30);

  if (y < 500) {
    ellipse(x++,x,30,30);
  }/*/

var x = 100;
var y = 600;
var xspeed = 7;
var yspeed = 3;

function setup () {
  createCanvas(windowWidth,windowHeight);
}

function draw() {
  background(135,200,235);

//Move the ball according to its speed. from Nature of Code
  x = x + xspeed;
  y = y + yspeed;

//Check for bouncing. from Nature of Code (modified)
  if ((x > width) || (x < 0)) {
    xspeed = xspeed * -1;
  }
  if ((y > height) || (y < 600)) {
    yspeed = yspeed * -1;
  }

  stroke(0);
  fill(0);
//Display the ball at the location (x,y).
  ellipse(x,y,30,30);
}
