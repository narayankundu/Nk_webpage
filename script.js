// Select tab buttons and tab content (assuming each tab is inside a div with class 'tab')
const tabButtons = document.querySelectorAll('.tab-button');
const tabs = document.querySelectorAll('.tab'); // Updated: assuming tab content has a 'tab' class

// Function to handle tab switching
const switchTab = (selectedButton) => {
    // Remove 'active' class from all buttons and tabs
    tabButtons.forEach(btn => btn.classList.remove('active'));
    tabs.forEach(tab => tab.classList.remove('active'));

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
