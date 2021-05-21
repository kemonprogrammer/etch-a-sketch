const boxGrid = document.getElementById("boxgrid");
const button = document.getElementById("resolution");

const gridWidth = 960;


var drawCanvas = function(boxesPerSide) {
    for (let i = 1; i <= boxesPerSide; i++) {
        for (let j = 1; j <= boxesPerSide; j++) {
            const box = document.createElement("div");
            box.classList.add("col" + j.toString());
            box.classList.add("row" + i.toString());
            boxGrid.appendChild(box);

            box.addEventListener("mouseenter", () => {
                box.style.backgroundColor = "rgb(173, 201, 226)";
            });
        }
    }
    boxGrid.style.display = "grid";
    const boxWidth = gridWidth / boxesPerSide;
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