function createGrid(size) {
    const container = document.getElementById("container");
    container.innerHTML = ""; // Clear existing grid squares
    container.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    container.style.gridTemplateRows = `repeat(${size}, 1fr)`;

    for (let i = 0; i < size * size; i++) {
        const div = document.createElement("div");
        div.classList.add("grid-square");
        div.addEventListener("mouseover", changeColor);
        container.appendChild(div);
    }
}

function changeColor(event) {
    event.target.style.backgroundColor = `rgb(${randomColorValue()}, ${randomColorValue()}, ${randomColorValue()})`;
}

function randomColorValue() {
    return Math.floor(Math.random() * 256);
}

function resetGrid() {
    let size = parseInt(prompt("Enter new grid size (Max: 100):", 16));
    if (size > 100) size = 100;
    createGrid(size);
}

document.getElementById("reset").addEventListener("click", resetGrid);

// Initial 16x16 grid
createGrid(16);
