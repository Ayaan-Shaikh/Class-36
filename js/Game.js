class Game{
    constructor(){
  
    }
 getstate() {
      var gameStateRef=database.ref('gameState')
      gameStateRef.on("value",function (data) {
        gameState=data.val();      
     })     
  }
  update(state){
      database.ref('/').update({
        gameState:state  
      })

  }
  start(){
      if(gameState===0){
          player=new Player()
          player.getcount()
          if(playerCount<=4){
            form=new Form()
            form.display();
          }else{
              var error=createElement('h1')
              error.html('Only 4 Players Allowed')
              error.position(130,200);
          }

         
      }
  }


}