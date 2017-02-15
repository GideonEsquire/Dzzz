function Particle(x, y) {
    this.pos = createVector(x, y);
    this.prev = createVector(x, y);
    this.vel = p5.Vector.random2D();
    // this.vel.setMag(random(2, 5));
    this.acc = createVector();

    this.update = function() {
        this.pos.add(this.vel);
        this.vel.add(this.acc);
        this.acc.mult(0);
    }

    this.show = function() {
        stroke(255, 10);
        strokeWeight(2);
        line(this.pos.x, this.pos.y, this.prev.x, this.prev.y);

        this.prev.x = this.pos.x;
        this.prev.y = this.pos.y;

    }

    this.attracted = function(target) {
        // var force = target - this.pos
        var force = p5.Vector.sub(target, this.pos);
        var dsquared = force.magSq();
        dsquared = constrain(dsquared, 25, 400);
        var G = 6.67408;
        var strenth = G / dsquared;
        force.setMag(strenth);
        this.acc.add(force);
    }
}
