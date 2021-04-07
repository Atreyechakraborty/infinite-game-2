var score

function preload(){
  
  BackImage=loadImage("backImage.jpeg");
  BirdImage=loadImage("birdImage.jpeg");
  GameOver=loadImage("Game over.png");
 
  
  
 
}



function setup() {
   createCanvas(600, 250);
  backGround = createSprite(200,130,20,20);
  backGround.addImage(BackImage);
  backGround.scale=0.5;
  
  bird=createSprite(200,144,20,20);
  bird.addImage(BirdImage);
  bird.scale=0.06;
  
  score=0;
}
function draw() {
  background("white");
 backGround.velocityX = -4
  text("Score: "+ score, 500,50);
  
    if (backGround.x < 0){
      backGround.x = backGround.width/2;
    }
  if(keyDown("up")){
    if(bird.y<240){
    bird.velocityY= bird.velocityY-1
  }}
  if(keyDown("down")){
    bird.velocityY= bird.velocityY+1
  }
  if(score===400){
    gameOver=createSprite(300,100,20,20)
    gameOver.addImage(GameOver);
    gameOver.scale=2
  }
 score = score + Math.round(getFrameRate()/60);
    
  backGround.depth = score.depth;
    score.depth = score.depth + 1;
    
drawSprites();
}
  

