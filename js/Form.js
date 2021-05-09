class Form {

    constructor() {
      this.input = createInput("Name").attribute("placeholder", "Name");
      this.button = createButton('Play');
      this.greeting = createElement('h2');
      this.title = createElement('h2');
      this.reset = createButton('Reset');
  
    }
    hide(){
      this.greeting.hide();
      this.button.hide();
      this.input.hide();
      this.title.hide();
    }
  
    display(){
        this.title.html("Spaceship Warrior");
        this.title.style("font-size","70px");
        this.title.style("color","red");
        this.title.position(760,200);
    
        this.input.position(890, displayHeight/2 - 80);
        this.input.style("font-size","20px")
        this.button.position(980,displayHeight/2);
        this.button.style("font-size","20px")
        this.reset.position(displayWidth-100,20);
    
        this.button.mousePressed(()=>{
          this.input.hide();
          this.button.hide();
          this.title.hide();
          player.name = this.input.value();
          playerCount+=1;
          player.index = playerCount;
          player.update();
          player.updateCount(playerCount);
          this.greeting.html(" Hello " + player.name + " are you ready for Challenge ")
          this.greeting.position(600, displayHeight/4);
          this.greeting.style("font-size","50px");
          this.greeting.style("color","darkblue")
        });
        
        this.reset.mousePressed(()=>{
          player.updateCount(0);
          game.update(0);
        });
      }
    }
      