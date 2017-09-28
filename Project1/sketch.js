//failed attempt at ball object, I broke something, had to go back to last Github push

/*var x = 100;
var y = 600;
var xspeed = 7;
var yspeed = 4;
/*/
//PVector location = new PVector(100,100);
//PVector velocity = new PVector(1,3.3);

function setup () {
  createCanvas(windowWidth,windowHeight);
  location = new PVector(100,100);
  velocity = new PVector(2.5,5);
}

function draw() {
  background(135,200,235);

  location.add(velocity);
 //We still sometimes need to refer to the individual components of a PVector and can do so using the dot syntax: location.x, velocity.y, etc.
   if ((location.x > width) || (location.x < 0)) {
     velocity.x = velocity.x * -1;
   }
   if ((location.y > height) || (location.y < 0)) {
     velocity.y = velocity.y * -1;
   }

//Move the ball according to its speed. from Nature of Code
/*  x = x + xspeed;
  y = y + yspeed;
/*/

//Check for bouncing. from Nature of Code (modified)
/*  if ((x > width) || (x < 0)) {
    xspeed = xspeed * -1;
  }
  if ((y > height) || (y < 0)) {
    yspeed = yspeed * -1;
  }
/*/

//Display the ball at the location (x,y).
  ellipse(location.x,location.y,30,30);
}
