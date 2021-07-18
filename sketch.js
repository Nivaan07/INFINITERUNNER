var monkey, monkey_running
var banana, bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup;
var ground;
var score = 0;
var background;
var bananaGroup

function preload() {


  monkey_running = loadAnimation("sprite_0.png", "sprite_1.png", "sprite_2.png", "sprite_3.png", "sprite_4.png", "sprite_5.png", "sprite_6.png", "sprite_7.png", "sprite_8.png")

  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");

}

function setup() {

  canvas = createCanvas(displayWidth - 20, displayHeight-30);

  monkey = createSprite(50, 370, 20, 50);
  monkey.addAnimation("running", monkey_running);
  monkey.scale = 0.1;

 

  ground = createSprite(100, 400, 400, 10);
  ground.velocityX = -5;
  //ground.x=ground.width/2;

  monkey.setCollider("rectangle",0,0,monkey.width,monkey.height);

 bananaGroup = new Group();
 obstacleGroup = new Group();
  
score = 0;
}


function draw() {
  background("grey");

  fill("red")
  text("Score: "+ score, 320,30);
  
  monkey.collide(obstacleGroup);


  if (keyDown("space")) {

    monkey.velocityY = -10;

  }

  monkey.velocityY = monkey.velocityY + 0.6;
  
  if(bananaGroup.isTouching(monkey)){
    
    score = score+5;
    bananaGroup.destroyEach();

  }
  
  if(monkey.isTouching(obstacleGroup)){
     
     obstacleGroup.destroyEach();
    score = score-2
     }

  if (ground.x < 0) {
    ground.x = ground.width / 2;
  }

  var index = 0;

  var x = 0;
  var y;


  monkey.collide(ground);
  banana();
  Obstacle();

  camera.position.x = displayWidth/2;
  camera.position.y = monkey[index-1]
  
 

  drawSprites();

}

function banana() {
    
    if (frameCount % 115 === 0) {
    var banana1= createSprite(600,190,40,10);
    banana1.y = Math.round(random(120,200));
    banana1.addImage(bananaImage);
    banana1.scale = 0.1;
    banana1.velocityX = -5;
      
    banana1.lifeTime = 100
      
       var score = Math.round(random(10,40));
    switch(score) {
      case 10: monkey.scale = 0.11;
              break;
      case 20: monkey.scale = 0.23;
              break;
      case 30: monkey.scale = 0.15;
              break;
      case 40: monkey.scale = 0.18;
              break;
             default: break;

    }

    bananaGroup.add(banana1);

  }
}

function Obstacle() {

  if (frameCount % 300 === 0) {
    var obstacle = createSprite(300, 380, 10, 40);
    obstacle.velocityX = -2;
    obstacle.addImage(obstacleImage);
    obstacle.scale = 0.1

  }
  
  
}