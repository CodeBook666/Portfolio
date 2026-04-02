const text = "kenuli@portfolio ~ /portfolio";

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