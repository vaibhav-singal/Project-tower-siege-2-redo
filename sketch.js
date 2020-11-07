const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine , world;
var stand1,stand2;
var block1;
var block2;
var block3;
var block4, block5, block6, block7;
var block8, block9, block10, block11, block12, block13, block14, block15, block16;
var block24, block25, block26, block27, block28, block29, block30, block31, block32;
var ball;
var rope;

function setup() {
    createCanvas(1500,800);

    engine = Engine.create();
    world = engine.world;

    stand1 = new Ground(650,500,300,10);
	stand2 = new Ground(1000,325,300,10);

    
    block1 = new Box(550,475,30,50);
	block2 = new Box(580,475,30,50);
	block3 = new Box(610,475,30,50);
	block4 = new Box(640,475,30,50);
	block5 = new Box(670,475,30,50);
    block6 = new Box(700,475,30,50);
    block7 = new Box(730,475,30,50);
    block8 = new Box(580,425,30,50);
	block9 = new Box(610,425,30,50);
	block10 = new Box(640,425,30,50);
	block11 = new Box(670,425,30,50);
	block12 = new Box(700,425,30,50);
	block13 = new Box(610,375,30,50);
	block14 = new Box(640,375,30,50);
	block15 = new Box(670,375,30,50);
	block16 = new Box(640,325,30,50);


    block24 = new Box(930,300,30,50);
    block25 = new Box(960,300,30,50);
    block26 = new Box(990,300,30,50);
    block27 = new Box(1020,300,30,50);
    block28 = new Box(1050,300,30,50);
    block29 = new Box(960,250,30,50);
    block30 = new Box(990,250,30,50);
    block31 = new Box(1020,250,30,50);  
  block32 = new Box(990,190,30,50);

    ball = new Ball(150,400,60,60);

    rope = new Rope(ball.body,{x:150, y:400});


    // Engine.update();
}

function draw() {
    background(0);
    Engine.update(engine);

    stand1.display();
    stand2.display();
    block1.display();
  block2.display();
  block3.display();
  block4.display();
  block5.display();
  block6.display();
  block7.display();
  block8.display();
  block9.display();
  block10.display();
  block11.display();
  block12.display();
  block13.display();
  block14.display();
  block15.display();
  block16.display();

 
  block24.display();
  block25.display();
  block26.display();
  block27.display();
  block28.display();
  block29.display();
  block30.display();
  block31.display();
  block32.display();
    ball.display();
    
    rope.display();
}

function mouseDragged() {
    Matter.Body.setPosition(ball.body,{x:mouseX, y:mouseY});
}

function mouseReleased(){
    rope.fly();
}

function keyPressed() {

  if(keyCode == 32){
      rope.attach(ball.body);
  }

}
