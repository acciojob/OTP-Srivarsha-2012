//your JS code here. If required.
const inputs = document.querySelectorAll('.code');

// Focus first input on load
if (inputs.length > 0) {
    inputs[0].focus();
}

inputs.forEach((input, index) => {

    input.addEventListener('input', () => {
        // Allow only digits
        input.value = input.value.replace(/[^0-9]/g, '');

        // Move to next input
        if (input.value && index < inputs.length - 1) {
            inputs[index + 1].focus();
        }
    });

    input.addEventListener('keydown', (e) => {
        if (e.key === 'Backspace') {

            // If current field is empty, move to previous
            if (input.value === '' && index > 0) {
                inputs[index - 1].focus();
                inputs[index - 1].value = '';
            }
        }
    });

});