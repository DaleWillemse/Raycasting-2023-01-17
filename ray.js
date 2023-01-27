class Ray {
  constructor(x, y, angle) {
    this.startX = x;
    this.startY = y;
    this.angle = angle;
    this.len = windowWidth;
    this.isActive = true;
    this.endX = this.startX - this.len * cos(this.angle);
    this.endY = this.startY - this.len * sin(this.angle);
  }

  setColor(rayColor) {
    this.rayColor = rayColor;
  }

  show() {
    if (!this.isActive) return;
    strokeWeight(1);
    stroke(this.rayColor);
    line(this.startX, this.startY, this.endX, this.endY);
  }

  updatePos(x, y) {
    this.startX = x;
    this.startY = y;
    angleMode(DEGREES);
    this.endX = this.startX + this.len * cos(this.angle);
    this.endY = this.startY - this.len * sin(this.angle);
  }

  collides(x3, y3, x4, y4) {
    let x1 = this.startX;
    let y1 = this.startY;
    let x2 = this.endX;
    let y2 = this.endY;

    //Line intersections using Vectors.
    let denominator = (x1 - x2) * (y3 - y4) - (x3 - x4) * (y1 - y2);
    if (denominator == 0) return;

    let t = (x1 - x3) * (y3 - y4) - (y1 - y3) * (x3 - x4);
    let u = (x1 - x3) * (y1 - y2) - (y1 - y3) * (x1 - x2);
    t /= denominator;
    u /= denominator;

    if (0 <= u && u <= 1 && 0 <= t && t <= 1) {
      let pointX = x1 + t * (x2 - x1);
      let pointY = y1 + t * (y2 - y1);
      this.endX = pointX;
      this.endY = pointY;
    }
  }

  setIsActive(isActive) {
    this.isActive = isActive;
  }
}
