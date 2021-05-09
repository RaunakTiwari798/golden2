var gameState = 0;
var playerCount;
var allPlayers;
var distance = 0;
var database;
var form, player, game;
var Space1,Space2,Spaces;
var Space1img, Space2img;
var rock,rock2;
var rock_img,rock_2img
var ground;
var ground_img

function preload(){
  Space1img= loadImage("images/Space.png");
  Space2img= loadImage("images/Space2.png");
  ground_img = loadImage("images/bg.jpg");
  rock_2img = loadImage("images/rock2.png");
  rock_img  = loadImage("images/rock1.png");
}

function setup(){
  canvas = createCanvas(displayWidth , displayHeight);
  database = firebase.database();
  game = new Game();
  game.getState();
  game.start();
}

function draw(){
  if(playerCount === 2){
    game.update(1);
  }
  if (gameState === 1){
    game.play();
  }
}