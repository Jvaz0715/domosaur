// Number 1
const messWithMe = document.querySelector('span.mess-with-me');
messWithMe.style.fontSize = '40px';

// Number 2
const messWithPara = document.querySelector('p.mess-with-me');
messWithPara.style.backgroundColor = 'green';

// Number 3
const hideMe = document.querySelector("#hide-me-area");
hideMe.style.display = "none";

// Number 4
const triceratops = document.querySelector('#triceratops');
triceratops.style.width = "324px";

// Event Listener 1
function changeColor() {
    messWithMe.style.color ='orange';
}
messWithMe.addEventListener('click', changeColor)

// Event Listener 2
function redBorder() {
    triceratops.style.border = "1px solid red"
}
triceratops.addEventListener('click', redBorder)

// Event Listener 3
const feathers = document.querySelector('#feathers');
function transparent() {
    feathers.style.opacity = '50%';
}
feathers.addEventListener('click', transparent);

// Event Listener 4
function changeBackground() {
    document.querySelector('#row').style.backgroundColor = "black";
}

const button = document.querySelector('#toggle')

button.addEventListener('click', changeBackground)


// Event Listener 5
const biggify = document.querySelector('#biggify');
function growImg() {
    biggify.style.width = "200px"
}

biggify.addEventListener("mouseover", growImg)


// Stretch goal 2
function returnImg() {
    biggify.style.width = "162px"
}
biggify.addEventListener("mouseout", returnImg)
