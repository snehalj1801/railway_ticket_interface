// Wait for the DOM to fully load before running the script
document.addEventListener('DOMContentLoaded', function() {
    // Get the modal, close button, OK button, and the form
    const modal = document.getElementById('myModal');
    const closeBtn = document.querySelector('.close');
    const okBtn = document.querySelector('.ok-button');
    const registerForm = document.getElementById('registerForm');

    // Function to show the modal
    function showModal() {
        modal.style.display = 'flex'; // Show the modal (using flex for centering)
    }

    // Event listener for form submission
    registerForm.addEventListener('submit', function(event) {
        // Prevent the form from submitting normally
        event.preventDefault();
        
        // Display the modal
        showModal();
    });

    // Close the modal when the "X" button is clicked
    closeBtn.addEventListener('click', function() {
        modal.style.display = 'none';
    });

    // Close the modal and redirect when the "OK" button is clicked
    okBtn.addEventListener('click', function() {
        modal.style.display = 'none';
        window.location.href = 'login.html'; // Redirect to login page
    });

    // Close the modal if the user clicks anywhere outside of it
    window.addEventListener('click', function(event) {
        if (event.target === modal) {
            modal.style.display = 'none';
        }
    });
});
