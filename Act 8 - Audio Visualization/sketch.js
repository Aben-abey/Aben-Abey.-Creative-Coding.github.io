let mySound, fft;

function preload() {
  mySound = loadSound('utomp3.com - Original Nokia Ringtone.mp3');
}

function setup() {
  createCanvas(400, 400);
  background(0);
  fft = new p5.FFT();
  mySound.setVolume(0.5);
  mySound.play();
  mySound.loop();
}

function draw() {
  background(0);

  let spectrum = fft.analyze();
  let waveform = fft.waveform();
  
  noFill();
  
  // Draw circular spectrum
  translate(width / 2, height / 2);
  stroke(0, 255, 0);
  strokeWeight(2);
  
  beginShape();
  for (let i = 0; i < spectrum.length; i++) {
    let angle = map(i, 0, spectrum.length, 0, TWO_PI);
    let radius = map(spectrum[i], 0, 255, 50, 200);
    let x = radius * cos(angle);
    let y = radius * sin(angle);
    vertex(x, y);
  }
  endShape(CLOSE);
  
  // Draw waveform over the circular spectrum
  stroke(255, 0, 0);
  strokeWeight(1);
  
  beginShape();
  for (let i = 0; i < waveform.length; i++) {
    let angle = map(i, 0, waveform.length, 0, TWO_PI);
    let radius = map(waveform[i], -1, 1, 100, 150);
    let x = radius * cos(angle);
    let y = radius * sin(angle);
    vertex(x, y);
  }
  endShape();
}
