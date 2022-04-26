const mainDiv = document.querySelector('.rating-container');
const emoji = document.querySelectorAll('.far');
const star = document.querySelectorAll('.fa-star');
const colors = ["red", "orange", "yellow", "lightgreen", "green"];
//Event Delegation
mainDiv.addEventListener('click', (event) => {
    const index = event.target.dataset.index;
    star.forEach((el, i) => {
        if (i > index) {
            star[i].classList.remove('active');
        } else {
            star[i].classList.add('active');
        }

    });
    emoji.forEach((elem) => {
        elem.style.transform = `translateY(-${index * 48}px)`;
        elem.style.color = colors[index];
    });
});