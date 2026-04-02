const inputs = document.querySelectorAll('.code');

// focus first input on load
if (inputs.length > 0) inputs[0].focus();

inputs.forEach((input, index) => {

    input.addEventListener('input', (e) => {
        let value = e.target.value;

        // allow only one digit (0–9)
        value = value.replace(/[^0-9]/g, '');
        input.value = value;

        // move forward
        if (value !== '' && index < inputs.length - 1) {
            inputs[index + 1].focus();
        }
    });

    input.addEventListener('keydown', (e) => {

        if (e.key === 'Backspace') {
            // if current has value → clear it (default behavior)
            if (input.value !== '') {
                input.value = '';
            } 
            // if already empty → move to previous
            else if (index > 0) {
                inputs[index - 1].focus();
                inputs[index - 1].value = '';
            }
        }

    });

});