let nowIndex = 1;

const imageSlider = document.querySelector('#imageSlider');

const leftArrow = document.querySelector('#leftArrow');
const rightArrow = document.querySelector('#rightArrow');
const home = document.querySelector('#home');
const his = document.querySelector('#history');
const hiss = document.querySelector('#hisbutton');
const line = document.querySelector('#line');
const linee = document.querySelector('#linebutton');
const topbutton = document.querySelector('#topbutton')

leftArrow.addEventListener('click', moveLeft);
rightArrow.addEventListener('click', moveRight);
home.addEventListener('click', newPageH);
his.addEventListener('click', newPageA);
hiss.addEventListener('click', newPageA);
line.addEventListener('click', newPageB);
linee.addEventListener('click', newPageB);
topbutton.addEventListener('click', Gotop);

//move to first image.
function moveA()
{
    imageSlider.style.transform = 'translate(0px)';
    nowIndex =1;
}
//move to second image.
function moveB()
{
    imageSlider.style.transform = 'translate(-550px)';
    nowIndex =2;
}
//move to third image.
function moveC()
{
    imageSlider.style.transform = 'translate(-1100px)';
    nowIndex =3;
}

function moveLeft()
{
    if(nowIndex == 1)
    {
        nowIndex ==1;
    }
    else
    {
        nowIndex --;
    }

    moveSlider(nowIndex);
}
function moveRight()
{
    if(nowIndex == 3)
    {
        nowIndex =3;
    }
    else
    {
        nowIndex ++;
    }

    moveSlider(nowIndex);
}

function moveSlider(index)
{
    switch(index)
    {
        case 1:
            moveA();
        break;
        case 2:
            moveB();
        break;
        case 3:
            moveC();
        break;
    }
}

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