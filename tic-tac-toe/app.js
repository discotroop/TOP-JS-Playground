let game = {  
    playerOne: {name: "bob", marker: "x"},
    playerTwo: {name: "suzy", marker: "0"},

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
    
    gameRound: function (player) {
        let marker = player.marker;
        let tiles = document.querySelectorAll(".gridBox");
        let currentPlayer = player;

        tiles.forEach(function(tile) {
            tile.addEventListener("click", function() {
                let index = (tile.firstChild.attributes.data.value);
                if (gameBoard.boardArray[index] === "") {
                    gameBoard.boardArray[index] = marker;
                    tile.classList.add("filled");
                    gameBoard.populateBoard();
                    marker = "";
                    game.victory(marker);
                    game.switchPlayer(currentPlayer);
                } else {
                    gameBoard.populateBoard();
                }
            });
        });

        if (game.draw() === "yes") {
            console.log("over");
        }
    },

    switchPlayer: function (player) {
        let switchedPlayer = player;
        if (player === this.playerOne) {
            switchedPlayer = game.playerTwo;
        } else if (player === this.playerTwo) {
            switchedPlayer = game.playerOne;
        }
        return this.gameRound(switchedPlayer);
    },
}

let gameBoard = {
    boardArray: ["","","","","","","","","",""],

    init: function () {
        return game.gameRound(game.playerOne);
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
    }
}
gameBoard.populateBoard();
gameBoard.init();

let testArea = {
    clickTest: function() {
        let testA = document.querySelector(".testDiv");
        testA.addEventListener("click", function() {
            console.log("clicked");
        });
    }
}

testArea.clickTest();
