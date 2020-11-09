class Paper{
    constructor(){
        var options ={
            isStatic:false,
            restitution :0.3,
            friction :0.5,
            density :1.15
            
        }
        this.body = Bodies.circle(100,450,50,options);
        this.width =33;
        this.image = loadImage("paper.png");
        scale=10
        World.add(world, this.body);
    }
    display(){
        var pos = this.body.position;
        var angle = this.body.angle;
        fill("white");
        rotate(angle);
        imageMode(CENTER);
        image(this.image,pos.x,pos.y,33,33);
        scale=10
    }
}