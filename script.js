const firstColor = document.querySelector("#color_1");
const secondColor = document.querySelector("#color_2");
let currentDirection = "to bottom";
const gradients = document.querySelector("#gradients");
const body = document.querySelector("#body");


function setDirection(value , _this){
  let directions = document.querySelectorAll(".arrows button");
  for(let a of directions){
    a.classList.remove("active");
  }
  _this.classList.add("active");
  currentDirection = value;
}


function GenerateCode(){
  gradients.innerHTML = `background-image: linear-gradient(${currentDirection} , ${firstColor.value} , ${secondColor.value})`;

  body.style.backgroundImage = `linear-gradient(${currentDirection}, ${firstColor.value}, ${secondColor.value})`;
}


function copyText(){
  // this for copying text to clipboard
  let content = document.querySelector("#gradients").textContent;
  navigator.clipboard.writeText(content)
  alert("Gradient Copied!");
}




GenerateCode();


