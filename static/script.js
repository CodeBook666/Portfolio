const text = "Kenuli Dinethma Bulathsinghela";

let i = 0;
function typing() {
    if (i < text.length) {
        document.querySelector(".terminal-header p").innerHTML += text.charAt(i);
        i++;
        setTimeout(typing, 50);
    }
}

typing();

function filterProjects(category) {

    let projects = document.querySelectorAll(".project");

    projects.forEach(project => {

        if (category === "all") {
            project.style.display = "block";
        }

        else if (project.classList.contains(category)) {
            project.style.display = "block";
        }

        else {
            project.style.display = "none";
        }

    });

}

const typedText = document.getElementById("typed-text");
let index = 0;

function type() {
    if (index < text.length) {
        typedText.innerHTML += text.charAt(index);
        index++;
        setTimeout(type, 150); // typing speed
    }
}

window.addEventListener("load", type);

// Fade-in sections on scroll
const sections = document.querySelectorAll("section");

function revealSections() {
    const triggerBottom = window.innerHeight * 0.85;

    sections.forEach(section => {
        const sectionTop = section.getBoundingClientRect().top;
        if (sectionTop < triggerBottom) {
            section.classList.add("visible");
        }
    });
}

window.addEventListener("scroll", revealSections);
window.addEventListener("load", revealSections);

// Smooth scroll for contact form anchor
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute("href")).scrollIntoView({
            behavior: "smooth"
        });
    });
});