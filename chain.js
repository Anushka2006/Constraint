class chain{
 constructor(body1, body2){
     var options={
        bodyA: body1,
        bodyB: body2,
        stiffness:0.4,
        length: 15
     }
    this.chain = Constraint.create(options);
    World.add(world,this.chain);
 }
display(){
    strokeWeight(3);
    line(this.chain.bodyA.position.x,this.chain.bodyA.position.y,this.chain.bodyB.position.x,this.chain.bodyB.position.y);
}

}