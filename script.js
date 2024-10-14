// Select tab buttons and tab content (assuming tab content has class 'tab-content')
const tabButtons = document.querySelectorAll('.tab-button');
const tabs = document.querySelectorAll('.tab-content'); // Use '.tab-content' to target specific tab content

// Function to handle tab switching
const switchTab = (selectedButton) => {
    // Remove 'active' class from all buttons and tabs
    //tabButtons.forEach(btn => btn.classList.remove('active'));
    //tabs.forEach(tab => tab.classList.remove('active'));

    // Activate the clicked button and corresponding tab
    selectedButton.classList.add('active');
    
    // Find the tab matching the data-tab attribute of the button
    const targetTab = document.querySelector(`#${selectedButton.dataset.tab}`);
    
    if (targetTab) {
        targetTab.classList.add('active'); // Show the tab if found
    } else {
        console.error("No tab found for:", selectedButton.dataset.tab);
    }
};

// Add event listeners to each tab button
tabButtons.forEach(button => {
    button.addEventListener('click', () => switchTab(button));
});

// Handle form submission
function sendMail() {
    let parms = {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        subject: document.getElementById("subject").value,
        message: document.getElementById("message").value,
    };

    emailjs.send("service_9dsxtql", "template_gqyy4mc", parms)
        .then(() => {
            alert("Email sent successfully!");
        })
        .catch((error) => {
            alert("Failed to send email. Please try again.");
            console.error("Email sending error:", error);
        });
}


// Handle form submission
function sendMail() {
    let parms = {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        subject: document.getElementById("subject").value,
        message: document.getElementById("message").value,
    };

    emailjs.send("service_9dsxtql", "template_gqyy4mc", parms)
        .then(() => {
            alert("Email sent successfully!");
        })
        .catch((error) => {
            alert("Failed to send email. Please try again.");
            console.error("Email sending error:", error);
        });
}
