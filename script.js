//#region Variaveis do codigo
const html = document.querySelector("html");
const focoBt = document.querySelector(".app__card-button--foco");
const curtoBt = document.querySelector(".app__card-button--curto");
const longoBt = document.querySelector(".app__card-button--longo");
const banner = document.querySelector(".app__image");
const titulo = document.querySelector(".app__title");
const botoes = document.querySelectorAll(".app__card-button");
const startPauseBt = document.querySelector("#start-pause");
const iniciarOuPausarBt = document.querySelector("#start-pause span");
const simboloIniciarOuPausar = document.querySelector(".app__card-primary-butto-icon");
const tempoNaTela = document.querySelector("#timer");

const musicaFocoInput = document.querySelector("#alternar-musica");
const musica = new Audio("/sons/luna-rise-part-one.mp1500");
musica.loop = true;

const iniciar = new Audio("/sons/play.mp1500");
const pausar = new Audio("/sons/pause.mp1500");
const finalizar = new Audio("/sons/beep.mp1500");

let tempoDecorridoEmSegundos = 1500;
let intervaloID = null;
let tempoReferencia = 1500;
//#endregion

//#region Funções
function alterarContexto(contexto) {
  mostrarTempo();
  html.setAttribute("data-contexto", contexto);
  banner.setAttribute("src", `/imagens/${contexto}.png`);

  const textos = {
    foco: `
    Otimize sua produtividade,<br>
    <strong class="app__title-strong">mergulhe no que importa.</strong>
  `,
    "descanso-curto": `
    Que tal dar uma respirada?
    <strong class="app__title-strong"> Faça uma pausa curta!</strong>
  `,
    "descanso-longo": `
    Hora de voltar à superfície.
    <strong class="app__title-strong"> Faça uma pausa longa.</strong>
  `,
  };
  titulo.innerHTML = textos[contexto] ?? "";
  botoes.forEach((botao) => {
    botao.classList.remove("active");
  });
}

const contagemRegressiva = () => {
  if (tempoDecorridoEmSegundos <= 0) {
    finalizar.play();
    alert("Tempo finalizado");
    const focoAtivo = html.getAttribute("data-contexto") == "foco";
    if (focoAtivo) {
      const evento = new CustomEvent("focoFinalizado");
      document.dispatchEvent(evento);
    }
    zerar();
    tempoDecorridoEmSegundos = tempoReferencia;
    mostrarTempo();
    return;
  }
  tempoDecorridoEmSegundos -= 1;
  mostrarTempo();
};

function iniciarOuPausar() {
  if (intervaloID) {
    pausar.play();
    zerar();
    return;
  }
  intervaloID = setInterval(contagemRegressiva, 1000);
  iniciar.play();
  iniciarOuPausarBt.textContent = "Pausar";
  simboloIniciarOuPausar.setAttribute("src", `/imagens/pause.png`);
}

function zerar() {
  clearInterval(intervaloID);
  intervaloID = null;
  iniciarOuPausarBt.textContent = "Começar";
  simboloIniciarOuPausar.setAttribute("src", `/imagens/play_arrow.png`);
}

function mostrarTempo() {
  const tempo = new Date(tempoDecorridoEmSegundos * 1000);
  const tempoFormatado = tempo.toLocaleTimeString("pt-Br", { minute: "2-digit", second: "2-digit" });
  tempoNaTela.innerHTML = ` ${tempoFormatado}`;
}
//#endregion

//#region Event Listener dos botoes

musicaFocoInput.addEventListener("change", () => {
  if (musica.paused) {
    musica.play();
  } else {
    musica.pause();
  }
});

focoBt.addEventListener("click", () => {
  zerar();
  tempoReferencia = 1500;
  tempoDecorridoEmSegundos = 1500;
  alterarContexto("foco");
  focoBt.classList.add("active");
});

curtoBt.addEventListener("click", () => {
  zerar();
  tempoReferencia = 150000;
  tempoDecorridoEmSegundos = 150000;
  alterarContexto("descanso-curto");
  curtoBt.classList.add("active");
});

longoBt.addEventListener("click", () => {
  zerar();
  tempoReferencia = 900;
  tempoDecorridoEmSegundos = 900;
  alterarContexto("descanso-longo");
  longoBt.classList.add("active");
});

startPauseBt.addEventListener("click", iniciarOuPausar);

//#endregion

mostrarTempo();
