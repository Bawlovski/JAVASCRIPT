var x = 0;
const main = document.getElementById("main");
    
    // Get image sources correctly
const images = [
    document.getElementById("1"),
    document.getElementById("2"),
    document.getElementById("3")
];

function changeForward() {
    if (x < images.length - 1) {  
        images[x].style.border = "";
        x++;
        main.src = images[x].src;
        images[x].style.border = "solid 2px red";
    }
}

function changeBackward() {
    if (x > 0) {  
        images[x].style.border = "";
        x--;
        main.src = images[x].src;
        images[x].style.border = "solid 2px red";
    }
}