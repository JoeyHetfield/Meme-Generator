const inputText = document.getElementById('text-input');
const receberText = document.getElementById('meme-text');
const inputImage = document.getElementById('meme-insert');
const receberImage = document.getElementById('meme-image');
const container = document.querySelector('#meme-image-container')

// Colocar o texto do input na tela
inputText.addEventListener('input', function () {
  receberText.innerText = inputText.value;
});

// Me baseiei no video https://www.youtube.com/watch?v=io5FcMAdLyQ
function insertImage(event) {
  receberImage.src = URL.createObjectURL(event.target.files[0]);
}

inputImage.addEventListener('change', insertImage);

function changeFire() {
    container.style.border = '3px dashed red' 
}

function changeWater() {
    container.style.border = '5px double blue'
}

function changeEarth() {
    container.style.border = '6px groove green'
}
