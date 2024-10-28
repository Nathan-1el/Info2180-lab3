document.addEventListener("DOMContentLoaded", function() {
    const squares = document.querySelectorAll("#board > div");
    const gameState = Array(9).fill(null);
    let currentPlayer = "X"; 
    const statusDiv = document.getElementById("status");
    const newGameButton = document.querySelector(".btn");

    
    squares.forEach(square => {
      square.classList.add("square");
    });

    
    squares.forEach((square, index) => {
      square.addEventListener("click", function() {
        
        if (!square.textContent && !statusDiv.classList.contains("you-won")) {
          square.textContent = currentPlayer;
          square.classList.add(currentPlayer);
          gameState[index] = currentPlayer;

          
          if (checkWin(gameState, currentPlayer)) {
            statusDiv.textContent = `Congratulations! ${currentPlayer} is the Winner!`;
            statusDiv.classList.add("you-won");
          } else {
            
            currentPlayer = currentPlayer === "X" ? "O" : "X";
          }
        }
      });

      
      square.addEventListener("mouseenter", function() {
        if (!square.textContent) {
          square.classList.add("hover");
        }
      });

      
      square.addEventListener("mouseleave", function() {
          square.classList.remove("hover");
      });
    });

    
    function checkWin(state, player) {
        const winningCombinations = [
            [0, 1, 2], [3, 4, 5], [6, 7, 8], 
            [0, 3, 6], [1, 4, 7], [2, 5, 8], 
            [0, 4, 8], [2, 4, 6]             
        ];

        
        return winningCombinations.some(combination =>
            combination.every(index => state[index] === player)
        );
    }

    newGameButton.addEventListener("click", function() {
        
        squares.forEach(square => {
            square.textContent = "";
            square.classList.remove("X", "O");
        });
    
        
        gameState.fill(null);
        currentPlayer = "X";
    
        
        statusDiv.textContent = "Move your mouse over a square and click to play an X or an O.";
        statusDiv.classList.remove("you-won");
    });

    
});
