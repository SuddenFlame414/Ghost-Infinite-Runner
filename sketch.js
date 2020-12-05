var ghost, ghostImg;
var boulder, boulderImg, boulderGroup;
var road, roadImg, invisibleRoad;
var gameOver, gameOverImg;
var score = 0;

function preload() {
  roadImg = loadImage("road.jpg");
  boulderImg = loadImage("Boulder.png");
  ghostImg = loadImage("Ghost.png");
  gameOverImg = loadImage("gameOver.jpg");
}

function setup() {
  createCanvas(600, 500);

  road = createSprite(300, 300, 600, 10)
  road.addImage(roadImg);
  road.scale = 3;
  road.velocityX = 5;

  ghost = createSprite(450, 430, 20, 20)
  ghost.addImage(ghostImg);
  ghost.scale = 0.3

  invisibleRoad = createSprite(300, 450, 600, 10);
  invisibleRoad.visible = false;
  invisibleRoad.velocityX = road.velocityX;
  
  boulderGroup = new Group();
  
}

function draw() {
  background("white");
  
  stroke("black");
  fill("black");
  textSize(25);
  text("Score = " + score, 225, 25);
  
  ghost.collide(invisibleRoad);

  if (road.x > 400) {
    road.x = 300;
  }
  if (invisibleRoad.x > 200) {
    invisibleRoad.x = 300;
  }
  
  score += 1; 
  spawnBoulder();
  
  ghost.velocityY += 1;
  
  if (keyDown("space") &&  250) {
    ghost.velocityY = -5;
  }
  
  
  
  if(boulderGroup.isTouching(ghost)) {
   background("black");
    boulderGroup.visible = false;
   score = 0;
   ghost.visible = false;
   road.visible = false;
    gameOver = createSprite(300,200,20,20);
    gameOver.addImage(gameOverImg);
  }
    
  drawSprites();
}

function spawnBoulder() {
  if (frameCount % 90 === 0) {
    boulder = createSprite(50, 410, 20, 20);
    boulder.velocityX = 5;
    boulder.addImage(boulderImg);
    boulder.scale = 0.4;
    
    boulderGroup.add(boulder);
  }
}