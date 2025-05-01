function factorial(n) {
    if (n == 0) {
        return 1;
    } else {
        return n * factorial(n - 1);
    }
}
const table = document.getElementById("table");
for(let x = 1; x <= 25; x++) {
    const tr = document.createElement("tr");
    const td2 = document.createElement("td");
    const td1 = document.createElement("td");
    td1.textContent = x;
    td2.textContent = factorial(x); 

    tr.appendChild(td1);
    tr.appendChild(td2);
    table.appendChild(tr);
}