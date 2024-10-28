document.addEventListener("DOMContentLoaded", function() {
    const squares = document.querySelectorAll("#board > div");
    const gameState = Array(9).fill(null);
    let currentPlayer = "X"; 
    const statusDiv = document.getElementById("status");

    // Add "square" class to all squares
    squares.forEach(square => {
      square.classList.add("square");
    });

    // Add event listeners for clicks and hover effects
    squares.forEach((square, index) => {
      square.addEventListener("click", function() {
        // Check if the square is empty before placing a move
        if (!square.textContent && !statusDiv.classList.contains("you-won")) {
          square.textContent = currentPlayer;
          square.classList.add(currentPlayer);
          gameState[index] = currentPlayer;

          // Check if the current player has won
          if (checkWin(gameState, currentPlayer)) {
            statusDiv.textContent = `Congratulations! ${currentPlayer} is the Winner!`;
            statusDiv.classList.add("you-won");
          } else {
            // Switch player if no win
            currentPlayer = currentPlayer === "X" ? "O" : "X";
          }
        }
      });

      // Add hover effect on mouseenter
      square.addEventListener("mouseenter", function() {
        if (!square.textContent) {
          square.classList.add("hover");
        }
      });

      // Remove hover effect on mouseleave
      square.addEventListener("mouseleave", function() {
          square.classList.remove("hover");
      });
    });

    // Function to check if the current player has won
    function checkWin(state, player) {
        const winningCombinations = [
            [0, 1, 2], [3, 4, 5], [6, 7, 8], // rows
            [0, 3, 6], [1, 4, 7], [2, 5, 8], // columns
            [0, 4, 8], [2, 4, 6]             // diagonals
        ];

        // Return true if any winning combination is matched by the player
        return winningCombinations.some(combination =>
            combination.every(index => state[index] === player)
        );
    }
});
