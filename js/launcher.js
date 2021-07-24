class launcher {
    constructor(bodyA, anchor) {
        var options = {
            bodyA: bodyA,
            pointB: anchor,
            length: 10,
            stiffness: 0.004
        }
        this.bodyB = anchor;
        this.body = Constraint.create(options);
        World.add(world, this.body);
    }
    display() {
        if (this.body.bodyA) {
            var posA = this.body.bodyA.position;
            var posB = this.bodyB;
            strokeWeight(5);
            stroke("grey");
            line(posA.x, posA.y, posB.x, posB.y);
        }
    }

    fly() {
        this.body.bodyA = null;
    }

    attach(body) {
        this.body.bodyA = body;
    }
}