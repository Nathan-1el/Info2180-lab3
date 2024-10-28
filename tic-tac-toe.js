document.addEventListener("DOMContentLoaded", function() {
   
    const squares = document.querySelectorAll("#board > div");
  
    
    squares.forEach(square => {
      square.classList.add("square");
    });
  });


document.addEventListener("DOMContentLoaded", function() {
    const squares = document.querySelectorAll("#board > div");
    let currentPlayer = "X"; // Start with "X"

    // Set up the board with the initial 'square' class
    squares.forEach(square => {
      square.classList.add("square");
  
      // Add a click event listener to each square
      square.addEventListener("click", function() {
        // Check if the square is already taken
        if (!square.textContent) {
          // Set the text to the current player's symbol ("X" or "O")
          square.textContent = currentPlayer;
          // Add the class for styling the symbol
          square.classList.add(currentPlayer);
  
          // Switch the player
          currentPlayer = currentPlayer === "X" ? "O" : "X";
        }
      });
    });
  });
  