const boxGrid = document.getElementById("boxgrid");
const colorChooser = document.getElementById("colorChooser");
const displayGrid = document.getElementById("displayGrid");
const resolutionSlider = document.getElementById("resolutionSlider");
const resolutionValue = document.getElementById("resolutionValue");

const gridWidth = 960;

const random = function(number) {
  // random number from 0 to number
  return Math.floor(Math.random() * (number + 1));
}

const drawBox = e => {
  const box = e.target;
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
}

const drawCanvas = function(boxesPerSide) {
  for (let i = 1; i <= boxesPerSide; i++) {
    for (let j = 1; j <= boxesPerSide; j++) {
      const box = document.createElement("div");
      box.classList.add("col" + j.toString());
      box.classList.add("row" + i.toString());
      // l100 for lightness = 100%
      box.classList.add("l100");
      boxGrid.appendChild(box);
      box.addEventListener("mouseenter", drawBox);
    }
  }
  const boxWidth = gridWidth / boxesPerSide;

  boxGrid.style.display = "grid";
  boxGrid.style.gridTemplate = `repeat(${boxesPerSide}, ${boxWidth}px) / repeat(${boxesPerSide}, ${boxWidth}px)`;
}

const clearCanvas = () => {
  boxGrid.textContent = "";
  boxGrid.removeAttribute("style");
}

displayGrid.addEventListener("click", () => {
  console.log("displayed");
  boxGrid.style.grid
  boxGrid.style.gridGap = "10px";
});


resolutionSlider.value = "16";

resolutionSlider.oninput = () => {
  // display value while sliding
  resolutionValue.textContent = resolutionSlider.value;
}

resolutionSlider.onchange = () => {
  // change grid after mouseup
  clearCanvas();
  drawCanvas(resolutionSlider.value);
}

drawCanvas(16);