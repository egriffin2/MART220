//failed attempt at ball object

var x = 100;
var y = 600;
var xspeed = 7;
var yspeed = 3;

function setup () {
  createCanvas(windowWidth,windowHeight);
}

function draw() {
  background(135,200,235);
  //var h = 40;
  var h = randomGaussian(100,20);
  var n = noise(random(100),random(100),random(100));

  h = map(h,0,200,50,600);
  n = map(n,0,.7,0,255); //n (noise output) is mapped to color range
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
  rect(windowWidth/2,windowHeight-h,40,h,30);
  fill(n,n,100); //fill is determined by n value
  ellipse(windowWidth-200,0,300,300);

  //text(n,100,100);
  //text(h,100,100);  checking output of h (commented out because it's ugly)

}
