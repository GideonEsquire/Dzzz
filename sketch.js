var attractors = [];
var particles = [];

function setup() {
    createCanvas(800, 800);
    for (var i = 0; i < 30; i++) {
        particles.push(new Particle(400,400));
    }
    for (var i = 0; i < 20; i++) {
        attractors.push(createVector(random(width), random(height)));
    }
    background(51);

}

function draw() {
    stroke(255);
    strokeWeight(4);

    for (var i = 0; i < particles.length; i++) {
        for (var j = 0; j < attractors.length; j++) {
            particles[i].attracted(attractors[j]);
        }
        particles[i].update();
        particles[i].show();
    }

    // for (var i = 0; i < attractors.length; i++) {
    //     point(attractors[i].x, attractors[i].y);
    // }


}
