let img = document.getElementById("img")
img.addEventListener("mouseover",function(){
    this.src = "img/skyhover.png"
})

img.addEventListener("mouseout",function(){
    this.src = "img/skyhead.png"
})

let.btn2 = document.getElementById("btn2")
btn2.addEventListener("click",function(){
    location.href="#intro";
})