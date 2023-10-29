const calcBlocks = document.querySelectorAll('.calc__block');
calcBlocks.forEach(calcBLock => {
    const buttons = calcBLock.querySelectorAll('.calc__block-buttons_button-block');
    buttons.forEach(button => {
        button.addEventListener('click', ()=>{
            try {
                calcBLock.querySelector('.calc__block-buttons_button-block.active').classList.remove('active');
            } catch (error) {}
            button.classList.add('active');
        });
    });
});