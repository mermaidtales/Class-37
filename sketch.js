var database;
var gameState = 0;
var playerCount;
var form, player, game;
var allPlayers;

function setup(){
  database = firebase.database();
  console.log(database);
  createCanvas(400,400);

  //creating a new object for the game
  game = new Game ()
  game.getState ()

  //starting the game
  game.start ()

}

function draw(){
  if (playerCount === 4) {
    game.update (1)
  }

  if (gameState === 1) {
    clear ()
    game.play ()
  }
  
}
