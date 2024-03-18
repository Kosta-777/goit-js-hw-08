const input = document.querySelector('#name-input');
console.log(input);
const output = document.querySelector('#name-output');
console.log(output);


input.addEventListener('input', event => {
    const inputValue = event.target.value.trim(); 
    output.textContent = inputValue || 'Anonymous'; 
});