class PVector {

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
