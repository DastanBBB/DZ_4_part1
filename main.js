// Задание №1
const counterValue = document.getElementById('counter_value');
const incrementButton = document.getElementById('increment');
const decrementButton = document.getElementById('decrement');

let counter = 0;

function updateCounter() {
    counterValue.textContent = counter;
}

incrementButton.addEventListener('click', function () {
    counter++;
    updateCounter();
    counterValue.style.color = 'green';
});

decrementButton.addEventListener('click', function () {
    if (counter > 0) {
        counter--;
        updateCounter();
        counterValue.style.color = 'red';
    }
});
updateCounter();


// Задание №2
const mouseTracker = document.querySelector('.mouse_tracker');
const coordinatesText = document.getElementById('coordinates');

mouseTracker.addEventListener('mousemove', function (event) {
    const x = event.clientX - mouseTracker.offsetLeft;
    const y = event.clientY - mouseTracker.offsetTop;

    coordinatesText.innerHTML = `Координаты: X: ${x}, Y: ${y}`;
});