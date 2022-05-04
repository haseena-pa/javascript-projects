const span = document.getElementById('value');
const increaseBtn = document.querySelector('.increase');
const resetBtn = document.querySelector('.reset');
const decreaseBtn = document.querySelector('.decrease');

resetBtn.addEventListener('click', () => {
    span.textContent = '0';
});

increaseBtn.addEventListener('click', () => {
    +span.textContent++;
});

decreaseBtn.addEventListener('click', () => {
    +span.textContent--;
});

