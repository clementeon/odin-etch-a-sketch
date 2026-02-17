let edge = 8;
const container = document.querySelector(".container");
const containerSize = container.clientWidth;
const reset = document.querySelector(".reset");
const size = document.querySelector(".size");

function makeGrid(size) {
    for (let i = 0; i < size; i++) {
        const newDiv = document.createElement("div");
        for (let j = 0; j < size; j++) {
            const newbox = document.createElement("div");
            newbox.style.width = `${containerSize / size}px`;
            newbox.style.height = `${containerSize / size}px`;
            newbox.style.border = "1px solid black";
            newbox.classList.add("box");
            if (i == 0) {
                newbox.style.borderLeft = "2px solid black";
            }
            if (i == size - 1) {
                newbox.style.borderRight = "2px solid black";
            }
            if (j == 0) {
                newbox.style.borderTop = "2px solid black";
            }
            if (j == size - 1) {
                newbox.style.borderBottom = "2px solid black";
            }
            newDiv.append(newbox);
        }
        container.append(newDiv);
    }
}

function gridHover() {
    container.querySelectorAll(".box").forEach((square) => {
        square.addEventListener("mouseenter", () => {
            square.style.backgroundColor = "#28282B";
        });
    });
}

reset.addEventListener("click", () => {
    container.querySelectorAll(".box").forEach((square) => {
        square.style.backgroundColor = "";
    });
});

size.addEventListener("click", () => {
    const input = prompt("Eneter a size from 1 to 99", "64");
    if (input >= 1 && input <= 99) {
        resetGrid();
        makeGrid(input);
        gridHover();
    }
});

function resetGrid() {
    container.querySelectorAll(".box").forEach((square) => {
        square.remove();
    });
}

makeGrid(edge);
gridHover();
