var path,boy,sword;
var pathImg,boyImg,swordImg;
var score;
var swordGroup;

//GameState (Estados del juego)
var PLAY=1;
var END=0;
var gameState=1;

function preload(){
  pathImg = loadImage("Road.png");
  boyImg = loadAnimation("Runner-1.png","Runner-2.png");
  swordImg = loadImage("sword.png");
  endImg =loadAnimation("gameOver.png");
}

function setup(){
  
  createCanvas(600,600);
// Mover el fondo
path=createSprite(200,200);
path.addImage(pathImg);
path.velocityY = 4;


//crear sprite de boy (niño) corriendo
boy = createSprite(70,580,20,20);
boy.addAnimation("SahilRunning",boyImg);
boy.scale=0.4;
  
  


swordGroup=new Group();


console.log("Hola" + 5)
score = 0;


}

function draw() {
  background(200);
  if(gameState===PLAY){
  background(0);
  text("puntaje" + score,500,50);
  score = score  + Math.round(frameCount / 60);

 
  { if(keyDown("left_arrow")){ 
    boy.x = boy.x - 10; 
  }
    if(keyDown("right_arrow")){
       boy.x = boy.x + 10; 
      }
      {
      }
      boy.velocityY = boy.velocityY + 0.8

  
  edges= createEdgeSprites();
  boy.collide(edges);
  
  //código para reiniciar el fondo
  if(path.y > 400 ){
    path.y = height/2;
  }
}


    createSword();
    
    if(swordGroup.isTouching(boy)) {
        gameState=END;
        

        boy.addAnimation("SahilRunning",endImg);
        boy.x=width/2;
        boy.y=height/2;
        boy.scale=0.6;
        

        


         swordGroup.destroyEach();
        

        


        swordGroup.setVelocityYEach(0);
     
    }
  }
  
  drawSprites();
  textSize(20);
  fill(255);
  text("score: "+ score,10,30);
  }









function createSword(){
  if (World.frameCount % 200 == 0) {
  var sword = createSprite(Math.round(random(50, 350),40, 10, 10));
  sword.addImage(swordImg);
  sword.scale=0.1;
  sword.velocityY = 3;
  sword.lifetime = 150;
  swordGroup.add(sword);
  }
}
