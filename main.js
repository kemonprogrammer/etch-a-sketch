const boxgrid = document.getElementById("boxgrid");

for (let i = 1; i <= 16; i++) {

    const row = document.createElement("div")
    boxgrid.appendChild(row);
    row.classList.add("row" + i.toString());
    for (let j = 1; j <= 16; j++) {
        const box = document.createElement("div");
        row.appendChild(box);
        box.classList.add("col" + j.toString());
        box.textContent = ((i-1) * 16 + j).toString();
    }
    boxgrid.appendChild(document.createElement("br"));
}