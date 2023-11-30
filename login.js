document.addEventListener('DOMContentLoaded', function () {
    // Get the registration form
    const registrationForm = document.getElementById('registrationForm');

    // Add event listener to the form for submission
    registrationForm.addEventListener('submit', function (event) {
        // Prevent the default form submission
        event.preventDefault();

        // Validate the form fields (you can add your validation logic here)

        // Show the registration success popup
        showRegistrationPopup();
    });

    // Get the close button in the registration popup
    const closePopupButton = document.getElementById('closePopup');

    // Add event listener to the close button to hide the popup
    closePopupButton.addEventListener('click', function () {
        hideRegistrationPopup();
    });
});

// Function to show the registration success popup
function showRegistrationPopup() {
    const registrationPopup = document.getElementById('registrationPopup');
    registrationPopup.style.display = 'block';
}

// Function to hide the registration success popup
function hideRegistrationPopup() {
    const registrationPopup = document.getElementById('registrationPopup');
    registrationPopup.style.display = 'none';
}
