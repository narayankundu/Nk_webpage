document.querySelectorAll('.textbox').forEach(link => {
    link.addEventListener('click', function (event) {
        event.preventDefault(); // Prevent default link action
        const fileName = this.getAttribute('data-preview');
        showPreview(fileName);
    });
});

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
    }

    // Close the modal when clicking anywhere outside of the modal
    window.onclick = function (event) {
        if (event.target === modal) {
            modal.style.display = 'none';
        }
    }
}
