const colorArray = ['red', 'blue', 'green'];
let colorIndex = 0;

document.querySelector('button').addEventListener('click', changeColor);

function changeColor() {
    document.body.style.backgroundColor = colorArray[++colorIndex % 3];
}