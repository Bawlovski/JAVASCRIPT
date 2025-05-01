const inputL = document.getElementById("left");
const inputR = document.getElementById("right");

function toLeft() {
    inputR.value = inputR.value + inputL.value;
    inputL.value = null;
}

function toRight() {
    inputL.value = inputL.value + inputR.value;
    inputR.value = null;
}