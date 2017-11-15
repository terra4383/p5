function setup() {
  createCanvas (500, 500);
}

function draw() {
  background (75);
  noFill ();
  stroke (255);
  triangle (50, 50, 75, 100, 25, 100);
  quad (75, 100, 200, 50, 300, 300, 50, 400);
  arc (300, 300, 100, 100, 0, PI+HALF_PI, OPEN);
}