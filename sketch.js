
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(1200, 600);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.


	Engine.run(engine);
	floor=new Ground(width/2,590,width,20)
	ball= new Paper(100,450)
	bin=new Bin(1000,570)
}


function draw() {

  rectMode(CENTER);
  background(255);
 
  floor.display()
  ball.display(); 
  bin.display();
 
  //drawSprites();
 
}
function keyPressed(){
	if(keyCode===UP_ARROW){
		Matter.Body.applyForce(ball.body, ball.body.position, {x: 80, y: -85})
	}
}



