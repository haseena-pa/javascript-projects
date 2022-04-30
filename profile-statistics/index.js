const counter = document.querySelectorAll('.counter');

counter.forEach(element => {
    element.innerText = "0";
    const val = element.getAttribute('data-count');
    let counter = element.innerText;

    incrementCounter(0);

    function incrementCounter(counter) {
        if (val > counter) {
            counter = counter + Math.ceil((val / 100) * 10);
            element.innerText = counter;
            setTimeout(() => {
                incrementCounter(counter);
            }, 100);

        } else {
            element.innerText = counter;
        }
    }

});


