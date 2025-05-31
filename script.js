let count = document.getElementById('counter');
let incrementButton = document.getElementById('incrementBtn');

incrementButton.addEventListener('click', () => {
    let currentCount = parseInt(count.textContent);
    alert(`Current value: ${currentCount}`);
    count.textContent = currentCount + 1;
 });