const container = document.querySelector(".img-wrapper");
const img = document.querySelectorAll(".img-wrapper img");

let status = 0;

const imgWidth = img [0].clientWidth;

function slider() {
  status++;

  //se o contador for maior que o a quantidade de imagens ele automaticamente irá voltar para a posição 0 ou seja, quando o usuário chegar na última imagem automaticamente ele retorna para a posição 0
  if (status > img.length -1) {
    status = 0;
  }

  //
  container.style.transform = `translateX(-${status * imgWidth}px)`;

  
}



// executa uma função no tempo pré-definido, nesse caso, a função será a slider e o tempo será de 2000 em 2000ms
// recebe a função a repetir e o tempo em ms - milisegundos
setInterval(slider, 2000);



