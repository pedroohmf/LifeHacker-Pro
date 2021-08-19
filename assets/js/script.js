var seconds = 1654;
var delay = 1694;

setTimeout(() => {
    document.querySelector('#botao').style.display='inline-block';
    document.querySelector('.cartoes').style.display = 'inline-flex';
  }, seconds*1000);

setTimeout(()=> {
    document.querySelector('.sound').style.display='none';
}, delay *1000)