const formContainer = document.getElementById('form-container');

const firstnameInput = document.getElementById('firstname');
const lastnameInput = document.getElementById('lastname');
const emailInput = document.getElementById('email');
const passwordInput = document.getElementById('password');
const repeatpasswordInput = document.getElementById('repeatpassword');
const submitButton = document.getElementById('btn-submit');

submitButton.addEventListener('click', (e) => {

    // Prevents submit button default action
    e.preventDefault();
    
    // Clear console on submit for better console validation results
    console.clear();

    let submittedFirstname = firstnameInput.value.trim();
    let submittedLastname = lastnameInput.value.trim();
    let submittedPassword = passwordInput.value.trim();
    let submittedRepeatpassword = repeatpasswordInput.value.trim();

    if (
        submittedFirstname.length > 2 &&
        submittedLastname.length > 2 &&
        validateEmail(emailInput.value) &&
        submittedPassword.length > 6 &&
        submittedRepeatpassword.length > 6 &&
        submittedPassword === submittedRepeatpassword
    ) {
        console.log ('Everything looks good')
    }

    else (
        console.log ('You broke something, FIX IT!')
    )
});

function validateEmail(emailInput) {
    // Regular expression for email
    let emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    // Test the email against the pattern
    let isValid = emailRegex.test(emailInput);

    // Return results of validation (true eller false)
    return isValid;
}