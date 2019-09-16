let game = {  
    playerOne: {which: "Player 1", name: "Bob", marker: "x"},
    playerTwo: {which: "Player 2", name: "Suzy", marker: "0"},
    isPlayerOne: true,

    draw: function () {
        let currentState = gameBoard.boardArray;
        for (let i = 0; i < currentState.length; i ++) {
            if (currentState[i] === "") {
                return "no";
            }
        }
        this.setNewGame();
        return "yes";
    },

    victory: function () {
        let victories = [[0,1,2], [3,4,5], [6,7,8], [0,3,6], [1,4,7], [2,5,8], [0,4,8], [2,4,6]];
        let tooCheck = gameBoard.boardArray;
        let result = "no";
        let w = 0;
        let currentPlayer = this.getCurrentPlayer();
        let marker = currentPlayer.marker;

        for (let i = 0; i < victories.length; i++) {
            let victory = victories[i]
            for (let j = 0; j < victory.length; j++) {
                if (tooCheck[victory[j]] === marker) {
                    w++;
                    console.log(w)
                    if (w === 3) {
                        result = "yes";
                        return result;
                    }
                } else {
                    w=w;
                }
            }
            w = 0;
        }
        this.setNewGame();
        return result;
    },
    getCurrentPlayer: function () {
        let currentPlayer = game.playerOne;
        if (game.isPlayerOne) {
            currentPlayer = game.playerOne;
        } else {
            currentPlayer = game.playerTwo;
        }
        return currentPlayer;
    },

    moves: function (tile) {
        let index = (tile.firstChild.attributes.data.value);
        return index;
    },

    gameRound: function () {
        let currentPlayer = this.getCurrentPlayer();
        let marker = currentPlayer.marker;
        let tiles = document.querySelectorAll(".gridBox");
        gameBoard.displayPlayerName();

        tiles.forEach(function(tile) {
            tile.addEventListener("click", function() {
                let index = (tile.firstChild.attributes.data.value);
                if (gameBoard.boardArray[index] === "") {
                    gameBoard.boardArray[index] = marker;
                    tile.classList.add("filled");
                    endMove();
                    marker = game.getCurrentPlayer().marker;
                } else {
                    gameBoard.populateBoard();
                }
            });
        });
        let endMove = function () {
            gameBoard.populateBoard();
            game.checkForEndGame();
            game.switchPlayer();
        };
    },

    switchPlayer: function () {
        game.isPlayerOne = !game.isPlayerOne;
        gameBoard.displayPlayerName();
    },

    checkForEndGame: function () {
        let victory = this.victory();
        let draw = this.draw();
        if (victory === "yes") {
            gameBoard.victory();
        } else if (draw === "yes") {
            gameBoard.draw();
        } else {
            return;
        }
    },

    setNewGame: function () {
        let click = gameBoard.victoryBoard.newGame;
        click.addEventListener("click", function () {
            gameBoard.newGame();
        });
    },

 }

let gameBoard = {
    boardArray: ["","","","","","","","","",""],

    displayPlayerName: function () {
        let currentPlayer = game.getCurrentPlayer();
        let nameSpace = document.querySelector(".gameContainer>div>h2");
        nameSpace.innerText = `${currentPlayer.which} : ${currentPlayer.name}`;
    },

    getPlayerName: function () {
        let newName = prompt("What's your name?", "name");
        return newName;
    },

    changePlayerName: function () {
        let changeNameClicked = document.querySelector(".gameContainer>div>button");
        changeNameClicked.addEventListener("click", function () {
            let newName = gameBoard.getPlayerName();
            let currentPlayer = game.getCurrentPlayer();
            currentPlayer.name = newName;
            return gameBoard.displayPlayerName(currentPlayer);
        });
    },

    populateBoard: function () {
        let tiles = document.querySelectorAll("h3");
        for (let i = 0; i < tiles.length; i++) {
            tiles[i].setAttribute("data", i);
        };
        
        tiles.forEach(function (tile) {
            let index = (tile.attributes.data.value);
            tile.innerText = gameBoard.boardArray[index].toUpperCase();
        });
        this.boardArray.length = 9;
        this.displayPlayerName();        
    },

    init: function () {
        return gameBoard.populateBoard(),
        gameBoard.displayPlayerName(),
        gameBoard.changePlayerName(),
        game.gameRound();
    }, 
    victoryBoard: {
        div: document.querySelector(".endGame"),
        newGame: document.querySelector(".endGame>button"),
        h2: document.querySelector(".endGame>h2")
    },

    newGame: function () {
        this.boardArray = ["","","","","","","","","",""],
        game.isPlayerOne = true;
        this.populateBoard();
        this.victoryBoard.div.classList.add("invisible");
        this.victoryBoard.h2.classList.add("invisible");
        this.victoryBoard.newGame.classList.add("invisible");
    },

    victory: function () {
        let winner = document.querySelector(".endGame>h2");
        winner.innerText = `Victory! ${game.getCurrentPlayer().name} Won!`;
        this.victoryBoard.div.classList.remove("invisible");
        this.victoryBoard.h2.classList.remove("invisible");
        this.victoryBoard.newGame.classList.remove("invisible");
    },

    draw: function () {
        let textDisplay = document.querySelector(".endGame>h2");
        textDisplay.innerText = `It's a tie! better luck next time ${game.playerOne.name} and ${game.playerTwo.name}`;
        this.victoryBoard.div.classList.remove("invisible");
        this.victoryBoard.h2.classList.remove("invisible");
        this.victoryBoard.newGame.classList.remove("invisible");
    }
}
gameBoard.init();

