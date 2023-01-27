class Light {
  constructor(x, y) {
    this.centerX = x;
    this.centerY = y;
    this.isActive = true;
    this.lightColor = color(255, 255, 255);

    this.rays = new Array();
    for (var i = 0; i < 360; i += 3) {
      let ray = new Ray(this.centerX, this.centerY, i);
      ray.setColor(this.lightColor);
      this.rays.push(ray);
    }
  }

  setIsActive(isActive) {
    this.isActive = isActive;
  }

  updatePos(x, y) {
    this.centerX = x;
    this.centerY = y;
    for (let i = 0; i < this.rays.length; i++) {
      this.rays[i].updatePos(this.centerX, this.centerY);
    }
  }

  show(lines) {
    if (!this.isActive) return;

    for (let i = 0; i < this.rays.length; i++) {
      for (let j = 0; j + 1 < lines.length; j++) {
        if (lines.x[j + 1] == -1) continue;
        if (lines.x[j] == -1) continue;
        let x1 = lines.x[j];
        let y1 = lines.y[j];
        let x2 = lines.x[j + 1];
        let y2 = lines.y[j + 1];
        this.rays[i].collides(x1, y1, x2, y2);
      }
      this.rays[i].show();
    }
  }
}
