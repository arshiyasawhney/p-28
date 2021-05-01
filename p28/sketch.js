
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

function preload()
{
boyImages = loadImage("images/boy.png");
treeImages = loadImage("images/tree.png");
stoneImages = loadImage("images/stone.png");
}

function setup() {
	createCanvas(1300, 600);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ground = new Ground(650,595,1300,10);
	stone = new Stone (150,500,30,30);
  slingshot = new Slingshot (stone.body,{x:150,y:500});
  mango1 = new Mango(990,300);
  mango2 = new Mango(1200,250);
  mango3 = new Mango(980,200);
  mango4 = new Mango(1090,120);
  mango5 = new Mango(1070,200);
	Engine.run(engine);
  
}
function detectcollision(lstone,lmango){ 
  mangoBodyPosition=lmango.body.position;
  stoneBodyPosition=lstone.body.position; 
  var distance=dist(stoneBodyPosition.x, stoneBodyPosition.y, mangoBodyPosition.x, mangoBodyPosition.y);
  if(distance<=lmango.width+lstone.width) { Matter.Body.setStatic(lmango.body,false); 
  } 
}

function draw() {
  rectMode(CENTER);
  background(255);
  imageMode(CENTER);
  image(treeImages, 1050, 350, 450, 600);
  image(boyImages, 200,530,200,300);
  ground.display()
  stone.display();
  slingshot.display();
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
 detectcollision(stone,mango1);
 detectcollision(stone,mango2);
 detectcollision(stone,mango3);
 detectcollision(stone,mango4);
 detectcollision(stone,mango5);
 
  drawSprites();
 
}
function mouseDragged(){
  Matter.Body.setPosition(stone.body,{x:mouseX, y:mouseY});
}
function mouseReleased(){
  slingshot.fly();
}


