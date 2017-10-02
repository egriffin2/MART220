function Mover(x_,y_,size_) {
  this.size = size_;
  this.loc = createVector(x_,y_);
  this.vel = createVector(0,0);
}

Mover.prototype.updatePos = function() {

  this.acc = createVector(random(-1,1), random(-1,1));
  this.acc.mult(0.1);
  this.acc.limit(1);
  this.vel.add(this.acc);
  this.loc.add(this.vel);

//boundaries
  if(this.loc.x < 0) {
    this.loc.x = width;
  } else if (this.loc.x > width) {
    this.loc.x = 0;
  }

  if(this.loc.y < 0) {
    this.loc.y = height;
  } else if (this.loc.y > height) {
    this.loc.y = 0;
  }
}

Mover.prototype.display = function() {

  push();
  translate(this.loc.x, this.loc.y);
  triangle(0,-10,-10,10,10,10);
  pop();
}




/*PVector.prototype.
  var x;
  var y;
  PVector location = new PVector(100,100);
  PVector velocity = new PVector(1,3.3);

  PVector(x_, y_) {
    x = x_;
    y = y_;
  }
  function add(PVector v) {
    y = y + v.y;
    x = x + v.x;
  }
}
/*/
