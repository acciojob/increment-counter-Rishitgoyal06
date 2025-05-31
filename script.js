let count = document.getElementById('counter');
let incrementButton = document.getElementById('incrementBtn');

incrementButton.addEventListener('click', () => {
    let currentCount = parseInt(counter.textContent);
    alert(`Current value: ${currentCount}`);
    counter.textContent = currentCount + 1;
 });