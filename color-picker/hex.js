const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
const btn = document.getElementById('btn');
const span = document.querySelector('.color');

btn.addEventListener('click', () => {
    const randomHexCode = getHexCode();
    document.body.style.backgroundColor = randomHexCode;
    span.textContent = randomHexCode;
});

function getHexCode() {
    let hexCode = '#';
    for (let i = 0; i < 6; i++) {
        hexCode += hex[getRandom()];
    }
    return hexCode;
}

function getRandom() {
    return Math.floor(Math.random() * hex.length);
}