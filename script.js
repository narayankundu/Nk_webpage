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
const btn = document.getElementById('button');

document.getElementById('form')
 .addEventListener('submit', function(event) {
   event.preventDefault();

   btn.value = 'Sending...';

   const serviceID = 'default_service';
   const templateID = 'template_gqyy4mc';

   emailjs.sendForm(serviceID, templateID, this)
    .then(() => {
      btn.value = 'Send Email';
      alert('Sent!');
    }, (err) => {
      btn.value = 'Send Email';
      alert(JSON.stringify(err));
    });
});


// script for connect fb   whatsapp logo social media
document.querySelectorAll('.social-icons a').forEach(icon => {
    icon.addEventListener('mouseover', () => {
        icon.style.opacity = "0.7";
    });
    icon.addEventListener('mouseout', () => {
        icon.style.opacity = "1";
    });
});
