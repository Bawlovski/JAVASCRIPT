const form =  document.getElementById("form");
var x = 0;

function addLabel() {
    x++;
    if(x <= 10){
        const div =  document.createElement("div");
        div.setAttribute("id",x);

        let label = document.createElement("label");
        let input = document.createElement("input");

        label.setAttribute("for", x);
        label.textContent = "Field" + x;

        input.setAttribute("type","text");
        input.setAttribute("name",x);
        input.setAttribute("id",x);

        div.appendChild(label);
        div.appendChild(input);

        form.appendChild(div);
    }
}

function deleteLabel() {
    if (x > 0) {
        const lastDiv = document.getElementById(x);
        if (lastDiv) {
            form.removeChild(lastDiv);
            
        }
    }
    x--;
}