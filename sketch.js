
var trex ,trex_running;

var ground;
function preload(){
  //uploading animation
  trex_running = loadAnimation("trex1.png", "trex3.png", "trex4.png");

}

function setup(){
  createCanvas(400,200)
 
  //create a trex sprite
 trex = createSprite(50, 150, 20, 50);
 //adding animation
 trex.addAnimation("running", trex_running);
 trex.scale = 0.5;
 trex.x = 30;
// creating base
 ground = createSprite(200, 180,400,20)


}

function draw(){
  background(220);
  //making it jump
  if(keyDown("space")){
    trex.velocityY = -10;
  }
// add gravity
trex.velocityY = trex.velocityY + 0.8;
// so that the trex donot go down
trex.collide(ground);
  drawSprites();

}
