document.addEventListener('DOMContentLoaded', () => {
    const navToggle = document.getElementById('nav-toggle');
    const navList = document.getElementById('nav-list');
    const modal = document.getElementById('project-modal');
    const closeModal = document.querySelector('.close');

    // Toggle navigation menu
    navToggle.addEventListener('click', () => {
        navList.classList.toggle('active');
    });

    // Open modal
    const viewButtons = document.querySelectorAll('.view-details');
    viewButtons.forEach(button => {
        button.addEventListener('click', (e) => {
            const projectId = e.target.dataset.project;
            openModal(projectId);
        });
    });

    // Close modal
    closeModal.addEventListener('click', () => {
        modal.style.display = 'none';
    });

    window.addEventListener('click', (event) => {
        if (event.target === modal) {
            modal.style.display = 'none';
        }
    });

    function openModal(projectId) {
        // Fetch project details based on projectId
        const projectDetails = {
            1: {
                title: "Sustainable Water-saving Model",
                description: "This project uses IoT and Raspberry Pi to help save water. It monitors water usage and alerts users to leaks."
            },
            2: {
                title: "Smart Home Energy System",
                description: "An innovative smart home system optimizing energy usage using AI and machine learning for real-time adjustments."
            },
            3: {
                title: "Green Energy for Schools",
                description: "A future initiative to introduce renewable energy in schools through solar panels and energy-efficient designs."
            }
        };

        const selectedProject = projectDetails[projectId];
        if (selectedProject) {
            document.getElementById('modal-title').innerText = selectedProject.title;
            document.getElementById('modal-description').innerText = selectedProject.description;
            modal.style.display = 'flex';
        }
    }
    // Smooth scroll for navigation
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        target.scrollIntoView({
            behavior: 'smooth'
        });
    });
});
// Smooth scroll for navigation
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        target.scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Scroll to top button
const scrollToTopButton = document.createElement('button');
scrollToTopButton.innerText = '↑';
scrollToTopButton.classList.add('scroll-to-top');
document.body.appendChild(scrollToTopButton);

window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
        scrollToTopButton.style.display = 'block'; // Show button after scrolling down
    } else {
        scrollToTopButton.style.display = 'none'; // Hide button when back at the top
    }
});

scrollToTopButton.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth' // Smooth scrolling back to top
    });
});


});
