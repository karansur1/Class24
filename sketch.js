const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;


var engine,world;
var ground;
var box1,box2,box3,box4,box5;
var pig1, pig2;
var log1,log2,log3,log4;
var bird



function setup() {
  createCanvas(1200,400);

  engine= Engine.create();
  world= engine.world;

  
  ground= new Ground(600,380,1200,30);

  box1= new Box(700,350,70,70);
  box2= new Box(920,350,70,70);
  box3 = new Box(700,260,70,70);
  box4 = new Box(920,260,70,70);
  box5 = new Box(810,200,70,70);
  
  pig1 = new Pig(810,350,50,50);
  pig2 = new Pig(810,260,50,50);
  
  log1 = new Log(810,300,20,300,PI/2);
  log2 = new Log(810,240,20,300,PI/2);
  log3 = new Log(740,120,20,150,PI/4);
  log4 = new Log(870,120,20,150,-PI/5)

  bird = new Bird(200,200,60,60);
  
  
}

function draw() {
  background("black"); 

  Engine.update(engine);

  ground.display();
  box1.display();
  box2.display();
  box3.display();
  box4.display();
  box5.display();
  pig1.display();
  pig2.display();
 log1.display();
 log2.display();
 log3.display();
 log4.display();
 bird.display();


}