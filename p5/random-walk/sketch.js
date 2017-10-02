var mover1;

function setup() {
  createCanvas(windowWidth, windowHeight);

  mover1 = new Mover(random(width), random(height), random(1,10));

}

  function draw() {
    background(150);
    mover1.display();
    mover1.updatePos();
  }
