let original;

function changePhoto(imgOriginal) {
    original = imgOriginal.src;
    imgOriginal.src = "moodeng.jpg";
}

function restorePhoto(imgOriginal){
    imgOriginal.src = original;
}

