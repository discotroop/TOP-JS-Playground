let game = {
    // What does the game need?
    // set end conditions.
        // one board is full
        // two a player has won.
            // a player one won
            // b player two won.

    playerOne: {name: "bob", marker: "x"},
    playerTwo: {name: "suzy", marker: "0"},

    draw: function () {
        let currentState = gameBoard.boardArray;
        for (let i = 0; i < currentState.length; i ++) {
            if (currentState[i] === "") {
                console.log("no");
                return "no";
            } else {
                console.log("yes");
            }
        }
        return "yes";
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
        console.log(switchedPlayer);
        if (player === this.playerOne) {
            console.log(this.playerTwo);
            switchedPlayer = game.playerTwo;
        } else if (player === this.playerTwo) {
            switchedPlayer = game.playerOne;
        }
        console.log(switchedPlayer);
        console.log(typeof switchedPlayer);
        return this.gameRound(switchedPlayer);
    },
}

let gameBoard = {
    boardArray: ["","","x","","","","","","",""],
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
game.gameRound(game.playerTwo);

let testArea = {
    clickTest: function() {
        let testA = document.querySelector(".testDiv");
        testA.addEventListener("click", function() {
            console.log("clicked");
        });
    }
}

testArea.clickTest();
