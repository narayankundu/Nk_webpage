// Select tab buttons and tab content (assuming tab content has class 'tab-content')
const tabButtons = document.querySelectorAll('.tab-button');
const tabs = document.querySelectorAll('.tab-content'); // Changed to '.tab-content' to target specific tab content

// Function to handle tab switching
const switchTab = (selectedButton) => {
    // Remove 'active' class from all buttons and tabs
    tabButtons.forEach(btn => btn.classList.remove('active'));
    tabs.forEach(tab => tab.classList.remove('active'));

    // Activate the clicked button and corresponding tab
    selectedButton.classList.add('active');
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

// Function to show preview
function showPreview(file) {
    const previewContainer = document.getElementById('preview-container');
    previewContainer.innerHTML = ''; // Clear previous content

    // Determine file type and create appropriate preview
    const fileType = file.split('.').pop().toLowerCase();
    let content;

    if (['pdf', 'docx', 'txt', 'pptx', 'xlsx'].includes(fileType)) {
        content = `<iframe src="${file}" width="100%" height="400px"></iframe>`;
    } else if (['mp3', 'mp4'].includes(fileType)) {
        content = `<audio controls><source src="${file}" type="${fileType === 'mp3' ? 'audio/mpeg' : 'video/mp4'}">Your browser does not support the audio tag.</audio>`;
    }

    previewContainer.innerHTML = content;

    // Show the modal
    const modal = document.getElementById('preview-modal');
    modal.style.display = 'block';

    // Close the modal when clicking on <span> (x)
    document.querySelector('.close').onclick = function () {
        modal.style.display = 'none';
    };

    // Close the modal when clicking anywhere outside of the modal
    window.onclick = function (event) {
        if (event.target === modal) {
            modal.style.display = 'none';
        }
    };
}

// Add event listeners to elements with class 'textbox'
document.querySelectorAll('.textbox').forEach(link => {
    link.addEventListener('click', function (event) {
        event.preventDefault(); // Prevent default link action
        const fileName = this.getAttribute('data-preview');
        showPreview(fileName);
    });
});
