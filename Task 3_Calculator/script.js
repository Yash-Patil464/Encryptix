document.querySelectorAll('button').forEach(button => {
    button.addEventListener('click', function() {
        const display = document.getElementById('display');
        const buttonText = this.innerText;

        if (buttonText === 'RESET') {
            display.value = '';
        } else if (buttonText === 'DEL') {
            if (display.value === 'Error' || display.value === 'undefined') {
                display.value = '';
            } else {
                display.value = display.value.slice(0, -1);
            }
        } else if (buttonText === '=') {
            try {
                display.value = eval(display.value.replace('x', '*').replace('/', '/'));
            } catch (e) {
                display.value = 'Error';
            }
        } else {
            if (display.value === 'Error' || display.value === 'undefined') {
                display.value = buttonText;
            } else {
                display.value += buttonText;
            }
        }
    });
});