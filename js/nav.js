const navbar = document.getElementById("nav");

function navbarCollapse() {
    if (window.pageYOffset > 100) {
        navbar.classList.add("navbar-shrink");
    } else {
        navbar.classList.remove("navbar-shrink");
    }
}

window.addEventListener("scroll", navbarCollapse);

const aboutSection = document.querySelector('#about');
const portfolioSection = document.querySelector('#portfolio');
const researchSection = document.querySelector('#research');

// Function to update the active link based on the current section
function updateActiveLink() {
    const sections = [aboutSection, portfolioSection, researchSection];
    const navLinks = document.querySelectorAll('nav a.nav-link');

    let sectionInViewport = false;

    sections.forEach(section => {
        const rect = section.getBoundingClientRect();
        if (rect.top <= 400 && rect.bottom >= 300 && section.id !== "research") {
            sectionInViewport = true;
            navLinks.forEach(link => link.classList.remove('active'));
            const correspondingLink = document.querySelector(`nav a.nav-link[href="#${section.id}"]`);
            correspondingLink.classList.add('active');
        }
        else if (rect.top <= 500 && rect.bottom >= 30 && section.id === "research") {
            sectionInViewport = true;
            navLinks.forEach(link => link.classList.remove('active'));
            const correspondingLink = document.querySelector(`nav a.nav-link[href="#${section.id}"]`);
            correspondingLink.classList.add('active');
            document.getElementById('stars').style.display = 'none';
            document.getElementById('stars2').style.display = 'none';
            document.getElementById('stars3').style.display = 'none';
        }
    });

    // Remove the active class from all navigation links if no section is in view
    if (!sectionInViewport) {
        navLinks.forEach(link => link.classList.remove('active'));
        document.getElementById('stars').style.display = 'block';
        document.getElementById('stars2').style.display = 'block';
        document.getElementById('stars3').style.display = 'block';
    }
}

document.addEventListener('scroll', updateActiveLink);

updateActiveLink();