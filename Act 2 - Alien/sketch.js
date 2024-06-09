function setup() {
  createCanvas(400, 400);
}
function setup() {
  createCanvas(400, 400);
}

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(105);

  // Body
  fill(50, 60, 300);
  ellipse(200, 200, 100, 150);

  // Head
  fill(190, 200, 900);
  ellipse(200, 150, 80, 80);

  // Eyes
  fill(255);
  ellipse(181, 140, 20, 20);
  ellipse(215, 140, 20, 20);

  // Mouth
  noFill();
  stroke(0);
  arc(200, 160, 10, 40, 08, PI);

  // Antennas
  strokeWeight(2);
  line(190, 130, 180, 110);
  line(210, 130, 220, 110);
}

