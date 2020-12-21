class Paper{
    constructor(x,y){
        var options={
            isStatic:false,
            restitution: 0.3,
            friction: 0.5,
            density:1.2
        }
        this.body=Matter.Bodies.circle(x,y,20,options)
        World.add(world,this.body)
        this.image=loadImage("paper.png")
    }
    display(){
        var pos=this.body.position
        ellipseMode(CENTER)
        fill(255,255,255)
        ellipse(pos.x,pos.y,40,40)
        imageMode(CENTER)
        image(this.image, pos.x,pos.y, 60,60)
    }
}