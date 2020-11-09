
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;


function preload()
{

}

function setup() {
	createCanvas(1200, 500);

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ground = new Ground(600,height,1200,20);
	paper = new Paper();
	bin1 = new bin(798,478,170,20);
	bin2 = new bin(723,400,20,130);
	bin3 = new bin(873,400,20,130);
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(255);
  Engine.update(engine);
 ground.display();
  paper.display();
  bin1.display();
  bin2.display();
  bin3.display();
  drawSprites();
 

}

function keyPressed(){
	if(keyCode === UP_ARROW) {
		Matter.Body.applyForce(paper.body,paper.body.position,{x:105,y:-105});
	}
  }


