
// app.js

const initialGridSize = 16; // Default grid size
const gridContainer = document.getElementById("gridContainer");
const gridButton = document.getElementById("gridButton");

/**
 * Creates a grid with the specified number of squares per side.
 * @param {number} gridSize - Number of squares per side.
 */
function createGrid(gridSize) {
    gridContainer.innerHTML = ""; // Clear existing grid

    const squareSize = 640 / gridSize; // Calculate size of each square

    for (let i = 0; i < gridSize * gridSize; i++) {
        const square = document.createElement("div");
        square.classList.add("square");
        square.style.width = `${squareSize}px`;
        square.style.height = `${squareSize}px`;

        // Change color on hover
        square.addEventListener("mouseenter", () => {
            square.style.backgroundColor = "#3498db";
        });

        // Reset color when mouse leaves
        square.addEventListener("mouseleave", () => {
            square.style.backgroundColor = "#f0f0f0";
        });

        gridContainer.appendChild(square);
    }
}

// Prompt user for grid size and create a new grid
gridButton.addEventListener("click", () => {
    const userSize = parseInt(prompt("Enter a grid size between 1 and 100:"), 10);

    if (Number.isInteger(userSize) && userSize > 0 && userSize <= 100) {
        createGrid(userSize);
    } else {
        alert("Please enter a valid number between 1 and 100.");
    }
});

// Create the initial grid
createGrid(initialGridSize);







