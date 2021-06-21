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
   document.location.href='index.html';
}

function newPageA() 
{
   document.location.href='history.html';
}

function newPageB() 
{
   document.location.href='line.html';
}

function Gotop()
{
   window.scrollTo(0,0)
}