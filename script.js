const image=document.getElementById("boo");
let isZoomed=false;
image.addEventListener("click", ()=> {
    if (isZoomed){image.style.transform="scale(1)"; 
} else {image.style.transform="scale(5)";
}
isZoomed=!isZoomed;
});