class Form {
    constructor () {
         this.input = createInput ("name")
        this.button = createButton ("play")
         this.greeting = createElement ("h3")
    }
    hide () {
        this.greeting.hide ()
        this.button.hide ()
        this.input.hide ()
    }

    display () {
        //displaying the title and giving it a position
        var title = createElement ("h2")
        title.html ("Car Racing Game");
        title.position (130, 0)
    
        //creating the input box for the name
       
    
        //creating the positions for the button and input box
        this.input.position (130, 160);
        this.button.position (250, 200);
    
        this.button.mousePressed (()=>{
            //when pressed the input box and button disappear
            this.input.hide ()
            this.button.hide ()
        
            //when pressed the player count increases and the player name is added to the database
            player.name = this.input.value ()
            playerCount += 1
            player.index = playerCount
            player.update ()
            player.updateCount (playerCount)
        
            //when pressed the name of the player is displayed
            this.greeting.html ("hello " + player.name)
            this.greeting.position (130, 100)
        })
    }
}