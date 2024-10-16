// Select elements
const clickButton = document.querySelector('.click-button');
const hoverBox = document.querySelector('.hover-box');
const inputField = document.querySelector('.input-field');
const outputDiv = document.querySelector('.output');

// 1. Click Event
clickButton.addEventListener('click', () => {
    outputDiv.textContent = 'Button was clicked!';
});

// 2. Mouseover Event
hoverBox.addEventListener('mouseover', () => {
    hoverBox.style.backgroundColor = 'yellow';
    outputDiv.textContent = 'You hovered over the box!';
});

// Reset color when mouse leaves
hoverBox.addEventListener('mouseout', () => {
    hoverBox.style.backgroundColor = 'lightgray';
    outputDiv.textContent = 'Mouse left the box!';
});

// 3. Input Event
inputField.addEventListener('input', (event) => {
    outputDiv.textContent = `You typed: ${event.target.value}`;
});
