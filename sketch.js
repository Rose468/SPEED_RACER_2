var canvas;
var backgroundImage, car1_img, car2_img, track;
var fuelImage, powerCoinImage, lifeImage;
var obstacle1Image, obstacle2Image;
var database, gameState = 0;
var form, player, playerCount;
var allPlayers, car1, car2, fuels, powerCoins, obstacles;
var cars = [];

function preload() {
  backgroundImage = loadImage("assets/BG.jpg");
  car1_img = loadImage("assets/JAG.png");
  car2_img = loadImage("assets/FORD.png");
  track = loadImage("assets/TRY1.jpg");
  fuelImage = loadImage("assets/BoostPads.png");
  powerCoinImage = loadImage("assets/coin2.png");
  obstacle1Image = loadImage("assets/rock.png");
  obstacle2Image = loadImage("assets/rock.png");
  lifeImage = loadImage("assets/4.jpg");
  //BGMusic = loadSound("Sounds/TRY4.mp3");
  Yay = loadSound("Sounds/Winn.wav");
  coin = loadSound("Sounds/coin.wav");
  WB = loadSound("Sounds/wb.wav");
  Ow = loadSound("Sounds/Obstacle.wav");
 // Ow = loadSound("Sound/Obstacle.wav");
}

function setup() {
  canvas = createCanvas(windowWidth, windowHeight);
  database = firebase.database();
  game = new Game();
  game.getState();
  game.start();
}

function draw() {
  background(backgroundImage);
  if (playerCount === 2) {
    game.update(1);
  }

  if (gameState === 1) {
    game.play();
  }
}
if (gameState === 2) { 
  game.showLeaderBoard(); 
  game.end(); }
function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
