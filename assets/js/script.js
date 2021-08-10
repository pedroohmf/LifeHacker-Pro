var seconds = 5;

setTimeout(() => {
    document.querySelector('.botao').classList.remove('disabled');
    document.querySelector('.cartoes').style.display = 'inline-flex';
  }, seconds*1000);