const boxes = document.querySelector('.boxes');
const sizeOption = document.querySelector('#sizeOptions');
let userChoice = 16;

function createDropboxItems(){
    for (let i=2; i <= 100; i++) {
        const option = document.createElement('option');
        option.textContent = `${i} x ${i}`;
        option.value = i;
        sizeOption.appendChild(option);
    }
}

function getUserChoice() {
    sizeOption.addEventListener('change', () => {
        userChoice = Number(sizeOption.value);
        createBoxes(userChoice);
});
}

function getRandomNumber(min, max) {
  min = Math.ceil(min);   
  max = Math.floor(max);  
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function getRandomColor() {
    const r = getRandomNumber(0,255);
    const g = getRandomNumber(0,255);
    const b = getRandomNumber(0,255);
    return `rgb(${r},${g},${b})`
}


function createBoxes (userChoice){

    boxes.innerHTML = '';

    for (let i = 1 ; i<= userChoice ** 2; i++){
        const box = document.createElement('div')
        box.classList.add('box');
        box.style.opacity = 0;
        box.addEventListener('mouseenter', () => {
            box.style.backgroundColor = getRandomColor();            
            // Adding 10% opacity for each mouse hover.
            let currentOpacity = Number(getComputedStyle(box).opacity);
            box.style.opacity = Math.min(currentOpacity + 0.1, 1);          
        });
        box.style.height = `${100 / userChoice}%`;
        box.style.width = `${100 / userChoice}%`;
        boxes.appendChild(box);
    }
}

function main () {
    createDropboxItems ();
    getUserChoice ();        
}

main()





// 2x2 => 4 quadrados, cada um com 50% high e width
// 3x3 => 9 quadrados, cada um 33,3% high e width

// let height = 0; 
// let widh = 0;
// height, width = 100%/sqr(i) || 100%/4