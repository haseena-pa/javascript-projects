const emoji = document.querySelectorAll('.far');

const star = document.querySelectorAll('.fa-star');
star.forEach((element, index) => {
    element.addEventListener('click', function () {
        star.forEach((el, i) => {
            console.log(index, i)
            if (i > index) {
                star[i].classList.remove('active');
            } else {
                star[i].classList.add('active');
            }

        });

        emoji.forEach((elem, ind) => {
            elem.style.transform = `translateY(-${index * 48}px)`;
        })

    });
})