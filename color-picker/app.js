const colors = ["green", "red", "rgba(133,122,200)", "#f15025"];
const btn = document.querySelector('.btn-hero');
const span = document.querySelector('.color');

btn.addEventListener('click', function () {
    const randomNumber = getRandomNumber();
    document.body.style.backgroundColor = colors[randomNumber];
    span.textContent = colors[randomNumber];
});

function getRandomNumber() {
    return Math.floor(Math.random() * colors.length);
}