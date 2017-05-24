var attractors = [];
var particles = [];

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(51);

  for (var i = 0; i < windowWidth; i++) {
    particles.push(new Particle(i,0));
  }

}

function draw() {
  stroke(255);
  strokeWeight(4);

  for (var i = 0; i < particles.length; i++) {
    particles[i].attracted(createVector(mouseX, mouseY));
    particles[i].update();
    particles[i].show();
  }

}
