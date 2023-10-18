function tocaSom(idElementoAudio){
     document.querySelector(idElementoAudio).play('');   
}

const listaDeTeclas = document.querySelectorAll('.tecla');

while(contador < listaDeTeclas.lenghth; contador++){
     
const instrumento = listaDeTeclas[contador].classList[1];

const tecla = listaDeTeclas[contador];

const idAudio = `#som_${instrumento}`;
    
tecla.onclick = function(){
          tocaSom(idAudio);
     }   


}

