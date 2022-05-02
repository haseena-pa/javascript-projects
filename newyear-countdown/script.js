function increment() {
    let today = new Date();
    let newYear = new Date('01-01-2023');

    const diff = newYear.getTime() - today.getTime();

    const s = 1000;
    const m = 60 * s;
    const h = 60 * m;
    const d = 24 * h;

    const days = diff / d;
    const hours = (diff % d) / h;
    const minutes = (diff % h) / m;
    const seconds = (diff % m) / s;

    let secondDiv = document.querySelector('.seconds');
    let minutesDiv = document.querySelector('.minutes');
    let hoursDiv = document.querySelector('.hours');
    let dayDiv = document.querySelector('.days');

    setTimeout(() => {
        secondDiv.innerText = Math.ceil(seconds);
        minutesDiv.innerText = Math.ceil(minutes);
        hoursDiv.innerText = Math.ceil(hours);
        dayDiv.innerText = Math.ceil(days);
        increment();
    }, 1000);
}

increment();