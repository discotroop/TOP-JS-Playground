Tic-Tac-Toe for the Odin Project.

// 1. Store gameboard inside of Array in gameboard object
2. players should be storer in objects.
3. object to control flow of game as well.
"Have as little global code as possible."
Rule of thumb:
--IF you only need ONE of something (gameboard, displayController), use a module.
--IF you need MULTIPLE of something use factories.

// 4. Write js to render contents of array to game board.
5. Write js to let players are to game board in DOM by clicking.
    a. remember to prevent clicking on played areas.

Big NOTE "Think carefully about where each bit of logic should reside. Each little piece of functionality should be able to fit in the:
     game, 
     player or 
     gameboard 
     objects.. but take care to put them in “logical” places. Spending a little time brainstorming here can make your life much easier later!"


6. Build the logic that checks for when the game is over! Should check for 3-in-a-row and a tie.
7. Clean up the interface to allow players to put in their names, 
    a. include a button to start/restart the game 
    b. and add a display element that congratulates the winning player!

Optional - If you’re feeling ambitious create an AI so that a player can play against the computer!
    Start by just getting the computer to make a random legal move.
    Once you’ve gotten that, work on making the computer smart. It is possible to create an unbeatable AI using the minimax algorithm (read about it here, some googling will help you out with this one)
    If you get this running definitely come show it off in the chatroom. It’s quite an accomplishment!

let game = {
    playerOne: {name: "playerOne"},
    playerTwo: {name: "playerTwo"},
    
    gameRound: function (passedPlayer) {
        let player = passedPlayer;
        let tiles = document.querySelectorAll(".gridBox");
        tiles.forEach(function(tile) {
            tile.addEventListener("click", gamePlay(tile, player));
            });

        function gamePlay (tile, player) {
            console.log(player);
            let index = (tile.firstChild.attributes.data.value);
                if (player === "playerOne") {
                gameBoard.boardArray[index] = "x";
                } else if (player === "playerTwo") {
                gameBoard.boardArray[index] = "o";
                }
                gameBoard.populateBoard();
        }
    }
}