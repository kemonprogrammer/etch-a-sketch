const boxgrid = document.getElementById("boxgrid");

for (let i = 1; i <= 16; i++) {

    for (let j = 1; j <= 16; j++) {
        const box = document.createElement("div");
        box.classList.add("col" + j.toString());
        box.classList.add("row" + i.toString());
        box.textContent = ((i-1) * 16 + j).toString();
        boxgrid.appendChild(box);
    }
}