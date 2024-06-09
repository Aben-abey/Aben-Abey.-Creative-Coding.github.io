function setup() {
  createCanvas(400, 400);
  background(255);
  noLoop(); // Ensures the draw function only runs once
}

function draw() {
  let cols = 10; // Number of columns
  let rows = 10; // Number of rows
  let maxDiameter = width / cols; // Maximum diameter of each circle

  for (let i = 0; i < cols; i++) {
    for (let j = 0; j < rows; j++) {
      let x = i * maxDiameter + maxDiameter / 2;
      let y = j * maxDiameter + maxDiameter / 2;
      let diameter = random(maxDiameter / 2, maxDiameter); // Random diameter
      let r = random(255); // Random red value
      let g = random(255); // Random green value
      let b = random(255); // Random blue value
      fill(r, g, b);
      ellipse(x, y, diameter, diameter);
    }
  }
}
