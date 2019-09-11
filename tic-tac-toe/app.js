let game = {
    playerOne: {},
    playerTwo: {},
    
    gameRound: function () {
    

    }

}

let gameBoard = {
    boardArray: ["","","","","","","","","",""],
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

// inner text.

let player = {

}