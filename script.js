let inputText = document.getElementById('text-input');
let receberText = document.getElementById('meme-text');
let inputImage = document.getElementById('meme-insert');
let receberImage = document.getElementById('meme-image')


//Colocar o texto do input na tela
inputText.addEventListener('input', function(){
    receberText.innerText = inputText.value
})


//Me baseiei no video https://www.youtube.com/watch?v=io5FcMAdLyQ
function insertImage (event){
    receberImage.src = URL.createObjectURL(event.target.files[0]);
}

inputImage.addEventListener('change', insertImage)

