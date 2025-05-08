var x = 1;
var y = 1;
const main = document.getElementById("main");

const images = [
    document.getElementById('1'),
    document.getElementById('2'),
    document.getElementById('3'),
];
    
    // Get image sources correctly
const imagessrc = [
    "wisp1.jpg",
    "wisp2.jpg",
    "wisp3.jpg",
    "wisp4.jpg",
    "wisp5.jpg",
    "wisp6.jpg"
];


function loadCustom() {
    main.src= document.getElementById("2").src;
    images[x].style.border = "solid 2px red";
}

function clicked(image){
    images[x].style.border = "";
    x = image.id -1;
    main.src = images[x].src;
    images[x].style.border = "solid 2px red";
}

function changeForward() {
    
    if (x < images.length - 1) {  
        images[x].style.border = "";
        x++;
        y++;
        main.src = imagessrc[y];
        images[x].style.border = "solid 2px red";
    }else {
        
        if(x < imagessrc.length - 1 && y < imagessrc.length - 1) {
            images[x].style.border = "";
            x = 0;
            
            
            images[0].src = imagessrc[y + 1];
            images[1].src = imagessrc[y + 2];
            images[2].src = imagessrc[y + 3];
            y++;
            main.src = imagessrc[y];
            images[x].style.border = "solid 2px red";
           
        }else {
            images[x].style.border = "";
            x = 0;
            y = 0;
            
            images[0].src = imagessrc[0];
            images[1].src = imagessrc[1];
            images[2].src = imagessrc[2];
            main.src = imagessrc[0];
            images[x].style.border = "solid 2px red"; 
        }
        
    }
}

function changeBackward() {
    if (x > 0) {  
        images[x].style.border = "";
        x--;
        y--;
        main.src = imagessrc[y];
        images[x].style.border = "solid 2px red";
    }else {
        
        if(x <= 0 && y <= 0) {
            y = imagessrc.length - 1;
            x = images.length - 1;
            images[0].style.border = "";
            
            
            
            images[2].src = imagessrc[y];
            images[1].src = imagessrc[y- 1];
            images[0].src = imagessrc[y - 2];
            
            main.src = imagessrc[y];
            images[x].style.border = "solid 2px red";
           
        }else {
            x = images.length - 1;
            y--;
            
            
            images[0].style.border = "";
            
            
            images[0].src = imagessrc[y - 2];
            images[1].src = imagessrc[y - 1];
            images[2].src = imagessrc[y];
            main.src = imagessrc[x];
            images[x].style.border = "solid 2px red"; 
        }
        
    }
}