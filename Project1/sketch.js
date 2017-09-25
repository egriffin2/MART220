//failed attempt at ball object, I broke something, had to go back to last Github push

var x = 100;
var y = 600;
var xspeed = 7;
var yspeed = 4;

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
  if ((y > height) || (y < 0)) {
    yspeed = yspeed * -1;
  }

//Display the ball at the location (x,y).
  ellipse(x,y,30,30);
}
