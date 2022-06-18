function slide() {
    const currentElement = document.querySelector('img:not(.hide)');
    currentElement.classList.add('hide');
    currentElement.nextElementSibling.classList.remove('hide');



    setTimeout(() => {
        slide();
    }, 1000);
}

slide();