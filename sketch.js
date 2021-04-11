var database;
var gameState=0,playerCount=0;
var game,player,form;



function setup(){
    database=firebase.database()
    createCanvas(500,500);

    game=new Game()
    game.getstate()
    game.start()
    
   

}

function draw(){


}

