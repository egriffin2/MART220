//var mover1;
var flyArray = [];
var numFly = 10;

function setup() {
  createCanvas(windowWidth, windowHeight);

  for (var i = 0; i < numFly; i++) {
    flyArray.push(new Mover(random(width), random(height), random(1,10)));
  }

  //mover1 = new Mover(random(width), random(height), random(1,10));

}

  function draw() {
    background(150);
    //mover1.display();
    //mover1.updatePos();
    for (var i = 0; i < flyArray.length; i++) {
      flyArray[i].updatePos();
      flyArray[i].display();
  }

}
