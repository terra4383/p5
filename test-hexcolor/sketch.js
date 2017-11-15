function setup() {
  createCanvas (500, 500);
  background (75);
  a = color ('#0DA1A9');
  b = color ('#3cc3b2'); // How to add transparency to a hex value?
}

function draw() {
  fill (a);
  noStroke ();
  ellipse (100, 100, 100, 100);
  fill (b);
  ellipse (200, 200, 200, 200);
}