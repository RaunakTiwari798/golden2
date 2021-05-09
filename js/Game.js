class Game {
    constructor(){
  
    }
  
    getState(){
      var gameStateRef  = database.ref('gameState');
      gameStateRef.on("value",function(data){
         gameState = data.val();
      })
  
    }
  
    update(state){
      database.ref('/').update({
        gameState: state
      });
    }
  
    async start(){
      if(gameState === 0){
        player = new Player();
        player.getCount();
        
        form = new Form()
        form.display();
      }
      Space1 = createSprite(100,200);
      Space1.addImage("Space1",Space1img);
      Space2 = createSprite(300,200);
      Space2.addImage("Space2",Space2img);
      Spaces = [Space1, Space2];
    }
  
    play(){
      form.hide();
     Player.getPlayerInfo();
      
      if(allPlayers !== undefined){
        var index =0;
       var x =200;
       var y;
  
        for(var plr in allPlayers){
            index = index + 1 ;
          x = displayWidth-200;
          y = displayHeight-200;
          Spaces[index-1].x = x;
          Spaces[index-1].y = y;
  
          if (index === player.index){
            Spaces[index - 1].shapeColor = "red";
            
          }
         
          
        }
  
      }
  
      if(keyIsDown(RIGHT_ARROW) && player.index !== null){
        player.distance +=10
        player.update();
      }
      if(player.distance > 3860){
        gameState = 2;
      }
     
      drawSprites();
    }
}  