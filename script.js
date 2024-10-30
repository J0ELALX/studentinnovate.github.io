// Theme Management
const themeToggle = document.getElementById('theme-toggle');
const body = document.body;

// Load theme from localStorage
const currentTheme = localStorage.getItem('theme');
if (currentTheme) {
    body.classList.toggle('dark', currentTheme === 'dark');
    themeToggle.textContent = currentTheme === 'dark' ? "Toggle Light Mode" : "Toggle Dark Mode";
}

// Toggle dark mode and save preference
themeToggle.addEventListener('click', () => {
    const isDarkMode = body.classList.toggle('dark');
    themeToggle.textContent = isDarkMode ? "Toggle Light Mode" : "Toggle Dark Mode";
    localStorage.setItem('theme', isDarkMode ? 'dark' : 'light'); // Save preference
});

// Smooth scroll for internal links
const internalLinks = document.querySelectorAll('a[href^="#"]');
internalLinks.forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        
        // Add smooth animation class
        body.classList.add('scrolling');

        // Scroll to the target section smoothly
        document.querySelector(this.getAttribute('href')).scrollIntoView({ 
            behavior: 'smooth' 
        });

        // Remove smooth animation class after scroll
        setTimeout(() => {
            body.classList.remove('scrolling');
        }, 500); // Match this duration to your desired scroll animation duration
    });
});

// Back to top button functionality
const backToTopButton = document.getElementById('back-to-top');

// Show button when scrolling down
window.onscroll = function () {
    backToTopButton.style.display = (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) ? "block" : "none";
};

// Scroll to top when button is clicked
backToTopButton.addEventListener('click', function () {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});

// Modal functionality
const modal = document.getElementById('modal');
const modalTitle = document.getElementById('modal-title');
const modalDescription = document.getElementById('modal-description');
const closeModal = document.querySelector('.close');

// Event delegation for project cards
document.getElementById('projects').addEventListener('click', (event) => {
    const card = event.target.closest('.project-card');
    if (card) {
        const title = card.querySelector('h3').innerText;
        const description = card.querySelector('p').innerText;
        modalTitle.innerText = title;
        modalDescription.innerText = description;
        modal.style.display = "block"; // Show the modal
    }
});

// Close modal when the close button is clicked
closeModal.addEventListener('click', () => {
    modal.style.display = "none"; // Hide the modal
});

// Close modal when clicking outside of the modal content
window.addEventListener('click', (event) => {
    if (event.target === modal) {
        modal.style.display = "none"; // Hide the modal
    }
});

// Responsive modal size adjustment
window.addEventListener('resize', () => {
    const modalContent = modal.querySelector('.modal-content');
    modalContent.style.width = window.innerWidth > 600 ? '60%' : '90%'; // Adjust modal size based on viewport
});

// Loading animation (example)
const showLoading = () => {
    const loadingDiv = document.createElement('div');
    loadingDiv.innerText = "Loading...";
    loadingDiv.style.position = "fixed";
    loadingDiv.style.top = "50%";
    loadingDiv.style.left = "50%";
    loadingDiv.style.transform = "translate(-50%, -50%)";
    loadingDiv.style.zIndex = "1000";
    loadingDiv.style.backgroundColor = "rgba(0, 0, 0, 0.7)";
    loadingDiv.style.color = "white";
    loadingDiv.style.padding = "20px";
    loadingDiv.style.borderRadius = "8px";
    document.body.appendChild(loadingDiv);
    
    // Simulate loading delay (for demonstration)
    setTimeout(() => {
        document.body.removeChild(loadingDiv);
    }, 2000);
};

// Call showLoading on page load (or wherever appropriate)
window.onload = showLoading;
