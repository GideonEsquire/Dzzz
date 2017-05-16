var attractors = [];
var particles = [];

function setup() {
    createCanvas(windowWidth, windowHeight);
    for (var i = 0; i < 500; i++) {
        particles.push(new Particle(width/2,height/2));
    }

    // for (var i = 0; i < 2; i++) {
    //     attractors.push(createVector(random(width), random(height)));
    //     // attractors.push(createVector(width/2, height/2));
    // }
    //
    // attractors.push(createVector(width*.25, height*.25));
    // attractors.push(createVector(width*.25, height*.75));
    // attractors.push(createVector(width*.75, height*.25));
    // attractors.push(createVector(width*.75, height*.75));

    attractors.push(createVector(width*.25, height*.5));
    // attractors.push(createVector(width*.5, 0));
    // attractors.push(createVector(width, height*.5));
    attractors.push(createVector(width*.5, height*.75));

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
