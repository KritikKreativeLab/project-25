
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var engine;
var stop=0;
var world;
var paper;
var ground;
var box1, box2, box3;
var paperImg, binImg;

function preload()
{
	paperImg = loadImage("image/paper.png");
	binImg = loadImage("image/dustbingreen.png");	
}

function setup() {
	createCanvas(700, 600);
	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	paper = new Paper(55, 200, 10);
	ground = new Ground();
	box1 = new Box(430, 545, 100, 10);
	box2 = new Box(380, 500, 10, 80);
	box3 = new Box(480, 500, 10, 80);
	Engine.run(engine);
  
}

function keyPressed() {
	if(keyCode === UP_ARROW && stop === 0){
		Body.applyForce(paper.body, paper.body.position, {x:10, y:-15});
		stop = 1;
	}
	
  }

function draw() {
  rectMode(CENTER);
  background(255);
  Engine.update(engine);
  paper.display();
  ground.display();
  box1.display();
  box2.display();
  box3.display();
  image(binImg, 370,450,120,101);
}



