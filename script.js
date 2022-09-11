let inputText = document.getElementById('text-input');
let receberText = document.getElementById('meme-text');

inputText.addEventListener('input', function(){
    receberText.innerHTML = inputText.value

})