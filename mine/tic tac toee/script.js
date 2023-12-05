document.addEventListener("DOMContentLoaded", function () {
    const boxes = document.querySelectorAll(".box");
    const turnDisplay = document.querySelector(".turn");

    let currentPlayer = "X";
    let gameOver = false;

    // Add click event listeners to each box
    boxes.forEach((box) => {
        box.addEventListener("click", () => {
            if (!gameOver && !box.textContent) {
                box.textContent = currentPlayer;
                box.classList.add(currentPlayer);
                if (checkWinner(currentPlayer)) {

                    turnDisplay.textContent = `${currentPlayer} wins! Click Here to restart`;
                    gameOver = true;
                } else {
                    currentPlayer = currentPlayer === "X" ? "O" : "X";
                    turnDisplay.textContent = `${currentPlayer} turn`;
                }
            }
        });
    });

    // Check if a player has won
    function checkWinner(player) {
        const winningCombos = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6],
        ];

        return winningCombos.some((combo) => {
            return combo.every((index) => {
                return boxes[index].classList.contains(player);
            });
        });
    }

    // Reset the game
    function resetGame() {
        boxes.forEach((box) => {
            box.textContent = "";
            box.classList.remove("X", "O");
        });
        currentPlayer = "X";
        turnDisplay.textContent = "X turn";
        gameOver = false;
    }

    // Add a click event listener to the "main" div for resetting the game
    const main = document.querySelector(".rst");
    turnDisplay.addEventListener("click", (event) => {
        if (event.target.classList.contains("turn")) {
            resetGame();
        }
    });
});
