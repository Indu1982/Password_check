let forbiddenPasswords = [];

// Fetch the forbidden passwords from the JSON file.
fetch('forbiddenPasswordsList.json')
    .then(response => response.json())
    .then(data => forbiddenPasswords = data);

document.getElementById('registrationForm').addEventListener('submit', function(e) {
    e.preventDefault();

    let firstName = document.getElementById('firstName').value;
    let lastName = document.getElementById('lastName').value;
    let password = document.getElementById('password').value;
    let dob = document.getElementById('dob').value;
    let city = document.getElementById('city').value;

    // Array to hold all the error messages
    let errorMessages = [];

    if (isSequential(password)) {
        errorMessages.push('Password should not have sequential characters like "12345" or "abcde".');
    }

    if (password.includes(firstName) || password.includes(lastName) || password.includes(dob) || password.includes(city)) {
        errorMessages.push('Password should not include parts of your name, date of birth, or city.');
    }

    if (forbiddenPasswords.includes(password)) {
        errorMessages.push('Password is a common password and not secure. Please choose another.');
    }

    // If there are any error messages, show them
    if (errorMessages.length > 0) {
        alert(errorMessages.join('\n'));
    } else {
        // Navigate to the success page, passing the password as a query parameter
        window.location.href = `page2.html?password=${password}`;
    }
});

function isSequential(str) {
    // Check for sequences like 12345 or abcde
    const charCodes = [...str].map(char => char.charCodeAt(0));
    for (let i = 1; i < charCodes.length; i++) {
        if (charCodes[i] !== charCodes[i-1] + 1) {
            return false;
        }
    }
    return true;
}
