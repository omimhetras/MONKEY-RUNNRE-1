var monkey, monkey_running;
var ground;
var rock, rockImage;
var banana , banana_Image;
var survivalTime = 0;

function preload(){
  monkey_running = loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png");
  
  rockImage = loadImage("obstacle.png");
  banana_Image = loadImage("banana.png");
}

function setup() {
  createCanvas(400, 400);
  monkey = createSprite(50,160,20,50);
   monkey.scale = 0.1;
  monkey.addAnimation("m", monkey_running);
  
  
  ground = createSprite(380,380,400,20);
  ground.x = ground.width /2;
  ground.velocityX = -4;
  
  bananaGroup = new Group ();
}

function draw() {
  background("red");
 
  if(keyDown("space") && monkey.y>=100) {
    monkey.velocityY = -10;
  }
  
  monkey.velocityY = monkey.velocityY + 0.8
  
  if (ground.x < 0){
    ground.x = ground.width/2;
  }
  
  monkey.collide(ground);
  
  spawnObstacles();
    spawnBanana();
 
  drawSprites();
  textSize("20");
  fill("black");
  survivalTime = Math.ceil(frameCount/ frameRate ());
  text("SURVIVAL TIME : "+ survivalTime,100,50);
 }

  

function spawnObstacles() {
if(World.frameCount % 300 === 0) {
  var rock = createSprite(400,365,10,40);
    rock.velocityX = - 6;
    rock.addImage("obs",rockImage);
    rock.scale=0.1;
    rock.lifetime = 67;
    
  }
}

function spawnBanana() {
if (World.frameCount % 80 === 0) {
    var banana = createSprite(400,320,40,10);
    banana.y = random(120,200);
    banana.addImage("Banana",banana_Image);
    banana.scale = 0.07;
    banana.velocityX = -3;
    banana.lifetime = 134;
   bananaGroup.add(banana);
  }
  
}
