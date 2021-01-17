var bananaImage, stoneImage, player,playerRunning
var inviGround

var obstaclesGroup 
var foodGroup 

var Ground
var backgroundImg
var score = 0

function preload(){
  backgroundImg = loadImage("jungle.jpg");
  
  playerRunning = loadAnimation("Monkey_01.png","Monkey_02.png", "Monkey_03.png", "Monkey_04.png", "Monkey_05.png", "Monkey_06.png", "Monkey_07.png", "Monkey_08.png","Monkey_09.png", "Monkey_10.png")
  
  bananaImage = loadImage("banana.png")
  
  stoneImage = loadImage("stone.png")
  
}


function setup() {
  createCanvas(600,300);
  
  Ground = createSprite(300, 150, 20, 20)
  Ground.addImage(backgroundImg)
 Ground.velocityX = -2;
 Ground.scale = 2;
  
   player = createSprite(100, 200, 50, 50)
  player.addAnimation("running", playerRunning);
  player.scale = 0.15

  inviGround= createSprite(300, 280, 600, 10);
  inviGround.visible = false;

  foodGroup = createGroup ();
  obstaclesGroup = createGroup();
  
 /* banana = createSprite(550, 100, 20, 20)
  banana.addImage(bananaImage)
  banana.add(bananaGroup);
  bananaGroup.scale = 0.2;
  bananaGroup.velocityX = -2
  
  stone = createSprite(550, 250, 20, 20)
  stone.addImgage(stoneImage);
  stone.add(obstaclesGroup);
  obstaclesGroup.scale = 0.2;
  obstaclesGroup.velocityX = -2
*/
  
  
}
 

function draw(){
 background(255); 
  
 if(keyDown("space")){
   player.velocityY = -10;
 }

 player.velocityY  = player.velocityY+0.5;
 player.collide(inviGround);
  
  
  
  if (Ground.x < 0){
      Ground.x = Ground.width/2;
}

console.log(score);

for (var i = 0; i<foodGroup.length; i++){
  if(foodGroup.get(i).isTouching(player)){
    foodGroup.get(i).destroy();
    score = score+1;
  }
}

 if(player.isTouching(obstaclesGroup)){
  player.scale = 0.15;
  score = 0;
}



switch(score){
  case 10: player.scale = 0.19;
           break;
  case 20: player.scale = 0.21;
           break;
  case 30: player.scale = 0.23;
           break;  
  case 40: player.scale = 0.25;
           break;    
  default: break;            
}



spawnBananas();
spawnStones();
      
drawSprites();

stroke("white");
textSize(20);
fill ("black")
text("score: "+ score, 500, 50);
  
  
}

function spawnBananas(){
  if(frameCount % 160 === 0 ){
    var banana = createSprite(600, 50, 50,50);
    banana.addImage(bananaImage);
    banana.velocityX = -3;
    banana.scale = 0.1;
    banana.lifetime = 200;
    foodGroup.add(banana);
  }
}

function spawnStones(){
  if(frameCount % 180 === 0 ){
    var stone = createSprite(600, 270, 50,50);
    stone.addImage(stoneImage);
    stone.velocityX = -3;
    stone.scale = 0.1;
    stone.collide(inviGround);
    stone.lifetime = 200;
    obstaclesGroup.add(stone);
  }
}
