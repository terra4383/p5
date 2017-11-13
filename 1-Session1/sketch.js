function setup() {
  createCanvas (1024, 768);
  background(69,50,70);
}

function draw() {
  // Ellipse
  strokeWeight (1);
  noStroke();
  fill (248,98,84);
  ellipse (200, 200, 500, 500);

  // Rectangles
  strokeWeight (2);
  stroke (255,208,91, 200);
  fill (176,77,93, 200);
  rect (300, 300, 100, 200); // bottom-right
  noFill();
  strokeWeight (5);
  rect (10, 10, 75, 75); // top-left

  // Lines
  strokeWeight (1);
  stroke (255,241,197);
  line (85, 85, 300, 300); // center
  line (10, 10, 400, 300); // top-left
  line (85, 10, 400, 300); // top-right
  line (10, 85, 300, 500); // bottom-left

  // Custom Shape
  beginShape();
  fill (100, 200);
  noStroke ();
  vertex (10, 85);
  vertex (200, 300);
  vertex (300, 400);
  vertex (500, 600);
  endShape ();
}