// Correcting querySelector and EventListener methods
const maintitle = document.querySelector('#title'); // Fixed typo in querySelector
let curValue = 0;

const btndecrement = document.querySelector('#decrement'); // Fixed typo in querySelector
const btnreset = document.querySelector('#reset'); // Fixed typo in querySelector
const btnincrement = document.querySelector('#increment'); // Fixed typo in querySelector

// Added EventListener for increment button
btnincrement.addEventListener('click', () => {
    curValue += 1; // Using shorthand for incrementing curValue
    maintitle.textContent = curValue; // Fixed typo in textContent
});

// Added EventListener for decrement button
btndecrement.addEventListener('click', () => {
    curValue -= 1; // Using shorthand for decrementing curValue
    maintitle.textContent = curValue; // Fixed typo in textContent
});

// Added EventListener for reset button
btnreset.addEventListener('click', () => {
    curValue = 0;
    maintitle.textContent = curValue; // Fixed typo in textContent
});
