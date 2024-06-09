let circles = [];
let colors = ['#f94144', '#f3722c', '#f8961e', '#f9844a', '#f9c74f', '#90be6d', '#43aa8b', '#577590'];

function setup() {
  createCanvas(windowWidth, windowHeight);
  noStroke();
}

function draw() {
  background(30);

  // Create a new circle at the mouse position
  if (mouseIsPressed) {
    let c = {
      x: mouseX,
      y: mouseY,
      size: random(10, 50),
      color: random(colors),
      lifespan: 255 // Initial lifespan for fading
    };
    circles.push(c);
  }

  // Draw all circles
  for (let i = 0; i < circles.length; i++) {
    let c = circles[i];
    fill(c.color + hex(c.lifespan, 2));
    ellipse(c.x, c.y, c.size);

    // Reduce size and lifespan
    c.size *= 0.98;
    c.lifespan -= 2;

    // Remove circles that are too small or fully transparent
    if (c.size < 1 || c.lifespan < 0) {
      circles.splice(i, 1);
      i--;
    }
  }
}

function mousePressed() {
  // Change color palette on mouse press
  colors = colors.map(c => color(random(255), random(255), random(255)).toString('#rrggbb'));
}
