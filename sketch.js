const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var bob,bob2,bob3,bob4,bob5;
var roof;
var rope,rope2,rope3,rope4,rope5;


function preload(){
	
}

function setup() {
  createCanvas(800, 700);
  
	engine = Engine.create();
	world = engine.world;

  bob =  new Bob(150,400);
  bob2 = new Bob(250,400);
  bob3 = new Bob(350,400);
  bob4 = new Bob(450,400);
  bob5 = new Bob(550,400);

  roof = new Roof(400,70,820,10);

  rope = new Rope(bob.body,roof.body,150,0);
  rope2 = new Rope(bob2.body,roof.body,250,0);
  rope3 = new Rope(bob3.body,roof.body,350,0);
  rope4 = new Rope(bob4.body,roof.body,-450,0);
  rope5 = new Rope(bob5.body,roof.body,-550,0);
	
}
function draw() {
  rectMode(CENTER);
  Engine.update(engine);

  if(keyDown("up")){
    Matter.Body.applyForce(Bob.body,Bob.body);
  }

  background("yellow");

  bob.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();

  roof.display();

  rope.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();

 
}
