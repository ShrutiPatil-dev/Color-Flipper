const colors = ["Green","Blue","Red","Aqua","Pink","#b17b70","#C1A7EC"]

const btn = document.getElementById("btn")
const color = document.querySelector(".color");

btn.addEventListener("click",function(){
    const randomNumber = handleClick();

    document.body.style.backgroundColor = colors[randomNumber];
    color.textContent = colors[randomNumber];
})

function handleClick(){
    return Math.floor(Math.random() * colors.length)
}