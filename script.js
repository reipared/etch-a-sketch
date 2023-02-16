const sketchpad = document.querySelector(".sketchpad");
const clearButton = document.querySelector("button");

// Create the grid
function createGrid(num) {
	for (let i = 0; i < num * num; i++) {
		const div = document.createElement("div");
		sketchpad.appendChild(div);
	}
}

createGrid(16);

// Change the color of the grid square when it's hovered over
function changeColor(e) {
	e.target.style.backgroundColor = "#000";
}

sketchpad.addEventListener("mouseover", changeColor);

// Clear the grid
function clearGrid() {
	const squares = sketchpad.querySelectorAll("div");
	squares.forEach((square) => (square.style.backgroundColor = "#fff"));
}

clearButton.addEventListener("click", clearGrid);
