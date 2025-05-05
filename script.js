document.addEventListener('DOMContentLoaded', function() {
    // Get the form element
    const contactForm = document.querySelector('.contact-form');
    
    // Check for status in URL parameters
    const urlParams = new URLSearchParams(window.location.search);
    const status = urlParams.get('status');
    
    // Show status message if present
    if (status) {
        const messageDiv = document.createElement('div');
        messageDiv.className = 'status-message';
        
        if (status === 'success') {
            messageDiv.textContent = 'Message sent successfully!';
            messageDiv.style.color = 'green';
        } else if (status === 'error') {
            messageDiv.textContent = 'Error sending message. Please try again.';
            messageDiv.style.color = 'red';
        }
        
        contactForm.parentNode.insertBefore(messageDiv, contactForm);
        
        // Remove message after 5 seconds
        setTimeout(() => {
            messageDiv.remove();
        }, 5000);
    }
    
    // Add form submission handler
    contactForm.addEventListener('submit', function(e) {
        // Basic client-side validation
        const name = this.querySelector('input[name="name"]').value;
        const email = this.querySelector('input[name="email"]').value;
        const message = this.querySelector('textarea[name="message"]').value;
        
        if (!name || !email || !message) {
            e.preventDefault();
            showMessage('Please fill in all fields', 'error');
            return;
        }
        
        if (!isValidEmail(email)) {
            e.preventDefault();
            showMessage('Please enter a valid email address', 'error');
            return;
        }
    });
    
    // Email validation function
    function isValidEmail(email) {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(email);
    }
    
    // Function to show status messages
    function showMessage(message, type) {
        const messageDiv = document.createElement('div');
        messageDiv.className = 'status-message';
        messageDiv.textContent = message;
        messageDiv.style.color = type === 'error' ? 'red' : 'green';
        
        contactForm.parentNode.insertBefore(messageDiv, contactForm);
        
        // Remove message after 5 seconds
        setTimeout(() => {
            messageDiv.remove();
        }, 5000);
    }
}); 