function downloadCV() {
    const link = document.createElement('a');
    link.href = 'Gaber_cv.pdf'; // Ensure this file is in the same directory as index.html
    link.download = 'Gaber_cv.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}

// Toggle dark mode/light mode
const toggleDarkMode = () => {
    document.body.classList.toggle('dark-mode');
};

// Add event listener for the contact button
document.getElementById('contactBtn').addEventListener('click', () => {
    const contactForm = document.getElementById('contactForm');
    contactForm.scrollIntoView({ behavior: 'smooth' });
});