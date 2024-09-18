//--------------Menu Icon-----------------------------//
var menuIcon = document.querySelector('.menu-icon');
var ul = document.querySelector('.ul')

menuIcon.addEventListener('click',()=>{
    if (ul.classList.contains('ativo')){
        ul.classList.remove('ativo')
        document.querySelector('.menu-icon img').src = 'imagens/icone de menu.png'
    } else{
        ul.classList.add('ativo')
        document.querySelector('.menu-icon img').src = 'imagens/fechar.png'
    }

})
//-------------- audio volume media -------------------//
var audio = document.getElementById('audio')
audio.volume = 0.2


