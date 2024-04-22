document.getElementById("contactForm").addEventListener("submit", function(event) {
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var message = document.getElementById("message").value;
    var valid = true;

    // Validate name
    if (name.trim() === "") {
        alert("Please enter your name.");
        valid = false;
    }

    // Validate email format
    if (!isValidEmail(email)) {
        alert("Please enter a valid email address.");
        valid = false;
    }

    // Validate message
    if (message.trim() === "") {
        alert("Please enter a message.");
        valid = false;
    }

    if (!valid) {
        event.preventDefault(); 
    }
});

//function to validating email
function isValidEmail(email) {
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}