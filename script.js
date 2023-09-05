const audioButton = document.getElementById('button');
const myAudio = document.getElementById('VENTANNI');
const progressBar = document.getElementById('progressBar');

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