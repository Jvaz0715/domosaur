const messWithMe = document.querySelector('span.mess-with-me');

const messWithPara = document.querySelector('p.mess-with-me');

messWithMe.style.fontSize = '40px';
messWithPara.style.backgroundColor = 'green';

const hideMe = document.querySelector("#hide-me-area");

hideMe.style.display = "none";

const triceratops = document.querySelector('#triceratops');

triceratops.style.width = "324px";

function changeColor() {
    messWithMe.style.color ='orange';
}

messWithMe.addEventListener('click', changeColor)

function redBorder() {
    triceratops.style.border = "1px solid red"
}

triceratops.addEventListener('click', redBorder)

const feathers = document.querySelector('#feathers');

function transparent() {
    feathers.style.opacity = '50%';
}

feathers.addEventListener('click', transparent)

const biggify = document.querySelector('#biggify');

function growImg() {
    biggify.style.width = "200px";
}

biggify.addEventListener("mouseover", growImg)

 
 function changeBackground() {
    document.querySelector('#row').style.backgroundColor = "black";
}

const button = document.querySelector('#toggle')

button.addEventListener('click', changeBackground)
