const audioButton = document.getElementById('button');
const myAudio = document.getElementById('VENTANNI');
const progressBar = document.getElementById('progressBar');
const nextButton = document.getElementById('nextButton');

let clickCount = 0;



button.addEventListener('click', () => {
   clickCount++;

   if (clickCount === 1) {
    myAudio.currentTime = 0;
    myAudio.play();
    setTimeout(() => {
      myAudio.pause();
      myAudio.currentTime = 0;
      progressBar.style.width = '10%';
    }, 1000);
  } else if (clickCount === 2) {
    myAudio.currentTime = 0;
    myAudio.play();
    setTimeout(() => {
      myAudio.pause();
      myAudio.currentTime = 0;
      progressBar.style.width = '20%';
    }, 3000);
  } else if (clickCount === 3) {
    myAudio.currentTime = 0;
    myAudio.play();
    setTimeout(() => {
      myAudio.pause();
      myAudio.currentTime = 0;
      progressBar.style.width = '30%';
    }, 5000);
  } else if (clickCount === 4) {
    myAudio.currentTime = 0;
    myAudio.play();
    setTimeout(() => {
      myAudio.pause();
      myAudio.currentTime = 0;
      progressBar.style.width = '50%';
    }, 8000);
  } else if (clickCount === 5) {
    myAudio.currentTime = 0;
    myAudio.play();
  } else if (clickCount === 6) {
        if (audioPaused) {
          myAudio.play();
          audioPaused = false;
        } else {
          myAudio.pause();
          audioPaused = true;
        }
      } else {
        myAudio.currentTime = 0;
        progressBar.style.width = '100%';
        nextButton.style.display = 'block';
        myAudio.play();
        audioButton.disabled = true;
      }
});

function respostaIncorreta(option) {
    option.classList.add('incorrect');
    myAudio.pause();
  }

  function respostaCorreta(option) {
    option.classList.add('correct');
    myAudio.pause();
  }

function proximaPergunta() {
  const pergunta = document.querySelector('.question p');
  const opcoes = document.querySelectorAll('.option');

  question.innerText = 'De qual álbum é essa musica?';

  opcoes.forEach((opcao) => {
    opcao.classList.remove('correct', 'incorrect');
  });

progressBar.style.width = '0%';

nextButton.style.display = 'none';

clickCount = 0;
  audioButton.disabled = false;
}  

const perguntas = [
  {
    pergunta: 'Qual é a capital do Brasil?',
    opcoes: ['São Paulo', 'Rio de Janeiro', 'Brasília', 'Belo Horizonte'],
    respostaCorreta: 'Brasília',
  },
  {
    pergunta: 'Qual é a capital da França?',
    opcoes: ['Londres', 'Berlim', 'Paris', 'Madri'],
    respostaCorreta: 'Paris',
  },
  // Adicione mais perguntas conforme necessário
];

let perguntaAtual = 0; // Inicialize com a primeira pergunta

function proximaPergunta() {
  // Verifique se há mais perguntas disponíveis
  if (perguntaAtual < perguntas.length) {
    // Atualize a pergunta e as opções com base no índice atual
    const pergunta = document.querySelector('.question p');
    const opcoes = document.querySelectorAll('.option');

    if (pergunta && opcoes) {
      pergunta.innerText = perguntas[perguntaAtual].pergunta;

      opcoes.forEach((opcao, index) => {
        opcao.innerText = perguntas[perguntaAtual].opcoes[index];
      });

      // Resto do código para reiniciar opções, progresso, etc.

      // Atualize o índice da pergunta atual
      perguntaAtual++;
    } else {
      console.error("Elementos não encontrados.");
    }
  } else {
    console.log("Fim do questionário."); // Todas as perguntas foram respondidas
  }
}

   
