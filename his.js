const home = document.querySelector('#home');
const his = document.querySelector('#history');
const line = document.querySelector('#line');
const topbutton = document.querySelector('#topbutton')

home.addEventListener('click', newPageH);
his.addEventListener('click', newPageA);
line.addEventListener('click', newPageB);
topbutton.addEventListener('click', Gotop);

function newPageH() 
{
   location.href='http://127.0.0.1:5500/index.html';
}

function newPageA() 
{
   location.href='http://127.0.0.1:5500/history.html';
}

function newPageB() 
{
   location.href='http://127.0.0.1:5500/line.html';
}

function Gotop()
{
   window.scrollTo(0,0)
}