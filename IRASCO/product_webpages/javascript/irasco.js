// spinner javascript
const preloaderWrapper = document.querySelector('.preloaderWrapper');

window.addEventListener('load', function() {
    preloaderWrapper.classList.add('fade-out-animation');
});

// modal
// JavaScript to open the video modal
function openVideoModal() {
    var modal = document.getElementById("videoModal");
    modal.style.display = "block";
}

// JavaScript to close the video modal
function closeVideoModal() {
    var modal = document.getElementById("videoModal");
    modal.style.display = "none";
}
function showMainContent() {
    var videoModal = document.getElementById("videoModal");
    var mainContent = document.getElementById("mainContent");
    
    // Hide the video modal
    videoModal.style.display = "none";
    
    // Show the main website content
    mainContent.style.display = "block";
}

// Automatically open the video modal when the page loads (optional)
window.onload = openVideoModal;

