//capturar btns de avançar e voltar
const btnNext = document.querySelector("#next");
const btnPrev = document.querySelector("#prev");
//pictures
const pictures = document.querySelector('.img-wrapper');
const img = document.querySelectorAll("img");

const imgWidth = img [0].clientWidth;

let status = 0;

btnNext.addEventListener("click", ()=> {
    if (status < 3){
        status++;
        pictures.style.transform = `translateX(-${status * imgWidth}px)`;
    } else{
        status = 0;
        pictures.style.transform = `translateX(0px)`;
    }
});

btnPrev.addEventListener("click", () => {
    if(status > 0){
        status--;
        pictures.style.transform = `translate(-${status * imgWidth}px)`

    }else{
        status = img.length - 1;
        pictures.style.transform = `translate(-${status * imgWidth}px)`
    }
});

