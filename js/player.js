class Player {
    constructor () {
        this.index = null
        this.distance = 0
        this.name = null
    }
//Getting the PlayerCount initially from the database
    getCount () {
        var playerCountRef = database.ref ("playerCount")
        playerCountRef.on ("value", (data)=>{
            playerCount = data.val ()
        })
    }

//updating the Count of the Player when a new player is added
    updateCount (count) {
        database.ref ("/").update({
            playerCount : count
        })
    }

//updating the name of the player to appear in the database
    update () {
        var playerIndex = "players/player" + this.index
        database.ref (playerIndex).set ({
            name: this.name, 
            distance: this.distance
            
        })
    }

    static getPlayerInfo () {
        var playerInfoRef = database.ref ("players")
        playerInfoRef.on ("value", (data)=> {
            allPlayers = data.val ()
        })
    }
 }