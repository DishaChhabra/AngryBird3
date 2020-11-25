class SlingShot{
    constructor(bodyA, bodyB){
        var options = {
            bodyA: bodyA,
            bodyB: bodyB,
            stiffness: 0.8,
            length: 200
        }
    this.sling = Constraint.create(options);
    World.add(world, this.sling);
    }

    display(){
        push()
        strokeWeight(3)
        line(this.sling.bodyA.position.x, this.sling.bodyA.position.y, this.sling.bodyB.position.x, this.sling.bodyB.position.y)
        pop()
    }
}