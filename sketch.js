
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
   ground = new Ground(400,690,800,20);
   paper = new Paper(200,100,40);
   dustbin1 = new Dustbin(500,660,200,20);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  rect(width/2,height-55,200,20)
  rect(width/2-100,height-90,20,100)
  rect(width/2+100,height-90,20,100)

  ground.display();
  paper.display();
  dustbin1.display();
  drawSprites();
 
}

function keyPressed(){
    if(keyCode === UP_ARROW) {

      Matter.Body.applyForce(paperObject.body,paperObject.body.position,{x:85,y:85});

    }


}



