let deg = 0;
const animInterval = setInterval(() => {
    deg += 55;
    document.querySelector('.firstAnimImage').style.transform = `translate(-50%, -50%) rotate(${deg}deg)`; 
}, 300);

document.addEventListener("DOMContentLoaded", ()=>{
    setTimeout(() => {
        const stopInerval = setInterval(() => {
            if(deg % 440 == 0) {
                clearInterval(animInterval);
                clearInterval(stopInerval);
                finishedFirst(deg);
            }
        }, 100);
        console.log('Загрузились');
    }, 2000);
});
function finishedFirst(deg) {
    setTimeout(() => {
        document.querySelector('.firstAnimImage').classList.add('finished');
        document.querySelector('.firstAnimImage').style.transform = `translate(-50%, -50%) rotate(${deg-80}deg)`;
        startSecond();
    }, 500);
}
function startSecond() {
    setTimeout(() => {
        document.querySelector('.secondAnimImage').classList.add('finished');
        setTimeout(() => {
            document.querySelector('.loadingBlock').classList.add('notVisible');         
            setTimeout(() => {
                document.querySelector('.loadingBlock').classList.add('disable');            
                document.querySelector('body').classList.add('active');            
            }, 300); 
        }, 100);   
    }, 300);
}