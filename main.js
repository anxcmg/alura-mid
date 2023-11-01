function tocaSom(idElementoAudio){
     document.querySelector(idElementoAudio).play('');   
}

const listaDeTeclas = document.querySelectorAll('.tecla');

for(contador < listaDeTeclas.lenghth; contador++){
     
const instrumento = listaDeTeclas[contador].classList[1];

const tecla = listaDeTeclas[contador];

const idAudio = `#som_${instrumento}`;
    
tecla.onclick = function(){
          tocaSom(idAudio);
     };
}s