var player
var gameState = 0;
var bgImg;




function preload(){
bgImg = loadImage("image/BG.png");

}

function setup() {
  createCanvas(windowWidth,windowHeight);
  player = new Player();
  game = new Game();
 
}

function draw() {
  background("lightblue");
  image(bgImg,0,0,windowWidth,windowHeight);
  if(gameState === 0){
    game.start();
  }
  if(gameState === 1){
    game.play();
  }
  if(gameState === 2){
    game.end();
  }
  if(gameState === 3){
    game.win();
  }
  edges = createEdgeSprites();
  player.control();  
  drawSprites();
}