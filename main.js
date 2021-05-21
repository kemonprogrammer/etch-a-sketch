const boxGrid = document.getElementById("boxgrid");
const button = document.getElementById("resolution");

const gridWidth = 960;

var random = function(number) {
    // random number from 0 to number
    return Math.floor(Math.random() * (number + 1));
}

// var random = function(low, high) {
//     // random number from low to high
//     return Math.floor(Math.random() * (high - low + 1)) + low;
// }


var drawCanvas = function(boxesPerSide) {
    for (let i = 1; i <= boxesPerSide; i++) {
        for (let j = 1; j <= boxesPerSide; j++) {
            const box = document.createElement("div");
            box.classList.add("col" + j.toString());
            box.classList.add("row" + i.toString());
            boxGrid.appendChild(box);

            box.addEventListener("mouseenter", () => {
                box.style.backgroundColor = `hsl(${random(360)}, ${random(100)}%, ${random(100)}%)`;
            });
        }
    }
    const boxWidth = gridWidth / boxesPerSide;

    boxGrid.style.display = "grid";
    boxGrid.style.gridTemplate = `repeat(${boxesPerSide}, ${boxWidth}px) / repeat(${boxesPerSide}, ${boxWidth}px)`;
}

var clearCanvas = function() {
    boxGrid.textContent = "";
    boxGrid.removeAttribute("style");
}

var askResolution = () => {
    const res = prompt("Enter resolution size", "10");
    if (res === null) return;
    if (res >= 100) {
        alert("Number too big, max: 100");
        askResolution();
        return;
    }
    clearCanvas();
    drawCanvas(res);
}


button.addEventListener("click", askResolution);


drawCanvas(16);