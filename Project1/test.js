function Ball() {
  this.x = 100;
  this.y = 600;
  this.xspeed = 7;
  this.yspeed = 3;
}

Ball.prototype.draw () {
  stroke(0);
  fill(0);

  ellipse(x,y,30,30);
}

Ball.prototype.move () {
  x = x + xspeed;
  y = y + yspeed;

  if ((x > width) || (x < 0)) {
    xspeed = xspeed * -1;
  }
  if ((y > height) || (y < 600)) {
    yspeed = yspeed * -1;
  }

}
