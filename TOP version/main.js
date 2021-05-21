const boxGrid = document.getElementById("boxgrid");
const button = document.getElementById("resolution");
const colorChooser = document.getElementById("colorChooser");

const gridWidth = 960;

var random = function(number) {
    // random number from 0 to number
    return Math.floor(Math.random() * (number + 1));
}


var drawCanvas = function(boxesPerSide) {
    for (let i = 1; i <= boxesPerSide; i++) {
        for (let j = 1; j <= boxesPerSide; j++) {
            const box = document.createElement("div");
            box.classList.add("col" + j.toString());
            box.classList.add("row" + i.toString());
            box.classList.add("l100");

            boxGrid.appendChild(box);

            box.addEventListener("mouseenter", () => {
                if (colorChooser.value === "cl") {
                    box.style.backgroundColor = `hsl(${random(360)}, ${random(100)}%, ${random(100)}%)`;
                } else {
                    // pick lXX for lightness value
                    let className = String(box.classList);
                    let lightness = +className.slice(className.lastIndexOf("l") + 1, className.length);
                    if (lightness > 0) {
                        box.classList.remove(`l${lightness}`);
                        lightness -= 10;
                        box.classList.add(`l${lightness}`);
                    }
                    box.style.backgroundColor = `hsl(0, 0%, ${lightness}%)`;
                }
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
    if (res > 100) {
        alert("Number too big, max: 100");
        askResolution();
        return;
    }
    clearCanvas();
    drawCanvas(res);
}


button.addEventListener("click", askResolution);


drawCanvas(16);