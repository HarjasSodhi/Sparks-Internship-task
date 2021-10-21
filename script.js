let form = document.querySelector('form');
let div = document.querySelector('.btn-container');
let img =document.querySelector('img');

img.addEventListener("click",()=>{
    let audio=new Audio("sound.mp3");
    audio.play();
})

let activated = false;
div.addEventListener('mouseover', () => {
    if (activated) return;
    activated = true;
    form.style.position = 'fixed'
    console.log("fixed");
})

window.addEventListener('mousemove', function (e) {
    if (!activated) return;
    form.style.top = e.clientY + "px"
    form.style.left = e.clientX + "px"
    form.style.transform = "translate(-50%,-50%)"
})