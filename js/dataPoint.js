function DataPoint(x, y) {
  if (x) {
    this.x = x;
    this.y = y;
  } else {
    this.x = random(0, 1);
    this.y = random(0, 1);
  }
  this.label = label(this.x, this.y);
}

DataPoint.prototype.pixelX = function() {
  return this.x * width;
};

DataPoint.prototype.pixelY = function() {
  return (1 - this.y) * height;
};

DataPoint.prototype.show = function() {
  push();
  strokeWeight(1);
  stroke(0);
  if (this.label == 1) {
    fill(255);
  } else {
    fill(0);
  }
  ellipse(this.pixelX(), this.pixelY(), 12, 12);
  pop();
};