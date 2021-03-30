class Game{
    constructor(){}

    //read data .on()
    getState(){
        var gameStateRef = database.ref("gameState");
        gameStateRef.on("value",function(data){
            gameState = data.val();
        })


    }

    //write data .update()
    update(state){
        database.ref("/").update({
          gameState: state

        })
    }

    start(){
        if(gameState===0){
            form = new Form();
            form.display();
        }
    }

}