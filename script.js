const tabButtons = document.querySelectorAll('.tab-button');
const tabs = document.querySelectorAll('main');

// Function to handle tab switching
const switchTab = (selectedButton) => {
    // Remove 'active' class from all buttons and tabs
    tabButtons.forEach(btn => btn.classList.remove('active'));
    tabs.forEach(tab => tab.classList.remove('active'));

    // Activate the clicked button and corresponding tab
    selectedButton.classList.add('active');
    const targetTab = document.querySelector(`#${selectedButton.dataset.tab}`);
    targetTab?.classList.add('active'); // Optional chaining in case tab is missing
};

// Add event listener to each tab button
tabButtons.forEach(button => {
    button.addEventListener('click', () => switchTab(button));
});

// Hide all sections except the active one
document.querySelectorAll('main').forEach(tab => {
    if (!tab.classList.contains('active')) {
        tab.style.display = 'none';
    }
});

// Show only the active tab
document.querySelectorAll('.tab-button').forEach(button => {
    button.addEventListener('click', function() {
        // Hide all tabs
        document.querySelectorAll('main').forEach(tab => {
            tab.style.display = 'none';
        });

        // Show the selected tab
        const tabId = button.getAttribute('data-tab');
        document.getElementById(tabId).style.display = 'block';
    });
});


// Existing code for tab switching remains the same

// Handle form submission
const contactForm = document.getElementById('contact-form');
const statusMessage = document.getElementById('status-message');

contactForm.addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form from refreshing the page

    // Collect the form data
    const name = document.getElementById('name').value;
    const message = document.getElementById('message').value;

    // Prepare the email parameters for EmailJS
    const emailParams = {
        from_name: name,
        message: message,
        to_email: 'kundu.narayan1995@gmail.com'  // Your email address
    };

    // Send the email via EmailJS
    emailjs.send('service_9dsxtql', 'template_gqyy4mc', emailParams)
    .then(function(response) {
        // Show success message
        statusMessage.innerText = "Message sent successfully!";
        statusMessage.style.color = "green";
        contactForm.reset(); // Clear the form
    }, function(error) {
        // Show error message
        statusMessage.innerText = "Failed to send message. Please try again.";
        statusMessage.style.color = "red";
    });
});

