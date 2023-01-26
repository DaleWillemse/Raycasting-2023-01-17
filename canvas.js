var lines;
var light;

function setup() {
  createCanvas(windowWidth, windowHeight);
  light = new Light(width, height);
  lines = new Lines();
}

function draw() {
  background(0);

  light.updatePos(mouseX, mouseY);
  light.show(lines);

  lines.show();
}

function mousePressed() {
  light.setIsActive(false);
}

function mouseReleased() {
  light.setIsActive(true);
  lines.add(-1, -1);
}

function mouseDragged() {
  lines.add(mouseX, mouseY);
}
