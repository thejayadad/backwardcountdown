

let number = document.getElementById("number");
let count = 10;

let countdownInterval = setInterval(() => {
    count <= 1 && clearInterval(countdownInterval);
    number.textContent = count <= 10 ? `0${--count}` :
    `${--count}`;
}, 1000);