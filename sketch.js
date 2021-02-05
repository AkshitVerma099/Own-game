const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var backgroundImg
var gameState = "inGame"
var bg = "day.jpg"



function preload(){
getBackgroundImg();

}

function setup() {
  createCanvas(1200,600);
  console.log(gameState);
  engine = Engine.create();
  world = engine.world;
  stone = new Stone(200,430)
  ground = new Ground(600,height,1200,20)
  slingshot = new SlingShot(stone.body,{x:200, y:430});
  mango1 = new Mango(1000,50,50,50)
  mango2 = new Mango(1060,150,50,50)
  mango3 = new Mango(970,100,50,50)
  mango4 = new Mango(930,140,50,50)
  mango5 = new Mango(880,100,50,50)
  mango6 = new Mango(1000,160,50,50)
  mango7 = new Mango(1060,210,50,50)
  mango8 = new Mango(970,210,50,50)
  mango9 = new Mango(930,250,50,50)
  mango10 = new Mango(880,210,50,50)
  
  treeObj=new tree(950,580);
}

function draw() {
  if(backgroundImg)
      background(backgroundImg);

  Engine.update(engine);
  treeObj.display();
  mango1 .display();
  mango2.display()
  mango3.display()
  mango4.display()
  mango5.display()
  mango6 .display();
  mango7.display()
  mango8.display()
  mango9.display()
  mango10.display()
  stone.display()
  slingshot.display(); 
  

}

function mouseDragged(){
  if (gameState!=="afterGame"){
      Matter.Body.setPosition(stone.body, {x: mouseX , y: mouseY});
  }
}


function mouseReleased(){
  slingshot.fly();
  gameState = "afterGame";
}

function keyPressed(){
  if(keyCode === 32){
    slingshot.attach(stone.body);
    gameState = "inGame"
  }
}
async function getBackgroundImg(){
  var response = await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata");
  var responseJSON = await response.json();

  var datetime = responseJSON.datetime;
  var hour = datetime.slice(11,13);
  
  if(hour>=06 && hour<=19){
      bg = "day.jpg";
  }
  else{
      bg = "night.jpg";
  }

  backgroundImg = loadImage(bg);
  console.log(backgroundImg);
}






