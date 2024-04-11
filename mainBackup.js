//capturar btns de avançar e voltar
const btnNext = document.querySelector("#next");
const btnPrev = document.querySelector("#prev");
//armazenar as imagens em vetores e constantes
const pictures = document.querySelector('.img-wrapper');
const img = document.querySelectorAll("img");

//.client define o tamanho da imagem

const imgWidth = img [0].clientWidth;

let status = 0;

btnNext.addEventListener("click", ()=> {
    if (status < 3){
        /* soma + 1 pra cada vez que clicar */
        status++;
       /* para avançar uma imagem usaremos o a animação do translateX (eixo horizontal), então, multiplicaremos a resolução que obtivemos na img[0].clientWidth multiplicado pelo valor da váriavel contadora (status)  
       ---------------------------------------------------------------------------------------------------------------------------------------------
       Em suma, a imagem fará uma animação para avançar apartir daquela resolução conseguida no inicio, assim alterando para a próxima imagem 
       Isso ocorre, porque as imagens estão em flex, e o flex-box por padraão deixa um elemento do lado do outro. Para percorrer as imagens, basta
       multipicar o valor para exibir o próximo elemento*/
        pictures.style.transform = `translateX(-${status * imgWidth}px)`;
    } else{
        // se exceder o limite ele zera o status
        status = 0;
        pictures.style.transform = `translateX(0px)`;
    }
});

btnPrev.addEventListener("click", () => {
    /*  */
    if(status > 0){

        status--;
        /* mesma lógica aplicada antes, mas como a variável status está decrementando, ele irá para o lado oposto */
        pictures.style.transform = `translateX(-${status * imgWidth}px)`

    }else{
        /* se exceder, ele volta. */
        status = img.length - 1;
        pictures.style.transform = `translateX(-${status * imgWidth}px)`
    }
});

