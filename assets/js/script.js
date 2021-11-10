var seconds = 1349;
var delay = 1389;

setTimeout(() => {
    document.querySelector('#botao').style.display='inline-block';
    document.querySelector('.cartoes').style.display = 'inline-flex';
  }, seconds*1000);

setTimeout(()=> {
    document.querySelector('.sound').style.display='none';
}, delay *1000)