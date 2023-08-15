document.addEventListener("DOMContentLoaded", function() {
    let password = new URL(window.location.href).searchParams.get("password");
    
    // Mock password strength calculation (you can replace this with a more robust logic or use a library)
    let strength;
    if (password.length > 10) {
        strength = "Strong";
    } else if (password.length > 6) {
        strength = "Medium";
    } else {
        strength = "Weak";
    }

    document.getElementById("strengthValue").innerText = strength;
});
