// Fetch the forbidden passwords from the JSON file.
let forbiddenPasswords = [];
fetch('forbiddenPasswords.json')
    .then(response => response.json())
    .then(data => forbiddenPasswords = data);
console.log(data);

document.getElementById('registrationForm').addEventListener('submit', function(e) {
    e.preventDefault();

    let firstName = document.getElementById('firstName').value;
    let lastName = document.getElementById('lastName').value;
    let password = document.getElementById('password').value;
    let dob = document.getElementById('dob').value;
    let city = document.getElementById('city').value;

    if (isSequential(password) ||
        password.includes(firstName) ||
        password.includes(lastName) ||
        password.includes(dob) ||
        password.includes(city) ||
        forbiddenPasswords.includes(password) ||
        isBadPasswordAPI(password)) {
        alert('Password is not strong enough!');
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

function isBadPasswordAPI(password) {
    // Call the bad password API (mocked for this example)
    return false;
}
