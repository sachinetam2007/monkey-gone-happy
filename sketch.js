//creating variables
var backdrop,jungleImg,invisibleGround;
var monkeyImg,player;
var bananaImg,bananaGroup;
var stoneImg,stoneGroup;
var score;


function preload(){
jungleImg=loadImage("jungle.jpg");  

monkeyImg=loadAnimation("Monkey_01.png","Monkey_02.png","Monkey_03.png","Monkey_04.png","Monkey_05.png","Monkey_06.png","Monkey_07.png","Monkey_08.png","Monkey_09.png","Monkey_10.png");
 
bananaImg=loadImage("banana.png"); 
stoneImg=loadImage("stone.png");
}


function setup() {
  createCanvas(400, 400);
  backdrop=createSprite(200,200,400,400);
  backdrop.addImage(jungleImg);
  
  player=createSprite(50,350,10,10);
  player.addAnimation("monkey",monkeyImg);
  player.scale=0.12;
  
  invisibleGround=createSprite(200,390,400,10);
  invisibleGround.visible=false;
  
  bananaGroup=new Group();
  stoneGroup=new Group();
  score=0;
}

function draw() {
  background(220);
  
  //making moving background
  backdrop.velocityX=-5;
  if (backdrop.x < 0){
    backdrop.x = backdrop.width/2;
  }
  
   console.log(score);
  
  //making jump when space is pressed
  if(keyDown("space")) {
    player.velocityY = -15;
    }
  
   //giving gravity
   player.velocityY = player.velocityY + 0.8
   player.collide(invisibleGround);
   
  //spawning bananas and stones
  spawnBanana();
  spawnStones();
  
  //if player touches bananas
  if(bananaGroup.isTouching(player)){
     bananaGroup.destroyEach();
     score=score+2;
     }

   //making switch case for increasing size of player
   switch(score){
     case 10:player.scale=0.14;
       break;
     case 20: player.scale=0.16;
       break;
     case 30: player.scale=0.18;
       break;
     case 40: player.scale=0.20;
       break;
     default : break;
   }
  
   drawSprites();
  
  //displaying score
  stroke("white");
  textSize(20);
  fill("white");
  text("Score: "+ score, 300,50);
}

function spawnBanana() {
  if (frameCount % 130 === 0) {
    var banana = createSprite(400,220,40,10);
    banana.addImage(bananaImg);
    banana.scale = 0.05;
    banana.velocityX = -3;
    banana.lifetime = 430;
    banana.depth = player.depth;
    player.depth = player.depth + 1;
  bananaGroup.add(banana);
  }
}



function spawnStones() {
  if (frameCount % 80 === 0) {
    var stone = createSprite(400,360,10,10);
    stone.addImage(stoneImg);
    stone.scale = 0.12;
    stone.velocityX = -4;
    stone.lifetime = 430;
    stone.depth = player.depth;
    player.depth = player.depth + 1;
  stoneGroup.add(stone);
  }
}





















