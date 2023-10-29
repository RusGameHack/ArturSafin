const calcBlocks = document.querySelectorAll('.calc__block');
let firstDataCalc=calcBlocks[0].querySelector('.calc__block-buttons_button-block.active').getAttribute("data-price"), 
    secondDataCalc=calcBlocks[1].querySelector('.calc__block-buttons_button-block.active').getAttribute("data-price");
calcBlocks.forEach((calcBLock, mainIndex) => {
    const buttons = calcBLock.querySelectorAll('.calc__block-buttons_button-block');
    buttons.forEach(button => {
        button.addEventListener('click', ()=>{
            calcBLock.querySelector('.calc__block-buttons_button-block.active').classList.remove('active');
            button.classList.add('active');
            if(mainIndex == 0) {
                firstDataCalc = button.getAttribute("data-price");
            }
            if(mainIndex == 1) {
                secondDataCalc = button.getAttribute("data-price");
            }
            document.querySelector('.calc__result__title-size').innerHTML = ((firstDataCalc * secondDataCalc).toLocaleString()).replace(/\xA0/g,'.');
        });
    });
});

document.addEventListener("DOMContentLoaded", ()=>{
    let calcBlockMin = document.querySelector('.calc__bigBlock .calc__block');
    calcBlockMin.style.minWidth = `${calcBlockMin.getBoundingClientRect().width}px`;
    calcBlockMin.style.maxWidth = `${calcBlockMin.getBoundingClientRect().width}px`;
});
