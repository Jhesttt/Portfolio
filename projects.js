document.addEventListener("DOMContentLoaded", () => {
    const searchInput = document.querySelector(".searchBar");
    const projects = document.querySelectorAll(".project");

    searchInput.addEventListener("input", () => {
        const query = searchInput.value.toLowerCase();

        projects.forEach((project) => {
            const title = project.querySelector("h3").textContent.toLowerCase();
            const description = project.querySelector("p").textContent.toLowerCase();
            const tags = Array.from(project.querySelectorAll(".tags span"))
                .map(tag => tag.textContent.toLowerCase())
                .join(" ");

            const fullText = `${title} ${description} ${tags}`;

            if (fullText.includes(query)) {
                project.style.display = "";
            } else {
                project.style.display = "none";
            }
        });
    });
});