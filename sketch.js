const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var paper,ground
var bin1,bin2,bin3


function preload()
{
  
}


function setup() {
	createCanvas(800, 700);
  engine = Engine.create();
  world = engine.world;
  
   paper = new Paper(100,100,40);
   ground = new Ground(400,height,800,20);
   bin1 = new Bin(610,650,10,100);
   bin2 = new Bin(0,0,200,150);
   bin3 = new Bin(785,650,10,100);


	
	


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(255);
  
 paper.display()
 bin1.display()
 bin3.display()
 bin2.show()
 ground.display()
  
 
}

function keyPressed(){
	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(paper.body,paper.body.position,{x:255,y:-255});
	}
}


