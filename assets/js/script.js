const relogioEscopo = () => {
  function criarSegundos(segundos) {
    const date = new Date(
      segundos * 1000
    ); /** é necessário colocar o x1000 pois os segudos veem em milessimos de segundos */
    return date.toLocaleTimeString("pt-Br", {
      hour12: false /**transformar em 24horas */,
      timeZone: "GMT" /**zerar o formato atual */,
    });
  }
  const relogio = document.querySelector(".relogio");
  let segundos = 0;
  let timer;

  function iniciarRelogio() {
    timer = setInterval(function () {
      segundos++; /**para poder adicionar mais 1 a variavel segundos */
      relogio.innerHTML =
        criarSegundos(
          segundos
        ); /**chamar a fumção e substituir o paragrafo criado no html */
    }, 1000);
  }
  
  document.addEventListener("click", function (e) {
    /** o document.addEventListener capta todos eventos da pagina e neste o 'click' faz com ele apenas capt aquilo que for clicado */ const el =
      e.target; /** o e.target serve para capta o evento clicado */
    if (el.classList.contains("iniciar")) {
      /** el.classList.contains verifica se onde o foi captado com e.target contem algum classe, neste caso o ex é o 'iniciar'. O mesmo acontece nos If abaixo*/
      relogio.classList.remove(
        "pausado"
      ); /**removendo a class criada que modifica a cor do paragrafo */
      clearInterval(
        timer
      ); /** serve para limpar a função do setInterval e neste caso e presente no iniciar para que o codigo só passe a contar um segundo por vez e caso nao tenha este limpar o codigo sobe outra contagem encima e fica de dois em dois segundos*/
      iniciarRelogio(); /**chamando a função do setInterval dentro do if */
    }
    if (el.classList.contains("pausar")) {
      clearInterval(
        timer
      ); /** serve para limpar a função do setInterval e neste caso ele ira pausar a contagem */
      relogio.classList.add(
        "pausado"
      ); /** adicionando a class criada que modificada a cor do paragrafo */
    }

    if (el.classList.contains("zerar")) {
      clearInterval(
        timer
      ); /** serve para limpar a função do setIntervale neste caso ele irá pausar tambem e o innerHtml que vai alterar para que pareça que zerou*/
      relogio.innerHTML =
        "00:00:00"; /**toda vez que captar o zerar ele ira alterar o paragrafo para o '00:00:00' */
      segundos = 0; /**vai fazer com que a viriavel que começa que contem a contagem volte ao valor original que de 0 */
      relogio.classList.remove(
        "pausado"
      ); /**removendo a class criada que modifica a cor do paragrafo */
    }
  });

};
relogioEscopo();
