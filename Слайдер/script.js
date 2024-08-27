let names = document.querySelectorAll(".slider_name")
let circles = document.querySelectorAll(".circle")
let images = document.querySelectorAll(".slider-img")
let arrowL = document.getElementById("arLeft")
let arrowR = document.getElementById("arRight")
let area = document.querySelectorAll(".slider_photo")

names[0].classList.add("active_name")
circles[0].classList.add("active_circle")
images[0].classList.add("active_image")


let counter = 0;

for(let i = 0; i < circles.length; i++){
    circles[i].addEventListener("click",() => {
        for( let j = 0; j < circles.length; j++){
            circles[j].classList.remove("active_circle")
            images[j].classList.remove("active_image")
        }
        counter = i;
        circles[counter].classList.add("active_circle");
        images[counter].classList.add("active_image");
    })
}

arrowL.addEventListener("click", ()=>{
    for( let j = 0; j < circles.length; j++){
        circles[j].classList.remove("active_circle")
        images[j].classList.remove("active_image")
    }
    counter--
    if(counter < 0){
        counter = circles.length-1
    }
    circles[counter].classList.add("active_circle");
    images[counter].classList.add("active_image");
})

arrowR.addEventListener("click", ()=>{
    for( let j = 0; j < circles.length; j++){
        circles[j].classList.remove("active_circle")
        images[j].classList.remove("active_image")
    }
    counter++
    if(counter > circles.length-1){
        counter = 0
    }
    circles[counter].classList.add("active_circle");
    images[counter].classList.add("active_image");
})

for(let i = 0; i < names.length; i++){
    names[i].addEventListener("click", () => {
        for(let j = 0; j < names.length; j++){
            names[j].classList.remove("active_name")
        }
        counter = i;
        names[counter].classList.add("active_name")
    })
}
/* попробовал много способов, 
решил не портить работающий хоть как-то код*/