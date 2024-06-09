// Sample data: daily temperatures over a month
let temperatures = [
  { day: 1, high: 30, low: 20 },
  { day: 2, high: 32, low: 22 },
  { day: 3, high: 28, low: 18 },
  { day: 4, high: 27, low: 17 },
  { day: 5, high: 31, low: 21 },
  { day: 6, high: 29, low: 19 },
  { day: 7, high: 30, low: 20 },
  { day: 8, high: 33, low: 23 },
  { day: 9, high: 34, low: 24 },
  { day: 10, high: 32, low: 22 },
  { day: 11, high: 31, low: 21 },
  { day: 12, high: 28, low: 18 },
  { day: 13, high: 27, low: 17 },
  { day: 14, high: 29, low: 19 },
  { day: 15, high: 30, low: 20 },
  { day: 16, high: 32, low: 22 },
  { day: 17, high: 34, low: 24 },
  { day: 18, high: 33, low: 23 },
  { day: 19, high: 31, low: 21 },
  { day: 20, high: 28, low: 18 },
  { day: 21, high: 29, low: 19 },
  { day: 22, high: 30, low: 20 },
  { day: 23, high: 32, low: 22 },
  { day: 24, high: 34, low: 24 },
  { day: 25, high: 33, low: 23 },
  { day: 26, high: 31, low: 21 },
  { day: 27, high: 29, low: 19 },
  { day: 28, high: 28, low: 18 },
  { day: 29, high: 30, low: 20 },
  { day: 30, high: 32, low: 22 },
  { day: 31, high: 34, low: 24 }
];

function setup() {
  createCanvas(800, 400);
  background(255);
  textSize(12);
  fill(0);
}

function draw() {
  background(255);
  drawAxes();
  drawLineChart();
  drawBarChart();
}

function drawAxes() {
  stroke(0);
  
  // X-axis
  line(50, 350, 750, 350);
  for (let i = 0; i < 31; i++) {
    let x = map(i, 0, 30, 50, 750);
    line(x, 345, x, 355);
    textAlign(CENTER);
    text(i + 1, x, 370);
  }
  
  // Y-axis
  line(50, 50, 50, 350);
  for (let i = 0; i <= 40; i += 5) {
    let y = map(i, 0, 40, 350, 50);
    line(45, y, 55, y);
    textAlign(RIGHT);
    text(i, 40, y);
  }
}

function drawLineChart() {
  stroke(0, 0, 255);
  noFill();
  beginShape();
  for (let i = 0; i < temperatures.length; i++) {
    let x = map(temperatures[i].day, 1, 31, 50, 750);
    let y = map(temperatures[i].high, 0, 40, 350, 50);
    vertex(x, y);
  }
  endShape();
}

function drawBarChart() {
  noStroke();
  
  for (let i = 0; i < temperatures.length; i++) {
    let x = map(temperatures[i].day, 1, 31, 50, 750);
    let yHigh = map(temperatures[i].high, 0, 40, 350, 50);
    let yLow = map(temperatures[i].low, 0, 40, 350, 50);
    
    fill(255, 0, 0, 150);
    rect(x - 5, yHigh, 10, 350 - yHigh);
    
    fill(0, 0, 255, 150);
    rect(x - 5, yLow, 10, 350 - yLow);
  }
}
