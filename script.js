function calculateAge() {
    const birthdateInput = document.getElementById('birthdate');
    const resultElement = document.getElementById('result');

    const birthdate = new Date(birthdateInput.value);
    const today = new Date();

    if (isNaN(birthdate.getTime())) {
        resultElement.textContent = 'Please enter a valid birthdate.';
    } else {
        let age = today.getFullYear() - birthdate.getFullYear();

        // Check if the birthday has occurred this year
        if (
            today.getMonth() < birthdate.getMonth() ||
            (today.getMonth() === birthdate.getMonth() && today.getDate() < birthdate.getDate())
        ) {
            age--;
        }

        resultElement.textContent = `Your age is ${age} years.`;
    }
}
