let game = {
    playerOne: {name: "bob", marker: "x"},
    playerTwo: {name: "suzy", marker: "0"},
    
    gameRound: function (player) {
        let marker = player.marker;
        let tiles = document.querySelectorAll(".gridBox");
        tiles.forEach(function(tile) {
            tile.addEventListener("click", function() {
                let index = (tile.firstChild.attributes.data.value);
                gameBoard.boardArray[index] = marker;
                gameBoard.populateBoard();
            });
        });
    
    }
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

let player = {

}

let testArea = {
    clickTest: function() {
        let testA = document.querySelector(".testDiv");
        testA.addEventListener("click", function() {
            console.log("clicked");
        });
    }
}

testArea.clickTest();
