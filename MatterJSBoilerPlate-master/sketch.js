
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var=bobObject1,bobObject2,bobObject3,bobObject4,bobObject5
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	bobObject1=new bob(startBobPositionX-bobDiameter*2,startBobPositionY,bobDiameter);
	bobObject2=new bob(startBobPositionX-bobDiameter*2,startBobPositionY,bobDiameter);
	bobObject3=new bob(startBobPositionX-bobDiameter*2,startBobPositionY,bobDiameter);
	bobObject4=new bob(startBobPositionX-bobDiameter*2,startBobPositionY,bobDiameter);
	bobObject5=new bob(startBobPositionX-bobDiameter*2,startBobPositionY,bobDiameter);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  drawSprites();
 
}



