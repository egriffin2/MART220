var x = 20;
var y = 600;

function setup() {
  createCanvas(windowWidth,windowHeight);
}

function draw() {
  background(153,230,235);

  ellipse(x++,y--,30,30);

  if (y < 500) {
    ellipse(x++,x,30,30);
  }

}
