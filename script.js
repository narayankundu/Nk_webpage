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
