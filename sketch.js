let system;
let g;
let wind;

function setup() {
  createCanvas(720, 400);
  system = new ParticleSystem(createVector(width / 2, 50));
  g = createVector(0, 0.05);
  wind = createVector(0.02, -0.02);
}

function draw() {
  background(51);
  system.addParticle();
  system.applyForce(g);
  system.applyForce(wind);
  system.run();
}
