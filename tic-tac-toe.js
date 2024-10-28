document.addEventListener("DOMContentLoaded", function() {
    const squares = document.querySelectorAll("#board > div");
    const gameState = Array(9).fill(null);
    let currentPlayer = "X"; 

    
    squares.forEach(square => {
      square.classList.add("square");
    });

    
    squares.forEach((square, index) => {

      
      square.addEventListener("click", function() {

        if (!square.textContent) {
          square.textContent = currentPlayer;
          square.classList.add(currentPlayer);

          gameState[index] = currentPlayer;

          currentPlayer = currentPlayer === "X" ? "O" : "X";
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
    
});
