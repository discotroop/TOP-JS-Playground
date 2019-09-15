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
        return "yes";
    },

    victory: function (marker) {
        let victories = [[0,1,2], [3,4,5], [6,7,8], [0,3,6], [1,4,7], [2,5,8], [0,4,8], [2,4,6]];
        let tooCheck = gameBoard.boardArray;
        let result = "no";
        let w = 0;

        for (let i = 0; i < victories.length; i++) {
            let victory = victories[i]
            for (let j = 0; j < victory.length; j++) {
                if (tooCheck[victory[j]] === marker) {
                    w++;
                    if (w === 3) {
                        return "victory";
                    }
                } else {
                    w=w;
                }
                if (w === 3) {
                    result = "victory";
                } else {
                    result = "no";
                }
            }
            w = 0;
        }
        return result;
    },
    
    gameRound: function () {
        let currentPlayer = game.playerOne;
        if (game.isPlayerOne) {
            currentPlayer = game.playerOne;
        } else {
            currentPlayer = game.playerTwo;
        }
        let marker = currentPlayer.marker;
        let tiles = document.querySelectorAll(".gridBox");
        
        tiles.forEach(function(tile) {
            tile.addEventListener("click", function() {
                let index = (tile.firstChild.attributes.data.value);
                if (gameBoard.boardArray[index] === "") {
                    gameBoard.boardArray[index] = marker;
                    tile.classList.add("filled");
                    marker = "";
                    game.victory(marker);
                    game.switchPlayer(currentPlayer);
                    gameBoard.populateBoard();

                } else {
                    gameBoard.populateBoard();
                }
            });
        });

        if (game.draw() === "yes") {
            console.log("over");
        }
    },

    switchPlayer: function () {
        game.isPlayerOne = !game.isPlayerOne;
        return this.gameRound();
    },
}

let gameBoard = {
    boardArray: ["","","","","","","","","",""],

    displayPlayerName: function (player) {
        let nameSpace = document.querySelector(".gameContainer>div>h2");
        nameSpace.innerText = `${player.which} : ${player.name}`;
    },

    getPlayerName: function () {
        let newName = prompt("What's your name?", "name");
        return newName;
    },

    changePlayerName: function () {
        let changeNameClicked = document.querySelector(".gameContainer>div>button");
        changeNameClicked.addEventListener("click", function () {
            console.log("clicked");
            gameBoard.getPlayerName();
        })
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
    },

    init: function () {
        return game.gameRound();
    },
}
gameBoard.populateBoard();
gameBoard.init();
gameBoard.changePlayerName();

let testArea = {
    clickTest: function() {
        let testA = document.querySelector(".testDiv");
        testA.addEventListener("click", function() {
            console.log("clicked");
        });
    }
}

testArea.clickTest();
