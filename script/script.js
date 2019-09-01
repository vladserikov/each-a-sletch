const container = document.querySelector('.container');
const btn1 = document.querySelector('#btn1');
const btn2 = document.querySelector('#btn2');


container.append(getFragment());
container.addEventListener('mousemove', colorSeting);
btn1.addEventListener('click', firstColor);
btn2.addEventListener('click', oneColor);

function firstColor() {
    container.removeEventListener('mousemove', colorYellow);
    resetColor();
    container.addEventListener('mousemove', colorSeting);
}

function oneColor() {
    container.removeEventListener('mousemove', colorSeting);
    resetColor();
    container.addEventListener('mousemove', colorYellow);
}


function resetColor() {
    let divArr = Array.from(document.querySelectorAll('.block'));
    divArr.map(i => i.style.backgroundColor = '#F5F5F5')
}


function getFragment() {
    let fragments = new DocumentFragment();
    let countBlock = 16;
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
    for (let i = 0; i < 6; i++) {
        bgc += randColor();
    }
    el.style.backgroundColor = bgc;
}

function colorYellow(e) {
    let el = e.target;
    console.log('test');
    el.style.backgroundColor = '#EEFF41';
}


const randColor = () => {
    return (Math.floor(Math.random() * 16)).toString(16);
}

