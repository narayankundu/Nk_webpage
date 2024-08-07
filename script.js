// Smooth scrolling for navigation links
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Modal functionality for image previews
const modal = document.getElementById('imageModal');
const modalImg = document.getElementById('modalImage');
const captionText = document.getElementById('caption');

document.querySelectorAll('.gallery-thumbnail').forEach(img => {
    img.addEventListener('click', function() {
        modal.style.display = 'block';
        modalImg.src = this.dataset.full;
        captionText.innerHTML = this.alt;
    });
});

const span = document.getElementsByClassName('close')[0];
span.onclick = function() {
    modal.style.display = 'none';
};

// Add functionality to close modal on outside click
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = 'none';
    }
};
