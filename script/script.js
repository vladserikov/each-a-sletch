const container = document.querySelector('.container');
const btn1 = document.querySelector('#btn1');
const btn2 = document.querySelector('#btn2');
const btn3 = document.querySelector('#btn3');
const divPick = document.querySelector('.colorPock'); 

let fragment = getFragment();
let clientColor = '#EEFF41';

container.append(fragment);
container.addEventListener('mouseover', colorSeting);
btn1.addEventListener('click', firstColor);
btn2.addEventListener('click', oneColor);
btn3.addEventListener('click', resizeGrid);

function getFragment(startCount = 16) {
    let fragments = new DocumentFragment();
    let countBlock = startCount;
    for (let i = 0; i < countBlock; i++) {
        for (let j = 0; j < countBlock; j++) {
            let div = document.createElement('div');
            div.classList.add('block');
            fragments.append(div);
        }
    }
    return fragments;
}

function colorSeting(event) {
    let el = event.target;
    let bgc = '#';
    for (let i = 0; i < 3; i++) {
        bgc += randColor();
    }
    el.style.backgroundColor = bgc;
}

function firstColor() {
    container.removeEventListener('mouseover', colorYellow);
    resetColor();
    container.addEventListener('mouseover', colorSeting);
}

function oneColor() {
    container.removeEventListener('mouseover', colorSeting);
    resetColor();
    pickColor();
    container.addEventListener('mouseover', colorYellow);
}

function resizeGrid() {
    container.innerHTML = '';
    let size = prompt('How size you need?', 16);
    fragment = getFragment(parseInt(size));
    container.append(fragment);
    size = `repeat(${size}, 1fr)`;
    container.style.gridTemplateRows = size;
    container.style.gridTemplateColumns = size;
}

function resetColor() {
    let divArr = Array.from(document.querySelectorAll('.block'));
    divArr.map(i => i.style.backgroundColor = '#F5F5F5')
}

function colorYellow(e) {
    let el = e.target;
    el.style.backgroundColor = clientColor;
}

const randColor = () => {
    return (Math.floor(Math.random() * 16)).toString(16);
}

function pickColor(){
    let collorArr = Array.from(divPick.querySelectorAll('div'));
    collorArr.map(item => {
        item.style.backgroundColor = item.getAttribute('id');
    });
    divPick.addEventListener('click', newColor);
    divPick.style.display = 'flex';
}

function newColor(e) {
    clientColor = e.target.getAttribute('id');
    if(clientColor === null){
        clientColor = 'black';
    }
    divPick.style.display = 'none';
}